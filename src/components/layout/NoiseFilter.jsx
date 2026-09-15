export default function NoiseFilter() {
  return (
    <svg aria-hidden="true" className="hidden">
      <filter
        id="bcc-noise"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.75"
          numOctaves="3"
          result="noise"
        />

        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 0.045 0"
        />

        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </svg>
  );
}