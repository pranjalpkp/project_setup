# 🧠 ENTERPRISE SECURE APPLICATION

## AI Development & Pair-Programming Rules

**Version:** 1.0
**Purpose:** Rules for AI coding assistants working on this project.

---

# 1. PROJECT CONTEXT

```yaml
project:
  name: Enterprise Secure Application
  type: Full-stack Enterprise Web Application

frontend:
  framework: Next.js 14
  language: TypeScript
  rendering: Server Components by default
  styling: Component-local styles where practical

backend:
  framework: Spring Boot 3.x
  language: Java
  build_tool: Maven

database:
  engine: PostgreSQL
  minimum_version: "16"

security:
  approach: Defense in depth
  priorities:
    - Authentication
    - Authorization
    - Input validation
    - XSS prevention
    - CSRF protection
    - SQL injection prevention
    - Secure session management
    - Rate limiting
    - Secure headers
    - Secrets management
    - Audit logging
    - Data protection

quality:
  priority: Production-ready
  architecture: Maintainable and scalable
  testing: Required for security-critical functionality
```

---

# 2. AI OPERATING PRINCIPLES

The AI assistant MUST follow these principles for every development task.

## 2.1 Security First

Security is non-negotiable.

Never intentionally introduce a vulnerability to simplify implementation.

If the requested implementation is insecure:

1. Explain the security problem briefly.
2. Do not silently implement the insecure approach.
3. Provide a secure alternative.
4. Clearly identify any remaining assumptions or risks.

---

## 2.2 Do Not Invent Project Behavior

Do not assume that an endpoint, service, database table, environment variable, authentication mechanism, library, or configuration already exists.

If the required information is not available:

* State the assumption.
* Prefer existing project patterns.
* Ask for clarification when the missing information materially affects security or architecture.
* Never fabricate implementation details and present them as existing functionality.

---

## 2.3 Preserve Existing Security Controls

When modifying existing code:

* Do not remove authentication without explicit justification.
* Do not remove authorization checks.
* Do not weaken CSRF protection.
* Do not disable CORS restrictions merely to resolve an error.
* Do not disable TLS/security headers.
* Do not expose internal exceptions.
* Do not bypass validation.
* Do not remove rate limiting.
* Do not disable security middleware.

If an existing control appears incorrect, explain the issue and propose a safe correction.

---

# 3. NEVER INTRODUCE THESE SECURITY VIOLATIONS

## 3.1 Hardcoded Secrets

Never hardcode:

* Passwords
* API keys
* JWT secrets
* Encryption keys
* Database credentials
* OAuth client secrets
* Private keys
* Tokens
* Cloud credentials

### ❌ Never

```typescript
const apiKey = "secret-api-key";
const password = "admin123";
```

### ✅ Use environment/configuration management

```typescript
const apiKey = process.env.API_KEY;
```

Backend secrets must be supplied through secure configuration/secrets management.

Never expose server-side secrets through `NEXT_PUBLIC_*` environment variables.

---

# 4. XSS PREVENTION

Treat all external/user-controlled data as untrusted.

Potentially untrusted sources include:

* Request bodies
* Query parameters
* URL parameters
* HTTP headers
* Cookies
* Database records originating from users
* Uploaded files
* Third-party API responses

## 4.1 React/Next.js

Never use `dangerouslySetInnerHTML` with unsanitized user content.

### ❌ Never

```tsx
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

### ✅ Prefer normal React rendering

```tsx
<div>{userInput}</div>
```

If the application intentionally supports user-provided HTML:

* Sanitize it using an established HTML sanitizer.
* Apply an explicit allowlist.
* Do not rely on sanitization alone.
* Apply appropriate output security controls.

---

# 5. INPUT VALIDATION

Do not rely exclusively on client-side validation.

Validation must occur at the server trust boundary.

## Frontend

Use strongly typed schemas where appropriate.

## Backend

Validate request DTOs using appropriate Bean Validation mechanisms.

Example:

```java
public record CreateUserRequest(
    @NotBlank
    @Size(max = 100)
    String username,

    @NotBlank
    @Size(max = 255)
    String email
) {}
```

Validation should include:

* Required fields
* Maximum lengths
* Allowed formats
* Numeric ranges
* Enumerated values
* Business constraints
* File size/type restrictions where applicable

Never assume frontend validation makes backend validation unnecessary.

---

# 6. SQL INJECTION PREVENTION

Never construct SQL using string concatenation with external input.

### ❌ Never

```java
String sql = "SELECT * FROM users WHERE id = " + userId;
```

### ✅ Use parameterized queries

```java
String sql = "SELECT * FROM users WHERE id = ?";
```

Use:

* Spring Data repositories
* JPA/Hibernate parameter binding
* Named parameters
* Prepared statements

Never interpolate untrusted values into SQL.

For dynamic sorting/filtering, use explicit allowlists rather than directly inserting user-provided column names.

---

# 7. AUTHENTICATION

Authentication must be implemented on the server.

Never trust:

* A frontend boolean such as `isAdmin`
* Hidden form fields
* Client-side roles
* Client-side permissions
* User-controlled JWT claims without server verification
* Request parameters claiming identity

Authentication must verify:

* Identity
* Credential validity
* Session/token validity
* Expiration
* Revocation requirements where applicable

---

# 8. AUTHORIZATION

Authentication and authorization are separate.

Being logged in does NOT mean the user is authorized to perform every action.

Every protected operation must enforce appropriate authorization.

Examples:

```text
Authentication:
"Who are you?"

Authorization:
"Are you allowed to perform this operation on this resource?"
```

Always perform authorization checks server-side.

For resource access, enforce ownership or permission checks.

Example:

```text
GET /users/123
```

must not assume that any authenticated user can access user `123`.

---

# 9. PASSWORD SECURITY

Never store plaintext passwords.

Never encrypt passwords reversibly.

Use a strong password hashing algorithm such as:

* Argon2id
* BCrypt when appropriate

Password policies should prioritize:

* Sufficient length
* Common/breached-password rejection where appropriate
* Rate limiting
* Account protection
* MFA where required by the application

Do not rely solely on arbitrary requirements such as:

```text
8 characters + uppercase + number + special character
```

Password security should be based on the application's threat model and security requirements.

---

# 10. SESSION AND TOKEN SECURITY

Never store sensitive authentication credentials in insecure browser storage.

Do not store passwords, session secrets, or long-lived authentication credentials in:

```typescript
localStorage
sessionStorage
```

For cookie-based authentication, use appropriate security attributes such as:

```text
HttpOnly
Secure
SameSite
```

The exact `SameSite` configuration must match the application's architecture.

Do NOT automatically treat:

```text
SameSite=None
```

as universally forbidden.

If `SameSite=None` is required, it must be intentionally configured with appropriate security controls, including `Secure`, and the cross-site architecture must be understood.

Likewise, `withCredentials: false` is not inherently insecure. Credential handling must match the authentication architecture.

---

# 11. CSRF PROTECTION

For cookie-based authentication, protect state-changing operations against CSRF.

Protect at minimum:

```text
POST
PUT
PATCH
DELETE
```

Use the security framework's established CSRF mechanism where applicable.

Do not disable CSRF protection merely because an endpoint is inconvenient to call.

If CSRF is intentionally disabled for a specific API architecture, document the reason and ensure the authentication mechanism is appropriate for that architecture.

---

# 12. CORS

Never use permissive CORS configuration without justification.

### ❌ Avoid

```java
allowedOrigins("*")
```

especially when credentials are involved.

Define explicit trusted origins.

Do not use CORS as a substitute for authorization.

CORS controls browser-origin access; it does not determine whether a user is authorized.

---

# 13. RATE LIMITING

Rate limiting must be considered for security-sensitive endpoints.

Examples:

```text
Login
Password reset
OTP verification
Registration
Invitation endpoints
API token creation
Search endpoints
Expensive operations
File uploads
```

Rate limits should consider:

* IP address
* User/account
* Endpoint
* Authentication state
* Abuse patterns

Never expose an unlimited authentication endpoint.

---

# 14. ERROR HANDLING

Never expose sensitive internal information to clients.

Do not return:

* Stack traces
* Database credentials
* SQL queries
* Internal file paths
* Secrets
* Access tokens
* Framework internals
* Infrastructure details

### ❌ Never

```java
return ResponseEntity
    .status(500)
    .body(exception.getMessage());
```

Use centralized exception handling.

Client responses should contain safe, useful error information.

Detailed diagnostics belong in controlled server-side logs.

---

# 15. LOGGING

Use structured logging where practical.

Never log:

* Passwords
* Authentication tokens
* Session identifiers
* API keys
* Encryption keys
* Authorization headers
* Sensitive personal data unless explicitly required

### ❌ Never

```java
log.info("Login request password={}", password);
```

Logs should support:

* Debugging
* Security investigations
* Auditing
* Operational monitoring

Avoid `console.log` in production application code.

---

# 16. AUDIT LOGGING

Security-sensitive actions should be auditable.

Examples:

```text
Login success
Login failure
Password change
Password reset
Role change
Permission change
Account creation
Account deletion
Sensitive data access
Administrative actions
Security configuration changes
```

Audit events should contain appropriate metadata such as:

```text
timestamp
actor
action
resource
result
request/correlation ID
```

Do not store secrets in audit logs.

---

# 17. ENCRYPTION AND DATA PROTECTION

Distinguish between:

### Password hashing

Passwords should be hashed, not encrypted.

### Encryption in transit

Use HTTPS/TLS.

### Encryption at rest

Protect sensitive data where required by the application's threat model and compliance requirements.

### Application secrets

Store keys/secrets using appropriate secret-management mechanisms.

Never invent custom cryptographic algorithms.

Use established cryptographic libraries and algorithms.

---

# 18. NEXT.JS SECURITY RULES

## 18.1 Server Components

Prefer Server Components by default.

Use Client Components only when client-side behavior is actually required.

Avoid unnecessarily moving sensitive logic to the browser.

---

## 18.2 Client Components

Never expose server secrets to client-side code.

Be particularly careful with:

```text
NEXT_PUBLIC_*
```

Anything exposed through a public environment variable should be considered browser-visible.

---

## 18.3 Server-Side Authorization

Do not rely on UI hiding for authorization.

### ❌ Insufficient

```tsx
{user.isAdmin && <DeleteButton />}
```

This only controls presentation.

The backend must independently verify authorization.

---

# 19. SPRING BOOT SECURITY RULES

Use established Spring Security mechanisms.

Prefer:

* SecurityFilterChain
* Authentication providers
* Password encoders
* Method-level authorization where appropriate
* DTO validation
* Centralized exception handling

Avoid custom security implementations unless there is a clear requirement.

Do not bypass Spring Security simply to make an endpoint easier to call.

---

# 20. DATABASE RULES

Database access must:

* Use parameterized queries
* Validate inputs
* Enforce constraints
* Use appropriate indexes
* Use transactions where required
* Avoid unnecessary data retrieval
* Avoid exposing internal database structure through API responses

Use migrations for schema changes.

Examples:

```text
Flyway
Liquibase
```

Do not manually modify production schemas as part of ordinary application code.

---

# 21. ORM / JPA RULES

Be aware of:

* N+1 queries
* Lazy loading
* Transaction boundaries
* Entity exposure
* Mass assignment
* Over-fetching
* Under-fetching
* Serialization cycles

Do not expose JPA entities directly as public API contracts when doing so creates security or architectural problems.

Prefer request/response DTOs.

---

# 22. SSRF PROTECTION

If the application accepts URLs or makes server-side HTTP requests based on user input:

* Validate the URL.
* Restrict protocols.
* Consider an explicit domain allowlist.
* Prevent access to internal network resources.
* Protect cloud metadata endpoints.
* Validate redirects.
* Apply network-level controls where appropriate.

Never blindly fetch arbitrary user-provided URLs from the server.

---

# 23. FILE UPLOAD SECURITY

If file uploads are implemented:

Validate:

```text
File size
Content type
File extension
File signature/magic bytes
Filename
Storage location
```

Never trust the filename or MIME type supplied by the client.

Do not execute uploaded files.

Store uploads outside executable application directories where appropriate.

Use generated storage identifiers rather than trusting user-provided filenames.

---

# 24. SECURITY HEADERS

Use appropriate security headers according to the deployment architecture.

Consider:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Strict-Transport-Security
Permissions-Policy
Frame protection / CSP frame-ancestors
```

Do not blindly copy a header configuration without considering the application's actual requirements.

---

# 25. DEPENDENCY SECURITY

Do not introduce unnecessary dependencies.

Before recommending a dependency:

* Prefer established libraries.
* Consider maintenance status.
* Consider known vulnerabilities.
* Prefer minimal dependencies.
* Avoid abandoned packages.
* Use the project's existing dependency conventions.

Do not recommend replacing a secure built-in mechanism with an unnecessary third-party package.

---

# 26. TYPESCRIPT RULES

Never use:

```typescript
any
```

unless there is an exceptional, documented reason.

Prefer:

```typescript
unknown
```

with proper narrowing when the type is genuinely unknown.

Define explicit types for:

* API requests
* API responses
* Component props
* Domain models
* Error responses
* Configuration
* Form data

Avoid unsafe type assertions.

### ❌ Avoid

```typescript
const user = response.data as User;
```

when the response has not actually been validated.

---

# 27. API CONTRACTS

API contracts must be explicit.

For every API endpoint consider:

```text
Request
Authentication
Authorization
Validation
Business logic
Response
Errors
Rate limiting
Audit logging
```

Do not return unnecessary sensitive fields.

For example, a user API should not accidentally return:

```text
passwordHash
internalSecurityFlags
privateTokens
secretKeys
```

---

# 28. FRONTEND COMPONENT ARCHITECTURE

Follow:

```text
One component per file
```

### ✅

```text
Button.tsx
Button.module.css
```

### ❌

```text
Components.tsx
```

containing many unrelated components.

---

# 29. FILE SIZE

Keep files below approximately:

```text
300 lines
```

If a file grows too large:

* Extract components.
* Extract services.
* Extract utilities.
* Extract types.
* Extract validation.
* Extract business logic.

Do not split code artificially merely to satisfy the line count.

Maintain logical cohesion.

---

# 30. EXPORT RULES

Prefer explicit named exports.

### ✅

```typescript
export { Button } from "./Button";
```

### ❌

```typescript
export * from "./Button";
```

Explicit exports make the public API of modules easier to understand and maintain.

---

# 31. TYPES ORGANIZATION

Keep domain types organized.

Example:

```text
types/
  user/
    user.types.ts
    user-api.types.ts

  auth/
    auth.types.ts

  common/
    api-error.types.ts
```

Do not create one enormous global types file.

---

# 32. STYLING

Prefer component-local styling.

Example:

```text
Button/
  Button.tsx
  Button.module.css
```

Avoid putting component-specific styles into a giant global stylesheet unless there is a clear reason.

---

# 33. CONSTANTS

Do not scatter magic values throughout the code.

### ❌

```typescript
if (attempts > 5) {
```

### ✅

```typescript
const MAX_LOGIN_ATTEMPTS = 5;
```

Constants should have meaningful names and appropriate scope.

---

# 34. ERROR HANDLING

Every external operation must have appropriate error handling.

Examples:

```text
HTTP requests
Database operations
File operations
Authentication
Parsing
External APIs
Transactions
```

Do not silently ignore failures.

### ❌

```typescript
try {
  await saveUser();
} catch {}
```

Errors should either be:

* Handled
* Transformed into a safe error
* Propagated appropriately
* Logged safely when necessary

---

# 35. ASYNC OPERATIONS

Avoid unhandled promises.

Ensure asynchronous operations have appropriate:

```text
await
error handling
timeouts
cancellation where appropriate
retry strategy where appropriate
```

Do not blindly retry security-sensitive operations.

---

# 36. API CLIENT SECURITY

Centralize API behavior where appropriate.

Consider:

```text
Authentication
CSRF
Timeouts
Error handling
Response validation
Correlation IDs
Retry policy
```

Never automatically retry operations where retrying could cause unintended side effects unless the operation is designed to be idempotent or has appropriate safeguards.

---

# 37. SENSITIVE DATA MINIMIZATION

Only collect, process, return, and store information required by the business requirement.

Avoid:

```text
Over-fetching
Over-returning
Unnecessary PII
Unnecessary identifiers
Unnecessary client-side storage
```

Apply least privilege to both data and functionality.

---

# 38. BUSINESS LOGIC SECURITY

Never rely exclusively on frontend restrictions.

Examples:

```text
Maximum transaction amount
User ownership
Role permissions
Account status
Resource state
Workflow transitions
```

must be enforced on the backend.

---

# 39. CONCURRENCY AND TRANSACTIONS

For operations involving:

* Balances
* Inventory
* Counters
* Permissions
* State transitions
* Unique resources

consider race conditions and concurrent requests.

Use appropriate:

```text
Transactions
Database constraints
Locking
Optimistic concurrency
Atomic operations
```

Do not assume requests execute sequentially.

---

# 40. TESTING REQUIREMENTS

Security-sensitive functionality should have tests.

At minimum, consider tests for:

### Authentication

```text
Valid credentials
Invalid credentials
Expired credentials
Locked account
Rate limiting
```

### Authorization

```text
Unauthorized user
Insufficient role
Resource ownership
Administrative access
```

### Validation

```text
Missing fields
Invalid formats
Boundary values
Oversized input
Unexpected values
```

### Security

```text
XSS payloads
SQL injection attempts
CSRF protection
Access-control bypass attempts
Sensitive information leakage
```

### API

```text
Success
Validation failure
Authentication failure
Authorization failure
Server error
```

---

# 41. TESTING RULE

When generating security-sensitive code, provide or recommend appropriate tests.

Do not claim code is secure merely because it compiles.

Compilation correctness and security correctness are different concerns.

---

# 42. DOCUMENTATION

Public or non-obvious code should have useful documentation.

Use JSDoc for important TypeScript functions.

Use JavaDoc for important public Java APIs where appropriate.

Documentation should explain:

* Purpose
* Important assumptions
* Security considerations
* Non-obvious behavior

Do not write comments that merely repeat the code.

---

# 43. NO CONSOLE LOGGING

Do not use:

```typescript
console.log()
```

for production application logging.

Use the application's established logging mechanism.

Never log secrets or authentication material.

---

# 44. CODE REVIEW MODE

When asked to review code, analyze at least:

```text
1. XSS
2. CSRF
3. SQL injection
4. Authentication
5. Authorization
6. Session/token security
7. Input validation
8. Rate limiting
9. Sensitive data exposure
10. Secrets
11. Error handling
12. Logging
13. Encryption/hashing
14. SSRF
15. File upload security
16. CORS
17. Security headers
18. Dependency risks
19. TypeScript safety
20. Tests
21. Scalability
22. Maintainability
```

Do not say “secure” without qualification.

Instead identify:

```text
Verified
Not verified
Potential risk
Recommended improvement
```

---

# 45. AI RESPONSE BEHAVIOR

When implementing code, follow this sequence:

## Step 1 — Understand

Identify:

* Existing architecture
* Relevant files
* Security boundaries
* Dependencies
* Authentication model
* Data flow
* User-controlled inputs

## Step 2 — Plan

Briefly identify:

* Files to modify
* Files to create
* Security controls required
* Tests required

## Step 3 — Implement

Generate production-quality code following project conventions.

## Step 4 — Review

Before finalizing, check:

```text
Security
Type safety
Error handling
Authorization
Validation
Logging
Performance
Scalability
Tests
Project conventions
```

## Step 5 — Report

State:

```text
Implemented
Security considerations
Files changed
Tests added/recommended
Assumptions
Remaining risks
```

---

# 46. SECURITY VIOLATION RESPONSE RULES

If the user asks for insecure code, do not silently comply.

### Hardcoded secret

Respond conceptually:

```text
❌ Never hardcode secrets. Use environment variables or a secrets manager.
```

Then provide the secure implementation.

### SQL concatenation

```text
❌ This can introduce SQL injection. Use parameterized queries.
```

### Unsafe HTML

```text
❌ This can introduce XSS. Prefer normal React rendering or sanitize intentionally supported HTML.
```

### Missing rate limiting

```text
❌ This can allow brute-force or abuse attacks. Add appropriate rate limiting.
```

### Missing authorization

```text
❌ Authentication alone is insufficient. Add server-side authorization checks.
```

---

# 47. DO NOT OVER-ENGINEER

Security does not mean unnecessary complexity.

Prefer:

```text
Simple
Explicit
Typed
Testable
Maintainable
Secure
```

Do not introduce:

* Unnecessary abstractions
* Unnecessary microservices
* Unnecessary dependencies
* Custom cryptography
* Complex frameworks
* Excessive design patterns

Use the simplest secure solution that satisfies the requirements.

---

# 48. PERFORMANCE AND SCALABILITY

Consider:

```text
Database indexes
N+1 queries
Caching
Pagination
Connection pooling
Async processing
API payload size
Frontend rendering
Bundle size
Rate limiting
Resource exhaustion
```

Do not optimize prematurely.

Measure or reason about the bottleneck before introducing complexity.

---

# 49. RESOURCE EXHAUSTION

Protect expensive operations against abuse.

Consider limits for:

```text
Request body size
File uploads
Pagination limits
Search complexity
Query execution
Batch operations
Concurrent operations
External API calls
```

Never allow user input to create uncontrolled resource consumption.

---

# 50. DEPLOYMENT SECURITY

Production configuration should ensure:

```text
HTTPS
Secure cookies where applicable
Secrets outside source control
Production logging
Restricted CORS
Security headers
Database credentials protected
Debug mode disabled
Detailed error pages disabled
Appropriate monitoring
```

Never commit:

```text
.env
.env.local
production secrets
private keys
credentials
tokens
```

unless explicitly using a safe encrypted configuration mechanism designed for repository storage.

---

# 51. GIT / SOURCE CONTROL

Never commit secrets.

Before suggesting a commit, consider:

```text
Secrets
Credentials
Generated sensitive files
Private configuration
Debug files
Temporary files
```

Use appropriate `.gitignore` configuration.

If a secret has already been committed, rotating the secret is more important than merely deleting it from the latest commit.

---

# 52. ENVIRONMENT VARIABLES

Use environment variables for environment-specific configuration.

Examples:

```text
DATABASE_URL
AUTH_SECRET
API_URL
CORS_ALLOWED_ORIGINS
```

Do not assume an environment variable exists.

Validate required configuration during application startup where appropriate.

Never expose server-only environment variables to the browser.

---

# 53. DATABASE TRANSACTION RULES

Use transactions for operations that must be atomic.

Example:

```text
Create order
Reserve inventory
Create payment record
```

If the business operation requires atomicity, ensure partial updates cannot leave the system in an invalid state.

---

# 54. API RESPONSE RULES

Return only data required by the client.

Prefer explicit response DTOs.

Example:

```java
public record UserResponse(
    UUID id,
    String username,
    String email
) {}
```

Do not expose internal entities or security-related fields unnecessarily.

---

# 55. SECURITY CHECKLIST

Before considering a security-sensitive implementation complete:

* [ ] External input validated
* [ ] Output safely encoded
* [ ] XSS considered
* [ ] CSRF considered
* [ ] SQL injection prevented
* [ ] Authentication enforced
* [ ] Authorization enforced
* [ ] Resource ownership verified
* [ ] Rate limiting considered
* [ ] Sensitive data minimized
* [ ] Secrets protected
* [ ] Passwords securely hashed
* [ ] Sessions/tokens protected
* [ ] CORS reviewed
* [ ] Security headers reviewed
* [ ] Error responses sanitized
* [ ] Logs reviewed for sensitive data
* [ ] Audit logging considered
* [ ] SSRF considered where applicable
* [ ] File upload security considered where applicable
* [ ] Dependency security considered
* [ ] Tests added or identified

---

# 56. CODE QUALITY CHECKLIST

Before finalizing code:

* [ ] TypeScript types are explicit
* [ ] No unnecessary `any`
* [ ] Error handling implemented
* [ ] No silent failures
* [ ] No unnecessary `console.log`
* [ ] Constants used appropriately
* [ ] Imports are clean
* [ ] Naming is consistent
* [ ] Components are separated logically
* [ ] Files remain maintainable
* [ ] Styles are appropriately co-located
* [ ] Types are organized
* [ ] API contracts are explicit
* [ ] Tests are included where appropriate
* [ ] Documentation added where useful
* [ ] Existing project conventions followed

---

# 57. FINAL AI RULE

The AI must always prioritize:

```text
1. Security
2. Correctness
3. Authorization
4. Data protection
5. Reliability
6. Maintainability
7. Performance
8. Developer convenience
```

Developer convenience must never override a necessary security control.

The AI must not claim that a security property has been implemented unless it can verify the relevant code or configuration.

When uncertain, clearly state the uncertainty rather than making a false security claim.

**End of AI Development Rules**
