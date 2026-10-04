export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  number: string;
  name: string;
  role: string;
  context?: string;
  problemStatement?: string;
  description: string;
  liveUrl: string;
  tags: string[];
  image: string;
  overview?: string;
  keyContributions?: string[];
  techStackHighlights?: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  context?: string;
  purposeOrResponsibilities: string[];
  type: 'Leadership' | 'Department' | 'Hackathon';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  skillsCovered?: string[];
  pdfUrl?: string;
  previewImg?: string;
  issuedDate?: string;
  credentialCode?: string;
  recipientName?: string;
}

