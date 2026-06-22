const CTA = () => {
  return (
    <section className="py-xxl px-gutter text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10"></div>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display-xl text-display-xl mb-md">
          Ready to Build Something Exceptional?
        </h2>
        <p className="text-on-surface-variant text-body-lg mb-xl">
          Let&apos;s discuss how we can accelerate your technical roadmap.
        </p>
        <button className="bg-primary text-on-primary px-xl py-6 rounded-2xl font-label-md text-label-md hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(195,192,255,0.4)]">
          Book a Free Consultation
        </button>
      </div>
    </section>
  );
};

export default CTA;
