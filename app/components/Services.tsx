const services = [
  {
    icon: "smart_toy",
    title: "AI Automation",
    description: "Streamline operations with LLM-powered agents and custom automation workflows.",
    color: "primary",
  },
  {
    icon: "cloud",
    title: "SaaS Development",
    description: "Building scalable, multi-tenant cloud platforms from the ground up.",
    color: "secondary",
  },
  {
    icon: "hub",
    title: "API Ecosystems",
    description: "Seamless integrations and robust backend architectures for complex systems.",
    color: "tertiary",
  },
  {
    icon: "query_stats",
    title: "Data Engineering",
    description: "Architecting data pipelines that fuel intelligent decision making.",
    color: "primary",
  },
  {
    icon: "terminal",
    title: "Custom LLMs",
    description: "Fine-tuning models on your proprietary data for niche domain excellence.",
    color: "secondary",
  },
  {
    icon: "shield",
    title: "DevOps & Security",
    description: "Fortifying your infrastructure with enterprise-grade security protocols.",
    color: "tertiary",
  },
  {
    icon: "phone_iphone",
    title: "Mobile AI",
    description: "Crafting responsive mobile experiences with edge-AI capabilities.",
    color: "primary",
  },
  {
    icon: "auto_awesome_motion",
    title: "RAG Systems",
    description: "Implementing Retrieval Augmented Generation for accurate AI responses.",
    color: "secondary",
  },
];

const ServiceCard = ({
  icon,
  title,
  description,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
}) => (
  <div className="glass-card p-xl rounded-2xl hover:border-primary/50 transition-all group">
    <div
      className={`w-12 h-12 bg-${color}/10 rounded-xl flex items-center justify-center mb-md group-hover:scale-110 transition-transform`}
    >
      <span
        className={`material-symbols-outlined text-${color}`}
        data-icon={icon}
      >
        {icon}
      </span>
    </div>
    <h3 className="font-headline-md text-headline-md mb-sm">{title}</h3>
    <p className="text-on-surface-variant text-body-md">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section className="py-xxl px-gutter max-w-7xl mx-auto" id="services">
      <div className="text-center mb-xxl">
        <h2 className="font-display-lg text-headline-lg mb-4">
          Our Expertise
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Comprehensive software engineering services tailored for the
          AI-first era.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-md">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
