export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  bullets: string[];
}

export const experience: Job[] = [
  {
    company: 'Acme AI',
    role: 'Software Engineer',
    period: '2023 – Present',
    description: 'Building LLM-powered features and internal tooling for a Series A AI startup.',
    stack: ['TypeScript', 'React', 'Node.js', 'Python', 'OpenAI API'],
    bullets: [
      'Led development of a RAG pipeline that reduced support ticket resolution time by 40%.',
      'Designed and shipped a prompt management dashboard used by the entire product team.',
      'Improved CI pipeline speed by 35% by parallelizing test suites.',
    ],
  },
  {
    company: 'Freelance / Consulting',
    role: 'Full-Stack Developer',
    period: '2021 – 2023',
    description: 'Delivered web applications and APIs for clients across fintech and e-commerce.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS'],
    bullets: [
      'Built an order management system handling 10k+ daily transactions.',
      'Integrated Stripe billing with subscription tiers and usage-based pricing.',
      'Authored technical specs and led client onboarding sessions.',
    ],
  },
];
