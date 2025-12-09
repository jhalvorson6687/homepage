import "./StackRow.css";
import StackPill from "./StackPill";
import type { Technology } from "./MyStack";

interface StackRowProps {
  category: string;
  technologies: Technology[];
}

function StackRow({ category, technologies }: StackRowProps) {
  return (
    <div className="stack-row">
      <h3 className="stack-category">{category}</h3>
      <div className="stack-pills">
        {technologies.map((tech) => (
          <StackPill key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </div>
  );
}

export default StackRow;
