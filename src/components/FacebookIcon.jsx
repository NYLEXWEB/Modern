export default function FacebookIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M16.67 12.01h-2.92v8.94h-3.7V12.01H8.38V8.92h1.67V6.89c0-1.65.79-4.22 4.22-4.22l3.1.01v3.38h-2.25c-.37 0-.89.18-.89.97v1.89h3.19l-.75 3.09z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
