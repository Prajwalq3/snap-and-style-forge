import contactSilhouette from "@/assets/contact-silhouette.png";

const ContactSection = () => {
  return (
    <section className="relative bg-surface-gray py-24 px-6 md:px-20 overflow-hidden">
      {/* Silhouette */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 md:w-96 opacity-80">
        <img src={contactSilhouette} alt="" className="w-full" />
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
