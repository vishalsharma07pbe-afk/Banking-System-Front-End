function BrandMark({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="nexora-gradient" x1="8" y1="10" x2="56" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#dbeafe" />
          <stop offset="0.45" stopColor="#a5b4fc" />
          <stop offset="1" stopColor="#f5d0fe" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="18" fill="url(#nexora-gradient)" />
      <path
        d="M20 42V22h5.6l12.8 15.8V22H44v20h-5.2L25.6 25.7V42H20Z"
        fill="#07111f"
      />
      <path
        d="M46 18.5c0 2.5-2 4.5-4.5 4.5S37 21 37 18.5 39 14 41.5 14 46 16 46 18.5Z"
        fill="#07111f"
        opacity="0.88"
      />
    </svg>
  );
}

export default BrandMark;
