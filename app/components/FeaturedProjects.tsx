const FeaturedProjects = () => {
  return (
    <section className="py-xxl px-gutter bg-surface" id="work">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display-lg text-headline-lg mb-xxl text-center">
          Featured Projects
        </h2>
        <div className="space-y-xl">
          {/* Case Study 1 */}
          <div className="glass-card rounded-3xl overflow-hidden grid lg:grid-cols-2">
            <div
              className="bg-cover bg-center h-96 lg:h-full"
              data-alt="Close-up of a high-end financial application interface with complex real-time charts and AI-driven market predictions. The UI features dark glassmorphism effects, vibrant glowing indigo data lines, and clean sans-serif typography. This represents an enterprise-grade fintech project by Promptly."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6Vv7EtG6FQvOhBajQJZkPhQDyDe-zZzWCK6AWpK6sYNnqmZdhx7d3j66514zBuQyppk9HkdXlciLlM5BHKuKaO6V1lHsH2yZHN11o1u4aBOehJxmzmIKhvqIPM28QEUN8LWhlWMkYcQRQIRiP1QY2P6YL_U-ZQ-iw0X0UZoESlaAu3uTusDXl9_stpH2flMozhJATh2gdsy3C98TvSa7CNPq-Ov21YFIvtCW8ohaiCL6WyrwxTxNS9xpTKLxCl03f_4JReFn9iKo')",
              }}
            ></div>
            <div className="p-xl flex flex-col justify-center">
              <span className="text-primary font-label-md mb-2 uppercase tracking-wide">
                FinTech Automation
              </span>
              <h3 className="font-display-lg text-headline-lg mb-md">
                Quantra AI Market Engine
              </h3>
              <div className="space-y-md mb-xl">
                <div>
                  <strong className="text-on-surface block text-sm mb-1 uppercase tracking-widest text-xs opacity-60">
                    Problem
                  </strong>
                  <p className="text-on-surface-variant">
                    Manual data processing taking 14+ hours daily with
                    frequent errors.
                  </p>
                </div>
                <div>
                  <strong className="text-on-surface block text-sm mb-1 uppercase tracking-widest text-xs opacity-60">
                    Solution
                  </strong>
                  <p className="text-on-surface-variant">
                    Custom LLM agent pipeline for automated sentiment
                    analysis and report generation.
                  </p>
                </div>
                <div className="flex flex-wrap gap-xs">
                  <span className="bg-white/5 px-3 py-1 rounded-full text-xs border border-white/10">
                    Next.js
                  </span>
                  <span className="bg-white/5 px-3 py-1 rounded-full text-xs border border-white/10">
                    LangChain
                  </span>
                  <span className="bg-white/5 px-3 py-1 rounded-full text-xs border border-white/10">
                    PostgreSQL
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-md p-md bg-white/5 rounded-2xl">
                <div>
                  <div className="text-secondary font-bold text-headline-md">
                    94%
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    Automation Rate
                  </div>
                </div>
                <div>
                  <div className="text-secondary font-bold text-headline-md">
                    2.5s
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    Processing Speed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
