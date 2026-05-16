export default function AssetIcon({ src, className = "" }) {
  const mask = `url("${src}") center / contain no-repeat`;

  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMask: mask,
        mask,
      }}
    />
  );
}
