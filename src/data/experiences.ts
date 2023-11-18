import IllumLogo from "../assets/images/illum_logo.webp";
import BridgeDiagnosticLogo from "../assets/images/bridge-diagnostics.webp";
import NALogo from "../assets/images/newport-applications-logo.webp";

export type ExperienceType = {
  id: string;
  title: string;
  location: string;
  website?: string | null;
  description: string;
  skills: string[];
  logo: string;
  start: string;
  end: string;
};

export const experiences: ExperienceType[] = [
  {
    id: "e1",
    title: "Bridge Diagnostic",
    location: 'Irvine, CA',
    website: 'https://bridgediagnostics.com/',
    description: 'Developed health care administration software for laboratory process, medical billing, and claims management. Bullt application using React, TypeScript, Python, and FastAPI.',
    logo: BridgeDiagnosticLogo,
    skills: ['React', 'TypeScript', 'Redux', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    start: "2021",
    end: "2023"
  },
  {
    id: "e2",
    title: "Newport Applications",
    location: 'Newport Beach, CA',
    website: null,
    description: 'Built dashboard, datagrid, and assignments for teachers and caretakes of children with disability. Used React, Python, and Django.',
    logo: NALogo,
    skills: ['React', 'Python', 'Django'],
    start: "2021",
    end: "2021"
  },
  {
    id: "e3",
    title: "Tom Ferry International",
    location: 'Orange County, CA',
    website: 'https://www.tomferry.com/',
    description: 'Developed a real estate CRM and marketing platform. Built application using React, Laravel, and PostgreSQL.',
    logo: IllumLogo,
    skills: ['React', 'Laravel', 'JavaScript', 'PHP', 'PostgreSQL', 'Docker'],
    start: "2019",
    end: "2021"
  },
];