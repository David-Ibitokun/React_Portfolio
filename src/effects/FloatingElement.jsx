export default function FloatingElement({ children, className = '', duration = 4 }) {
  return (
    <div
      className={`animate-float will-change-transform ${className}`}
      style={{ animationDuration: `${duration}s` }}
    >
      {children}
    </div>
  );
}
