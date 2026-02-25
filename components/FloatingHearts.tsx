export default function FloatingHearts() {
  return (
    <div className="hearts-layer" aria-hidden>
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="heart-float"
          style={{
            left: `${(i * 7 + 5) % 100}%`,
            animationDelay: `${i * 0.5}s`,
            fontSize: `${14 + (i % 4) * 4}px`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}