import { useEffect, useRef, useState } from "react";

const SpeakersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [dotScale, setDotScale] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the white dot expanding
            const ratio = entry.intersectionRatio;
            setDotScale(ratio);
          } else {
            setDotScale(0);
          }
        });
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-surface-dark bg-noise py-24 px-6 md:px-20 overflow-hidden min-h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-primary text-5xl md:text-7xl mb-6">
          SPEAKERS
        </h2>
        <p className="font-display text-primary text-4xl md:text-6xl mb-12">
          Revealing Soon.
        </p>

        {/* White dot that expands */}
        <div
          className="mx-auto rounded-full bg-muted-foreground/80 transition-all duration-700 ease-out"
          style={{
            width: `${Math.max(40, dotScale * 300)}px`,
            height: `${Math.max(40, dotScale * 300)}px`,
            opacity: dotScale > 0.1 ? 1 : 0,
          }}
        />
      </div>
    </section>
  );
};

export default SpeakersSection;
