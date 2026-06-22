const technologies = [
  "React",
  "Next.js",
  "LangChain",
  "OpenAI",
  "Python",
  "AWS",
  "Supabase",
  "Tailwind",
];

const TechStack = () => {
  return (
    <section className="py-xl border-y border-white/5 overflow-hidden">
      <div className="flex animate-scroll gap-xxl items-center whitespace-nowrap">
        {/* Duplicate set for seamless infinite scroll */}
        {[...technologies, ...technologies].map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="text-on-surface-variant font-bold text-headline-md px-12"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
