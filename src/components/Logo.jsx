export default function Logo({ className = "" }) {
  return (
    <span className={`logo-mark ${className}`} aria-label="CoreWave logo">
      <span className="logo-core">Core</span>
      <span className="logo-wave">Wave</span>
    </span>
  );
}
