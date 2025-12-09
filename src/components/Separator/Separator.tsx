import "./Separator.css";

interface SeparatorProps {
  label?: string;
}

function Separator({ label }: SeparatorProps) {
  return (
    <div className="separator">
      <div className="separator-line"></div>
      {label && <span className="separator-label">{label}</span>}
      <div className="separator-line"></div>
    </div>
  );
}

export default Separator;
