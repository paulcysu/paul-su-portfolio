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
    description: 'Developed health care administration software for laboratory process, medical billing, and claims management. Bullt application using React, TypeScript, and Python.',
    logo: 'https://bridgediagnostics.com/wp-content/uploads/2020/08/bridge-logo-1.png',
    skills: ['React', 'TypeScript', 'Redux', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    start: "2021",
    end: "2023"
  },
  {
    id: "e2",
    title: "Newport Applications",
    location: 'Seattle, WA',
    website: null,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vitae magna.',
    logo: 'https://www.np.com/wp-content/uploads/2019/12/TFI-Logo-Color-1.png',
    skills: ['React', 'Python', 'Django'],
    start: "2021",
    end: "2021"
  },
  {
    id: "e3",
    title: "Tom Ferry International",
    location: 'New York, NY',
    website: 'https://www.tomferry.com/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vitae magna.',
    logo: 'https://www.tomferry.com/wp-content/uploads/2019/12/TFI-Logo-Color-1.png',
    skills: ['React', 'Laravel', 'JavaScript', 'PHP', 'PostgreSQL', 'Docker'],
    start: "2019",
    end: "2021"
  },
];