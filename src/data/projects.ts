import TFAgentSearch from '../assets/images/tf-agent-search.png'
import BDLogin from '../assets/images/bd-login.png'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "illūm - Tom Ferry Internationals",
    description: "#1 real estate applications",
    image: TFAgentSearch,
    link: "https://auth.tomferry.com/login"
  },
  {
    id: 2,
    title: "Bridge Diagnostics",
    description: "National healthcare services applications",
    image: BDLogin,
    link: "https://bridgediagnostics.com/"
  },
]