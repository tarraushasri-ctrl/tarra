export type WorkplaceType = 'Remote' | 'Hybrid' | 'On-site';
export type JobCategory = 'Engineering' | 'Product & Design' | 'Data & AI' | 'Operations';
export type ExperienceLevel = 'Junior' | 'Mid' | 'Senior' | 'Lead' | 'Staff' | 'Principal';

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  workplaceType: WorkplaceType;
  type: 'Full-time' | 'Contract';
  category: JobCategory;
  experienceLevel: ExperienceLevel;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  postedDaysAgo: number;
  featured?: boolean;
  urgent?: boolean;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  tags: string[];
  companyDescription: string;
  applicantCount: number;
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  portfolioUrl?: string;
  expectedSalary: string;
  noticePeriod: string;
  coverNote: string;
  fileName?: string;
}

export interface NewJobFormData {
  title: string;
  company: string;
  category: JobCategory;
  workplaceType: WorkplaceType;
  type: 'Full-time' | 'Contract';
  experienceLevel: ExperienceLevel;
  location: string;
  salaryMin: number;
  salaryMax: number;
  tags: string;
  description: string;
  responsibilities: string;
  qualifications: string;
  benefits: string;
}
