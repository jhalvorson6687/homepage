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
}

const technologies: Technology[] = [
  { name: "Angular", category: "Frontend", icon: <SiAngular /> },
  { name: "React", category: "Frontend", icon: <SiReact /> },
  { name: "Next.js", category: "Frontend", icon: <RiNextjsFill /> },
  { name: "TypeScript", category: "Frontend", icon: <SiTypescript /> },
  { name: "JavaScript", category: "Frontend", icon: <SiJavascript /> },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss /> },
  { name: "HTML", category: "Frontend", icon: <SiHtml5 /> },
  { name: "CSS", category: "Frontend", icon: <SiCss3 /> },
  { name: "C#", category: "Backend", icon: <CSharpIcon /> },
  { name: ".NET", category: "Backend", icon: <DotNetIcon /> },
  { name: "Python", category: "Backend", icon: <SiPython /> },
  { name: "Django", category: "Backend", icon: <SiDjango /> },
  { name: "Flask", category: "Backend", icon: <SiFlask /> },
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql /> },
  { name: "Oracle", category: "Database", icon: <SiOracle /> },
  { name: "SQL Server", category: "Database", icon: <DiMsqlServer /> },
  { name: "SQLite", category: "Database", icon: <SiSqlite /> },
  { name: "Git", category: "DevOps & Tools", icon: <SiGit /> },
  { name: "Docker", category: "DevOps & Tools", icon: <SiDocker /> },
  { name: "Vite", category: "DevOps & Tools", icon: <SiVite /> },
  { name: "AWS", category: "DevOps & Tools", icon: <SiAmazon /> },
  { name: "Azure", category: "DevOps & Tools", icon: <VscAzureDevops /> },
  { name: "Postman", category: "DevOps & Tools", icon: <SiPostman /> },
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
