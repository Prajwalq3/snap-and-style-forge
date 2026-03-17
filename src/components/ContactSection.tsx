import { useEffect, useRef, useState } from "react";
import contactSilhouette from "@/assets/contact-silhouette.png";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(0.6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio;
            setScale(0.6 + ratio * 0.6);
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
    <section ref={sectionRef} className="relative bg-surface-dark bg-noise py-24 px-6 md:px-20 overflow-hidden min-h-[70vh] flex items-center justify-center">
      {/* Expanding silhouette */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-80 transition-transform duration-300 origin-bottom"
        style={{ transform: `translateX(-50%) scale(${scale})` }}
      >
        <img src={contactSilhouette} alt="" className="w-64 md:w-96" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-primary text-6xl md:text-8xl mb-4">
          Any
        </h2>
        <h2 className="font-display text-primary text-6xl md:text-8xl">
          Queries?
        </h2>
      </div>
    </section>
  );
};

export default ContactSection;
