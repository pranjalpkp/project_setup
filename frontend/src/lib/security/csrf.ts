export class CSRFProtection {
  private static csrfToken: string | null = null;

  static generateToken(): string {
    const token = this.generateRandomToken();
    this.csrfToken = token;
    this.setCookie(token);
    this.setMetaTag(token);
    return token;
  }

  static getToken(): string | null {
    if (!this.csrfToken) {
      // Try to get from meta tag
      const metaTag = document.querySelector('meta[name="csrf-token"]');
      if (metaTag) {
        this.csrfToken = metaTag.getAttribute('content');
      }
    }
    return this.csrfToken;
  }

  static validateToken(token: string): boolean {
    const currentToken = this.getToken();
    if (!currentToken) return false;
    
    // Constant time comparison
    return this.secureCompare(currentToken, token);
  }

  private static generateRandomToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private static secureCompare(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
  }

  private static setCookie(token: string): void {
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);
    
    document.cookie = `csrf_token=${token}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Strict; Secure`;
  }

  private static setMetaTag(token: string): void {
    let metaTag = document.querySelector('meta[name="csrf-token"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'csrf-token');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', token);
  }
}