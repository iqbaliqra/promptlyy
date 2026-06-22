const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99%", label: "Client Retention" },
  { value: "$10M+", label: "Value Generated" },
  { value: "15ms", label: "Average Latency" },
];

const TrustedBy = () => {
  return (
    <section className="py-xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-gutter text-center">
        <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-lg">
          Trusted by high-growth companies
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-xl opacity-60">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="font-display-lg text-headline-lg mb-2">
                {stat.value}
              </div>
              <div className="text-on-surface-variant">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
