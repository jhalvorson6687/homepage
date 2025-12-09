import "./MyStack.css";
import StackRow from "./StackRow";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiAngular,
  SiVite,
  SiDjango,
  SiFlask,
  SiOracle,
  SiPostman,
  SiSqlite,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiMsqlServer } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";
import { CSharpIcon, DotNetIcon } from "../CustomIcons/CustomIcons";

import type { ReactNode } from "react";

export interface Technology {
  name: string;
  category: string;
  icon?: ReactNode;
  url?: string;
}

const technologies: Technology[] = [
  {
    name: "Angular",
    category: "Frontend",
    icon: <SiAngular />,
    url: "https://angular.dev/",
  },
  {
    name: "React",
    category: "Frontend",
    icon: <SiReact />,
    url: "https://reactjs.dev/",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: <RiNextjsFill />,
    url: "https://nextjs.org/",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: <SiTypescript />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <SiJavascript />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "HTML",
    category: "Frontend",
    icon: <SiHtml5 />,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: <SiCss3 />,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "C#",
    category: "Backend",
    icon: <CSharpIcon />,
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: ".NET",
    category: "Backend",
    icon: <DotNetIcon />,
    url: "https://dotnet.microsoft.com/",
  },
  {
    name: "Python",
    category: "Backend",
    icon: <SiPython />,
    url: "https://www.python.org/",
  },
  {
    name: "Django",
    category: "Backend",
    icon: <SiDjango />,
    url: "https://www.djangoproject.com/",
  },
  {
    name: "Flask",
    category: "Backend",
    icon: <SiFlask />,
    url: "https://flask.palletsprojects.com/",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: <SiPostgresql />,
    url: "https://www.postgresql.org/",
  },
  {
    name: "Oracle",
    category: "Database",
    icon: <SiOracle />,
    url: "https://www.oracle.com/database/",
  },
  {
    name: "SQL Server",
    category: "Database",
    icon: <DiMsqlServer />,
    url: "https://www.microsoft.com/en-us/sql-server",
  },
  {
    name: "SQLite",
    category: "Database",
    icon: <SiSqlite />,
    url: "https://www.sqlite.org/",
  },
  {
    name: "Git",
    category: "DevOps & Tools",
    icon: <SiGit />,
    url: "https://git-scm.com/",
  },
  {
    name: "Docker",
    category: "DevOps & Tools",
    icon: <SiDocker />,
    url: "https://www.docker.com/",
  },
  {
    name: "Vite",
    category: "DevOps & Tools",
    icon: <SiVite />,
    url: "https://vite.dev/",
  },
  {
    name: "AWS",
    category: "DevOps & Tools",
    icon: <SiAmazon />,
    url: "https://aws.amazon.com/",
  },
  {
    name: "Azure",
    category: "DevOps & Tools",
    icon: <VscAzureDevops />,
    url: "https://azure.microsoft.com/",
  },
  {
    name: "Postman",
    category: "DevOps & Tools",
    icon: <SiPostman />,
    url: "https://www.postman.com/",
  },
  {
    name: "C++",
    category: "Backend",
    icon: <SiCplusplus />,
    url: "https://isocpp.org/",
  },
];

function MyStack() {
  // Group technologies by category
  const categories = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);

  return (
    <section className="my-stack">
      {Object.entries(categories).map(([category, techs]) => (
        <StackRow key={category} category={category} technologies={techs} />
      ))}
    </section>
  );
}

export default MyStack;
