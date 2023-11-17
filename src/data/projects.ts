import TFAgentSearch from '../assets/images/tf-agent-search.png'
import BDLogin from '../assets/images/bd-login.png'

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "illūm by Tom Ferry",
    description: "A real estate coaching application by Tom Ferry. With decades of experience helping realtors grow their businesses with the knowledge, skills, and real estate marketing tools they can implement into their practice.",
    image: TFAgentSearch,
    // link: "https://auth.tomferry.com/login",
    link: "https://www.tomferry.com/",
    skills: ['React', 'Laravel', 'JavaScript', 'PHP', 'PostgreSQL', 'Docker'],
  },
  {
    id: 2,
    title: "Bridge Diagnostics",
    description: "A national healthcare services company providing clinical diagnostic information, clinic workflow solutions, population health management tools, and precision medicine data as part of a holistic value-based care delivery model",
    image: BDLogin,
    link: "https://bridgediagnostics.com/",
    skills: ['React', 'TypeScript', 'Redux', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
]