export interface CaseStudyMetric {
  label: string;
  value: string;
  change: string;
  description?: string;
}

export interface BeforeAfterBenchmark {
  metric: string;
  before: string;
  after: string;
  impact: string;
}

export interface CaseStudy {
  slug: string;
  clientType: string;
  location: string;
  niche: string;
  tagline: string;
  headline: string;
  summary: string;
  challenge: string;
  challengePoints: string[];
  solution: string;
  solutionPoints: string[];
  techStack: string[];
  metrics: CaseStudyMetric[];
  beforeAfter: BeforeAfterBenchmark[];
  deliverables: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: 'enterprise-saas-platform',
    clientType: 'Enterprise Cloud SaaS Platform',
    location: 'Global Market',
    niche: 'Custom Software & Cloud Architecture',
    tagline: 'Multi-Tenant SaaS & Edge API Engineering',
    headline: 'Engineering a High-Throughput Multi-Tenant SaaS Platform with Sub-300ms Global Edge Response',
    summary: 'A high-growth B2B software venture was struggling with an unscalable monolithic architecture, database latency bottlenecks, and low trial-to-paid conversion. Ink Urban re-engineered their entire product ecosystem into a modern Next.js 15, Spring Boot microservices, and distributed PostgreSQL architecture, accelerating enterprise onboarding by 3.8x.',
    challenge: 'Legacy monolithic architecture suffering from severe database deadlocks, slow multi-tenant query execution, and high churn during user onboarding.',
    challengePoints: [
      'Monolithic code debt causing 3.2s average API response times during peak enterprise traffic hours.',
      'Complex, fragmented onboarding UX leading to a 58% trial drop-off before reaching product activation.',
      'Lack of automated CI/CD pipelines, causing release friction and production deployment vulnerabilities.'
    ],
    solution: 'Architected a modular full-stack SaaS platform featuring event-driven microservices, edge caching, and a frictionless self-serve onboarding portal.',
    solutionPoints: [
      'Engineered an ultra-fast Next.js 15 App Router frontend paired with scalable Spring Boot & PostgreSQL backends.',
      'Implemented distributed Redis caching and Cloudflare Edge worker routing for sub-300ms global latency.',
      'Designed a bespoke, role-based workspace management system with automated enterprise billing and SOC2 compliance.'
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Spring Boot 3', 'PostgreSQL', 'Redis', 'Docker', 'Cloudflare Edge'],
    metrics: [
      { label: 'API Latency', value: '< 280ms', change: 'Global Edge Response', description: '92% reduction in end-to-end response time' },
      { label: 'Trial-to-Paid Lift', value: '+280%', change: 'Conversion Rate', description: 'Streamlined interactive activation flows' },
      { label: 'System Uptime', value: '99.99%', change: 'Enterprise SLA', description: 'High-availability cluster with automated failover' }
    ],
    beforeAfter: [
      { metric: 'Global API Response (P95)', before: '3,200ms', after: '280ms', impact: '91% Latency Reduction' },
      { metric: 'Trial Activation Rate', before: '14.2%', after: '54.0%', impact: '3.8x User Conversion' },
      { metric: 'Infrastructure Server Cost', before: '$8,400/mo', after: '$2,900/mo', impact: '65% Cloud Spend Savings' },
      { metric: 'Deployment Cycle Frequency', before: 'Bi-Weekly', after: 'Continuous (Daily)', impact: '10x Faster Feature Shipping' }
    ],
    deliverables: [
      'Full-stack multi-tenant web application and administrative control plane',
      'High-throughput Spring Boot REST and WebSocket streaming APIs',
      'Modular Figma design system with 80+ reusable component tokens',
      'Automated multi-region Docker CI/CD deployment pipelines',
      'Role-based access control (RBAC) and enterprise audit logging'
    ],
    quote: {
      text: "Ink Urban transformed our slow, fragile platform into an enterprise-grade SaaS powerhouse. Our platform now handles millions of daily operations seamlessly, and our enterprise close rate skyrocketed.",
      author: "Alex Rivera",
      role: "CTO & Co-Founder"
    }
  },
  {
    slug: 'autonomous-ai-ml-automation',
    clientType: 'Logistics & FinTech Operations',
    location: 'North America & Europe',
    niche: 'AI & Machine Learning Automation',
    tagline: 'Multi-Agent Workflow & Predictive Intelligence',
    headline: 'Deploying Multi-Agent AI Orchestration & Predictive ML Pipelines to Automate 85% of Operational Workflows',
    summary: 'An international logistics and financial clearing enterprise spent hundreds of manual hours daily processing complex unstructured documents, risk validation, and customer routing. Ink Urban built a multi-agent AI system combined with custom predictive ML models, reducing turnaround times from 4 hours to under 45 seconds.',
    challenge: 'Massive operational overhead and human error in analyzing variable invoices, customs filings, and real-time fraud risk screening.',
    challengePoints: [
      'Manual multi-step document intake creating backlogs of up to 48 hours for cross-border transactions.',
      'Static rule-based validation missing subtle anomalous fraud patterns, resulting in elevated financial chargebacks.',
      'Inability to scale operational throughput without linearly hiring large support teams.'
    ],
    solution: 'Designed and deployed an autonomous multi-agent AI pipeline coupled with fine-tuned domain LLMs and predictive risk scoring models.',
    solutionPoints: [
      'Deployed an asynchronous multi-agent orchestration framework for document ingestion, parsing, and automated validation.',
      'Trained custom XGBoost and Transformer-based anomaly detection models for real-time risk assessment.',
      'Engineered an intuitive human-in-the-loop (HITL) review dashboard with automated audit trails and CRM synchronization.'
    ],
    techStack: ['Python', 'PyTorch', 'LangChain', 'FastAPI', 'Next.js 15', 'PostgreSQL with pgvector', 'Kafka', 'Docker'],
    metrics: [
      { label: 'Manual Ops Reduction', value: '85%', change: 'Automated Processing', description: 'Zero human touch on standardized tasks' },
      { label: 'Processing Speed', value: '45 sec', change: 'From 4+ Hours', description: 'Sub-minute end-to-end transaction clearance' },
      { label: 'Model Accuracy', value: '99.4%', change: 'Precision & Recall', description: 'Validated against historical benchmark datasets' }
    ],
    beforeAfter: [
      { metric: 'Intake Processing Time', before: '4 Hours', after: '45 Seconds', impact: '99% Faster Turnaround' },
      { metric: 'Manual Review Volume', before: '100% of cases', after: '15% (Edge exceptions)', impact: '85% Labor Reallocated' },
      { metric: 'Anomaly Detection Rate', before: '78.2%', after: '99.4%', impact: 'Near-Zero Financial Fraud Risk' },
      { metric: 'Monthly Operational Overhead', before: '$46,000/mo', after: '$8,200/mo', impact: '82% Cost Reduction' }
    ],
    deliverables: [
      'Multi-agent workflow orchestration engine with asynchronous task queue',
      'Custom fine-tuned domain LLM parser for unstructured multilingual documents',
      'Real-time predictive fraud scoring and decisioning microservice',
      'Executive analytics cockpit with real-time operational telemetry',
      'Comprehensive security sandbox complying with ISO 27001 data isolation'
    ],
    quote: {
      text: "The autonomous AI system engineered by Ink Urban revolutionized our back-office operations. We scaled transaction volume by 5x without adding a single headcount.",
      author: "Elena Rostova",
      role: "VP of Operations & Technology"
    }
  },
  {
    slug: 'ecommerce-growth-cro-engine',
    clientType: 'Global E-Commerce & DTC Scaleup',
    location: 'Metropolitan Direct-to-Consumer',
    niche: 'Growth, Marketing & CRO Engineering',
    tagline: 'Headless Commerce & Full-Funnel Growth',
    headline: '+240% Revenue Surge via Headless Next.js Storefront, CRO Funnel Architecture, and Programmatic SEO Engines',
    summary: 'A rapidly scaling omnichannel lifestyle brand was hemorrhaging customers due to a bloated Shopify template with 4.5s mobile load times, high checkout drop-offs, and disjointed ad acquisition. Ink Urban built a bespoke headless commerce platform, engineered high-converting checkout flows, and deployed automated programmatic SEO engines, driving a 240% increase in revenue.',
    challenge: 'Sluggish template architecture causing severe mobile cart abandonment and escalating customer acquisition costs (CAC) across paid channels.',
    challengePoints: [
      'Shopify template bogged down by 40+ third-party scripts resulting in a 32/100 mobile Lighthouse performance score.',
      'A 68% shopping cart abandonment rate caused by friction in multi-page checkout and missing localized payment gateways.',
      'Flat organic search presence with zero programmatic landing pages for high-intent long-tail commercial keywords.'
    ],
    solution: 'Replaced the legacy storefront with a headless Next.js edge application, optimized checkout pathways, and automated organic search growth engines.',
    solutionPoints: [
      'Engineered an instant, sub-0.5s headless storefront using Next.js 15, Tailwind CSS, and edge caching.',
      'Implemented a 1-click slide-out checkout drawer with Apple Pay, Google Pay, and localized multi-currency support.',
      'Built a programmatic SEO entity architecture that automatically deployed 300+ high-ranking category landing pages.'
    ],
    techStack: ['Next.js 15 Headless', 'React 19', 'Tailwind CSS', 'Shopify Storefront API', 'Stripe Elements', 'Cloudflare Edge'],
    metrics: [
      { label: 'Revenue Growth', value: '+240%', change: 'Year-over-Year', description: 'Net top-line brand revenue expansion' },
      { label: 'Conversion Rate', value: '4.6%', change: 'From 1.3%', description: '3.5x boost in mobile visitors completing purchase' },
      { label: 'Page Load Speed', value: '0.4s', change: '99/100 Core Vitals', description: 'Instant page transitions across mobile devices' }
    ],
    beforeAfter: [
      { metric: 'Mobile Page Load (LCP)', before: '4.5s', after: '0.42s', impact: '90% Faster Page Delivery' },
      { metric: 'Mobile Conversion Rate', before: '1.3%', after: '4.6%', impact: '+253% Conversion Lift' },
      { metric: 'Customer Acquisition Cost (CAC)', before: '$64.00', after: '$22.50', impact: '65% Cheaper Customer Acquisition' },
      { metric: 'Organic Search Traffic', before: '12,000 / mo', after: '94,000 / mo', impact: '7.8x Organic Inbound Surge' }
    ],
    deliverables: [
      'Sub-second headless Next.js storefront integrated with Shopify and Stripe',
      'High-converting 1-click slide-out cart and checkout drawer architecture',
      'Programmatic SEO catalog engine ranking for 300+ commercial keywords',
      'Advanced conversion tracking, server-side Google Tag Manager, and Meta CAPI',
      'Automated email/SMS lifecycle retention workflows and cohort analytics'
    ],
    quote: {
      text: "Switching to Ink Urban's custom headless build and growth funnel was the single highest-ROI decision we made. Our site is blazing fast, conversion rates tripled, and our revenue has never been higher.",
      author: "Julian Thorne",
      role: "Founder & Chief Growth Officer"
    }
  }
];
