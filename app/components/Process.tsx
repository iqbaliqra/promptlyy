const steps = [
  { number: "01", title: "Discovery", description: "Defining goals and technical requirements.", color: "primary" },
  { number: "02", title: "Architecture", description: "Designing robust and scalable systems.", color: "secondary" },
  { number: "03", title: "Development", description: "Agile sprints and continuous integration.", color: "tertiary" },
  { number: "04", title: "Refinement", description: "Testing, optimization, and AI tuning.", color: "primary" },
  { number: "05", title: "Scale", description: "Deployment and ongoing optimization.", color: "secondary" },
];

const Process = () => {
  return (
    <section className="py-xxl px-gutter max-w-7xl mx-auto" id="process">
      <h2 className="font-display-lg text-headline-lg mb-xxl text-center">
        Our 5-Step Process
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-start gap-lg relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex-1 flex flex-col items-center text-center relative z-10 group"
          >
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-primary mb-md group-hover:scale-110 transition-transform">
              <span className={`text-${step.color} font-bold text-headline-md`}>
                {step.number}
              </span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-xs">
              {step.title}
            </h4>
            <p className="text-on-surface-variant text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
