import { Link } from "react-router";
import "./animatedbutton.css";

interface AnimatedButtonProps {
  to: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function AnimatedButton({ to, children, style }: AnimatedButtonProps) {
  return (
    <Link to={to} className="animated-button" style={style}>
      <span>{children}</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </Link>
  );
}

export default AnimatedButton;
