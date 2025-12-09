import "./StackPill.css";
import type { ReactNode } from "react";

interface StackPillProps {
  name: string;
  icon?: ReactNode;
}

function StackPill({ name, icon }: StackPillProps) {
  const techSlug = name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
  return (
    <span className="stack-pill" data-tech={techSlug}>
      {icon && <span className="pill-icon">{icon}</span>}
      {name}
    </span>
  );
}

export default StackPill;
