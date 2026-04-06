const flakes = Array.from({ length: 96 }, (_, index) => ({
  id: index,
  left: `${(index * 53) % 100}%`,
  size: `${0.08 + (index % 4) * 0.035}rem`,
  duration: `${8 + (index % 10) * 0.9}s`,
  delay: `${(index % 12) * -0.85}s`,
  opacity: 0.18 + (index % 6) * 0.08,
}));

const Snowfall = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
    {flakes.map((flake) => (
      <span
        key={flake.id}
        className="snowflake"
        style={{
          left: flake.left,
          width: flake.size,
          height: flake.size,
          animationDuration: flake.duration,
          animationDelay: flake.delay,
          opacity: flake.opacity,
        }}
      />
    ))}
  </div>
);

export default Snowfall;
