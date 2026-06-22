const Hero = () => {
  return (
    <section className="pt-xxl pb-xl px-gutter max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-xl items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-label-sm text-label-sm mb-6">
            NEXT-GEN AI AUTOMATION
          </span>
          <h1 className="font-display-xl text-display-xl leading-tight mb-6">
            Building <span className="text-gradient">AI &amp; Software Solutions</span>{" "}
            That Scale
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-lg">
            We help startups and businesses transform ideas into
            production-ready AI systems, SaaS platforms, and workflow
            automations.
          </p>
          <div className="flex flex-wrap gap-md">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(195,192,255,0.3)]">
              Book a Free Consultation
            </button>
            <button className="border border-white/10 hover:bg-white/5 px-8 py-4 rounded-xl font-label-md text-label-md transition-all">
              View Our Work
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl group-hover:opacity-100 opacity-50 transition-opacity"></div>
          <div className="glass-card rounded-3xl p-4 overflow-hidden border border-white/10 shadow-2xl">
            <div
              className="bg-cover bg-center aspect-video w-full rounded-2xl"
              data-alt="A sleek and hyper-modern AI dashboard UI interface with dark mode theme. The visualization shows floating data nodes, shimmering neural network connections in neon indigo and cyan, and clean minimalist analytics charts. High-tech corporate aesthetic for a professional software agency, focused on precision and clarity."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQVHPcskY7VJJRfHZ7bku6f-NMdBh9CYq36xnchHk7TdSfHsMz2iV5TNgcKzfGLYIB3ag6hmlNAC_D4sNNbIuKwFwzVuvSmvoYYofhpU6h2NnrzIUNm2l7Ax3eY1HJfwKqFH_YyvWWeSTi9DiThfkUY1N4IMk1Nok5oFhpyGJQDjGEk9I_M2zQ2IO7LIahOGDvoVlFB2FwovU9RzV14z0Z7WUCVSJBTuxakU67-PtVlD7Ratw44qbeCJMqilxLWf5kWBY_cutncaE')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
