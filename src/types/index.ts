export interface WorkItem {
  id: string;
  title: string;
  category: "3D Architecture" | "3D Interior" | "3D Character";
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  tools: string[];
  year: string;
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
  bio: string;
  detailedBio: string[];
  location: string;
  institution: string;
  email: string;
  githubUrl: string;
  githubUsername: string;
  linkedinUrl?: string;
  profileImage: string;
}
