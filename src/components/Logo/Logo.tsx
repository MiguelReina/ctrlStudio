type LogoProps = {
  className?: string;
  variant?: "header" | "about";
};

export default function Logo({ className, variant = "header" }: LogoProps) {
  if (variant === "about") {
    return (
      <svg
        className={className}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          width="200"
          height="200"
          rx="40"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="rgba(0, 212, 255, 0.3)"
          strokeWidth="2"
        />
        <g transform="translate(25, 25)">
          <path
            d="M 0 15 L 15 0 L 30 15"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        <text
          x="100"
          y="110"
          fontFamily="Arial, sans-serif"
          fontSize="70"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
        >
          CTRL
        </text>
        <text
          x="100"
          y="155"
          fontFamily="Arial, sans-serif"
          fontSize="18"
          fill="rgba(255, 255, 255, 0.9)"
          textAnchor="middle"
          letterSpacing="3"
        >
          STUDIO
        </text>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="200" height="200" rx="40" fill="#000000" />
      <g transform="translate(25, 25)">
        <path
          d="M 0 15 L 15 0 L 30 15"
          stroke="#00d4ff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      <text
        x="100"
        y="110"
        fontFamily="Arial, sans-serif"
        fontSize="70"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        CTRL
      </text>
      <text
        x="100"
        y="155"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fill="white"
        textAnchor="middle"
        letterSpacing="3"
      >
        STUDIO
      </text>
    </svg>
  );
}
