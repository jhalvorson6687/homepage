import "./StackPill.css";
import type { ReactNode } from "react";

interface StackPillProps {
  name: string;
  icon?: ReactNode;
}

function StackPill({ name, icon }: StackPillProps) {
  return (
    <span className="stack-pill">
      {icon && <span className="pill-icon">{icon}</span>}
      {name}
    </span>
  );
}

export default StackPill;
