import "./StackPill.css";
import type { ReactNode } from "react";

interface StackPillProps {
  name: string;
  icon?: ReactNode;
  url?: string;
}

function StackPill({ name, icon, url }: StackPillProps) {
  const techSlug = name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
      <span className="stack-pill" data-tech={techSlug}>
        {icon && <span className="pill-icon">{icon}</span>}
        {name}
      </span>
    </a>
  );
}

export default StackPill;
