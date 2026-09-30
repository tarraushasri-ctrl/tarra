import { Job } from '../types';

export const INITIAL_JOBS: Job[] = [
  {
    id: 'job-1',
    title: 'Staff Distributed Systems Engineer',
    company: 'CloudMatrix',
    location: 'San Francisco, CA',
    workplaceType: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    experienceLevel: 'Staff',
    salaryMin: 215000,
    salaryMax: 265000,
    currency: 'USD',
    postedDaysAgo: 1,
    featured: true,
    applicantCount: 38,
    tags: ['Go', 'Kubernetes', 'Distributed Systems', 'Kafka', 'Raft'],
    companyDescription: 'CloudMatrix builds next-generation serverless infrastructure for global enterprise telemetry and event streaming.',
    description: 'We are seeking a Staff Distributed Systems Engineer to lead the architecture of our multi-region consensus protocol and high-throughput real-time stream processing platform.',
    responsibilities: [
      'Architect and scale our multi-region data replication engine processing 250M+ events per minute.',
      'Lead cross-functional RFC reviews with engineering directors and infrastructure teams.',
      'Mentor senior engineers in fault tolerance, low-latency network protocols, and Linux kernel tuning.',
      'Participate in architecture design for sub-millisecond p99 latency guarantees.'
    ],
    qualifications: [
      '8+ years of production experience in backend systems with Go, Rust, or C++.',
      'Demonstrated expertise in distributed consensus protocols (Raft, Paxos) and storage engines (LSM-trees, RocksDB).',
      'Track record of operating mission-critical infrastructure handling high concurrency with zero planned downtime.',
      'Strong communication skills for documenting RFCs and collaborating across distributed teams.'
    ],
    benefits: [
      'Comprehensive health, dental, and vision with 100% premium coverage',
      '$4,000 annual continuous education and conference stipend',
      'Flexible remote work environment with $1,500 home office setup allowance',
      '401(k) matching up to 5% with immediate vesting'
    ]
  },
  {
    id: 'job-2',
    title: 'Senior Frontend Architect',
    company: 'Veloce AI',
    location: 'New York, NY',
    workplaceType: 'Hybrid',
    type: 'Full-time',
    category: 'Engineering',
    experienceLevel: 'Senior',
    salaryMin: 175000,
    salaryMax: 210000,
    currency: 'USD',
    postedDaysAgo: 2,
    featured: true,
    applicantCount: 52,
    tags: ['React 19', 'TypeScript', 'WebGL', 'Canvas', 'Design Systems'],
    companyDescription: 'Veloce AI delivers generative workflow acceleration and collaborative canvas tools for modern creative agencies.',
    description: 'Lead the frontend engineering team responsible for our real-time interactive canvas, infinite workspace viewport, and shared collaboration features.',
    responsibilities: [
      'Build performant 60fps web canvas renderers using modern HTML5 Canvas, WebGL, and React.',
      'Define typography, spatial tokens, and reusable primitives across the web design system.',
      'Profile frontend client performance, memory consumption, and bundle size optimizations.',
      'Work side-by-side with product designers to prototype cutting-edge micro-interactions.'
    ],
    qualifications: [
      '5+ years building deep, complex React/TypeScript applications at scale.',
      'Deep understanding of web rendering performance, compositor layers, and DOM virtualization.',
      'Experience with WebSocket protocols and optimistic UI state management.',
      'Strong eye for typography, spatial harmony, and accessible design principles.'
    ],
    benefits: [
      'Competitive equity package with early exercise options',
      'Unlimited Paid Time Off with mandatory 3-week minimum',
      'Top-tier medical, dental, and vision insurance',
      'Annual company retreats in international design capitals'
    ]
  },
  {
    id: 'job-3',
    title: 'Lead Product Designer',
    company: 'Horizon Studio',
    location: 'Austin, TX',
    workplaceType: 'Remote',
    type: 'Full-time',
    category: 'Product & Design',
    experienceLevel: 'Lead',
    salaryMin: 165000,
    salaryMax: 195000,
    currency: 'USD',
    postedDaysAgo: 3,
    featured: false,
    applicantCount: 29,
    tags: ['Figma', 'Design Systems', 'User Research', 'Information Architecture'],
    companyDescription: 'Horizon Studio designs human-centered productivity tools for climate research scientists and engineering teams.',
    description: 'We are looking for a Lead Product Designer to own the complete end-to-end design lifecycle for our climate data modeling suite.',
    responsibilities: [
      'Synthesize complex spatial telemetry and climate data into intuitive, readable user experiences.',
      'Lead design reviews, conduct qualitative customer interviews, and test prototypes.',
      'Curate our unified design tokens and component libraries across web and desktop platforms.',
      'Partner closely with product management to define the 12-month product vision and roadmap.'
    ],
    qualifications: [
      '6+ years of end-to-end product design experience for complex B2B or data-intensive software.',
      'Exemplary portfolio demonstrating systems thinking, typography, and clear design rationale.',
      'Proven ability to translate multi-dimensional scientific workflows into elegant consumer-grade interfaces.',
      'Proficiency in Figma token management, motion design, and rapid interactive prototyping.'
    ],
    benefits: [
      'Full healthcare coverage including mental health and wellness support',
      'Flexible asynchronous working hours across US time zones',
      'Generous 16-week paid parental leave policy',
      'Carbon offset program and annual sustainability stipend'
    ]
  },
  {
    id: 'job-4',
    title: 'Senior Machine Learning Infrastructure Engineer',
    company: 'Kestrel Labs',
    location: 'Seattle, WA',
    workplaceType: 'Hybrid',
    type: 'Full-time',
    category: 'Data & AI',
    experienceLevel: 'Senior',
    salaryMin: 190000,
    salaryMax: 235000,
    currency: 'USD',
    postedDaysAgo: 2,
    featured: true,
    applicantCount: 44,
    tags: ['PyTorch', 'CUDA', 'Ray', 'Kubernetes', 'Triton'],
    companyDescription: 'Kestrel Labs operates dedicated high-throughput GPU clusters for fine-tuning and inference of enterprise open-weights models.',
    description: 'Join our core platform group to build high-efficiency inference serving pipelines, GPU cluster autoscaling, and model evaluation systems.',
    responsibilities: [
      'Scale our distributed GPU training and inference clusters utilizing vLLM, TensorRT, and Triton.',
      'Optimize inter-node InfiniBand communication and model checkpoint loading throughput.',
      'Build automated benchmarking pipelines to monitor latency, memory footprints, and token throughput.',
      'Implement real-time monitoring and alerting for GPU hardware health and thermal throttling.'
    ],
    qualifications: [
      '4+ years building production infrastructure for machine learning or distributed computing.',
      'Hands-on experience with PyTorch internals, CUDA kernel optimization, or GPU cluster scheduling.',
      'Deep familiarity with Linux networking, kernel parameters, and container runtimes.',
      'Proficiency in Python and Go or Rust.'
    ],
    benefits: [
      'High-tier equity compensation with 1-year cliff and monthly vesting',
      'Relocation assistance package for candidates moving to Seattle, WA',
      'Comprehensive medical, vision, and dental coverage',
      '$5,000 personal budget for hardware and research experimentation'
    ]
  },
  {
    id: 'job-5',
    title: 'Principal Data Architect',
    company: 'FinPulse Systems',
    location: 'Chicago, IL',
    workplaceType: 'On-site',
    type: 'Full-time',
    category: 'Data & AI',
    experienceLevel: 'Principal',
    salaryMin: 220000,
    salaryMax: 275000,
    currency: 'USD',
    postedDaysAgo: 4,
    featured: false,
    applicantCount: 19,
    tags: ['Snowflake', 'dbt', 'ClickHouse', 'Data Governance', 'PostgreSQL'],
    companyDescription: 'FinPulse Systems powers institutional risk modeling and real-time trade settlement for global asset managers.',
    description: 'As Principal Data Architect, you will establish our modern analytical lakehouse architecture and enforce institutional data governance policies.',
    responsibilities: [
      'Design and execute the migration from legacy data warehouses to our unified ClickHouse and Snowflake lakehouse.',
      'Define data retention, partitioning strategies, and real-time CDC pipelines with Kafka and Debezium.',
      'Establish enterprise metadata catalogs, lineage tracking, and compliance controls (SOC2, GDPR).',
      'Advise quantitative research teams on performant query patterns and schema optimization.'
    ],
    qualifications: [
      '10+ years architecting enterprise-scale data platforms in financial services or high-volume industries.',
      'Mastery of relational, columnar, and document database engines and SQL query planners.',
      'Deep experience with dbt, Apache Iceberg, and distributed query engines.',
      'Strong leadership presence with experience presenting architectural roadmaps to executive leadership.'
    ],
    benefits: [
      'Annual performance bonus (target 25-35% of base salary)',
      'Subsidized downtown Chicago parking or transit pass',
      'Comprehensive family medical coverage with zero deductible',
      'Executive financial planning and tax advisory sessions'
    ]
  },
  {
    id: 'job-6',
    title: 'Group Product Manager - Developer Platform',
    company: 'DevFlow Network',
    location: 'San Francisco, CA',
    workplaceType: 'Remote',
    type: 'Full-time',
    category: 'Product & Design',
    experienceLevel: 'Lead',
    salaryMin: 185000,
    salaryMax: 225000,
    currency: 'USD',
    postedDaysAgo: 5,
    featured: false,
    applicantCount: 31,
    tags: ['APIs', 'Developer Experience', 'Product Strategy', 'SaaS'],
    companyDescription: 'DevFlow Network provides continuous delivery orchestration and environment provisioning for 15,000+ engineering organizations.',
    description: 'Lead a team of 4 product managers building our public API, CLI tooling, webhook infrastructure, and third-party developer ecosystem.',
    responsibilities: [
      'Define and execute the multi-year developer experience strategy across SDKs, CLI, and REST/GraphQL APIs.',
      'Partner with engineering leads to prioritize infrastructure reliability and performance SLAs.',
      'Conduct developer interviews and monitor API adoption metrics to identify developer friction points.',
      'Mentor and grow a high-performing group of product managers and product analysts.'
    ],
    qualifications: [
      '6+ years of technical product management experience focusing on developer tools or cloud APIs.',
      'Technical background (degree in Computer Science or past software engineering experience).',
      'Demonstrated success managing and scaling developer ecosystems and API documentation.',
      'Exceptional written prose and ability to communicate complex architectural trade-offs.'
    ],
    benefits: [
      'Remote-first culture with team offsites in Portugal, Japan, and Canada',
      '$3,000 annual equipment renewal budget',
      'Generous equity with 10-year exercise window',
      'Comprehensive health and life insurance plans'
    ]
  },
  {
    id: 'job-7',
    title: 'Site Reliability & Security Operations Engineer',
    company: 'Aegis Security',
    location: 'Boston, MA',
    workplaceType: 'Remote',
    type: 'Full-time',
    category: 'Operations',
    experienceLevel: 'Senior',
    salaryMin: 160000,
    salaryMax: 195000,
    currency: 'USD',
    postedDaysAgo: 1,
    featured: true,
    applicantCount: 22,
    tags: ['Terraform', 'AWS', 'Kubernetes', 'SOC2', 'Incident Management'],
    companyDescription: 'Aegis Security builds autonomous threat detection and vulnerability remediation platforms for healthcare providers.',
    description: 'We are seeking an SRE & Security Operations Engineer to ensure 99.99% uptime, harden infrastructure posture, and automate multi-cloud deployments.',
    responsibilities: [
      'Manage multi-region AWS and GCP Kubernetes clusters using GitOps (ArgoCD) and Terraform.',
      'Conduct security audits, penetration testing remediation, and vulnerability scans across cloud assets.',
      'Build automated incident response runbooks and participate in a healthy, blameless on-call rotation.',
      'Implement Prometheus, OpenTelemetry, and Grafana dashboards for proactive capacity alerting.'
    ],
    qualifications: [
      '5+ years in SRE, DevOps, or Cloud Infrastructure roles in SOC2/HIPAA regulated environments.',
      'Deep hands-on experience with Terraform, Kubernetes, and cloud IAM security configurations.',
      'Strong scripting skills in Python, Bash, or Go for automated provisioning and self-healing systems.',
      'Pragmatic approach to risk management and infrastructure reliability.'
    ],
    benefits: [
      'Competitive salary + on-call stipend compensation',
      '100% employer-covered health and dental insurance',
      'Generous 401(k) retirement plan with 6% dollar-for-dollar match',
      'Dedicated mental health counseling and wellness reimbursement'
    ]
  },
  {
    id: 'job-8',
    title: 'Full-Stack Software Engineer (TypeScript & Next.js)',
    company: 'Kinetic Commerce',
    location: 'Toronto, ON',
    workplaceType: 'Hybrid',
    type: 'Full-time',
    category: 'Engineering',
    experienceLevel: 'Mid',
    salaryMin: 130000,
    salaryMax: 155000,
    currency: 'USD',
    postedDaysAgo: 3,
    featured: false,
    applicantCount: 65,
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    companyDescription: 'Kinetic Commerce enables omnichannel inventory coordination and instantaneous checkout for specialty retailers.',
    description: 'Build responsive merchant management portals, customer checkout flows, and backend order processing services with modern TypeScript tooling.',
    responsibilities: [
      'Ship clean, maintainable TypeScript code across our Next.js customer application and Node.js APIs.',
      'Design relational database schemas in PostgreSQL with Prisma and performant migrations.',
      'Collaborate with UX designers to implement polished interactive checkout components.',
      'Write comprehensive unit, integration, and Playwright end-to-end tests for critical payment paths.'
    ],
    qualifications: [
      '3+ years of professional full-stack web development experience with TypeScript and React.',
      'Strong relational database foundations and understanding of ACID transactions.',
      'Experience integrating third-party payment gateways (Stripe, Adyen) is a plus.',
      'Passion for craftsmanship, clean component architectures, and responsive web standards.'
    ],
    benefits: [
      'Hybrid working schedule (2 days in downtown Toronto office, 3 days remote)',
      'Comprehensive dental, prescription drug, and optical coverage',
      'Annual learning allowance for books, courses, and certifications',
      'Stock option plan with high upside potential'
    ]
  }
];

export const COMPANY_SPOTLIGHTS = [
  {
    id: 'comp-1',
    name: 'CloudMatrix',
    industry: 'Cloud Infrastructure & Telemetry',
    headcount: '240-500 employees',
    location: 'San Francisco, CA · Remote First',
    openRolesCount: 8,
    rating: '4.9/5',
    verified: true,
    highlight: 'Pioneering distributed consensus protocols for the next decade of cloud computing.',
    techStack: ['Go', 'Kubernetes', 'Kafka', 'Rust', 'Linux Kernel']
  },
  {
    id: 'comp-2',
    name: 'Veloce AI',
    industry: 'Generative Creative Tools',
    headcount: '80-150 employees',
    location: 'New York, NY · Hybrid',
    openRolesCount: 5,
    rating: '4.8/5',
    verified: true,
    highlight: 'Building infinite workspace canvas technology with sub-millisecond tactile responsiveness.',
    techStack: ['React 19', 'TypeScript', 'WebGL', 'WebSockets', 'Python']
  },
  {
    id: 'comp-3',
    name: 'Kestrel Labs',
    industry: 'High-Performance AI Infrastructure',
    headcount: '50-100 employees',
    location: 'Seattle, WA · Hybrid',
    openRolesCount: 6,
    rating: '4.9/5',
    verified: true,
    highlight: 'High-density GPU clusters optimized for open-weight model deployment and low-latency inference.',
    techStack: ['PyTorch', 'CUDA', 'Ray', 'Triton', 'vLLM']
  }
];

export const SALARY_BENCHMARKS = [
  {
    role: 'Staff Distributed Systems Engineer',
    department: 'Engineering',
    level: 'Staff',
    p25: 195000,
    median: 240000,
    p75: 275000,
    p90: 310000,
    growthRate: '+14% YoY',
    demandScore: 'Extremely High'
  },
  {
    role: 'Senior Frontend Architect',
    department: 'Engineering',
    level: 'Senior',
    p25: 160000,
    median: 190000,
    p75: 220000,
    p90: 245000,
    growthRate: '+9% YoY',
    demandScore: 'High'
  },
  {
    role: 'Lead Product Designer',
    department: 'Product & Design',
    level: 'Lead',
    p25: 150000,
    median: 180000,
    p75: 205000,
    p90: 230000,
    growthRate: '+8% YoY',
    demandScore: 'Moderate'
  },
  {
    role: 'Machine Learning Infrastructure Engineer',
    department: 'Data & AI',
    level: 'Senior',
    p25: 175000,
    median: 215000,
    p75: 250000,
    p90: 290000,
    growthRate: '+22% YoY',
    demandScore: 'Extremely High'
  },
  {
    role: 'Site Reliability & Security Engineer',
    department: 'Operations',
    level: 'Senior',
    p25: 145000,
    median: 175000,
    p75: 205000,
    p90: 235000,
    growthRate: '+11% YoY',
    demandScore: 'High'
  }
];
