export interface WorkItem {
  id: string;
  title: string;
  category: "3D Architecture" | "3D Interior" | "3D Character";
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  /** Optional clay render / wireframe for the lightbox comparison. */
  clayImage?: string;
  /** Build stages shown in the lightbox as proof of a from-scratch workflow. */
  stages?: string[];
  tools: string[];
  year: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  tags: string[];
  current?: boolean;
}

export interface CaseStudyScreen {
  src: string;
  alt: string;
  caption: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  tagline: string;
  role: string;
  period: string;
  status: string;
  summary: string;
  contributions: { label: string; text: string }[];
  tools: string[];
  diagram: "web" | "game";
  /** Hero screenshot of the finished interface. */
  image?: string;
  imageAlt?: string;
  /** Native aspect ratio of the hero screenshot, e.g. "1691 / 881". */
  imageRatio?: string;
  imageNote?: string;
  /** Extra screens shown as a contact sheet under the hero. */
  screens?: CaseStudyScreen[];
  /** Aspect ratio shared by every screen in `screens`. */
  screensAspect?: string;
  link?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: "Data Science & AI" | "Academic & Language" | "Achievement & Community";
  issueDate: string;
  fileUrl: string;
  description: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  subRole: string;
  degree: string;
  bio: string;
  detailedBio: string[];
  location: string;
  institution: string;
  email: string;
  githubUrl: string;
  githubUsername: string;
  linkedinUrl: string;
  whatsappUrl: string;
  whatsappDisplay: string;
  cvUrl: string;
  availability: string;
  profileImage: string;
}
