const reasons = [
  {
    icon: "bolt",
    title: "Fast Delivery",
    description:
      "We prioritize momentum. Launch MVPs in weeks, not months, without compromising on technical excellence.",
    color: "primary",
    span: "md:col-span-3",
    hasGlow: true,
  },
  {
    icon: "psychology",
    title: "AI-First Engineering",
    description:
      "AI isn&apos;t an afterthought; it&apos;s at the core of our development DNA, ensuring smarter and more efficient products.",
    color: "secondary",
    span: "md:col-span-3",
  },
  {
    icon: "all_inclusive",
    title: "Scalable Stack",
    description: "Systems designed to handle millions of requests from day one.",
    color: "tertiary",
    span: "md:col-span-2",
  },
  {
    icon: "handshake",
    title: "True Partnership",
    description:
      "We act as your technical co-founders, invested in your long-term success.",
    color: "primary",
    span: "md:col-span-2",
  },
  {
    icon: "verified",
    title: "Proven Results",
    description:
      "Our solutions have delivered significant ROI for global clients.",
    color: "secondary",
    span: "md:col-span-2",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="py-xxl bg-surface-container-low px-gutter overflow-hidden"
      id="why"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display-lg text-headline-lg mb-xl text-center">
          Why Partner With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-md">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className={`${reason.span} glass-card p-xl rounded-3xl relative overflow-hidden`}
            >
              <div className="relative z-10">
                <span
                  className={`material-symbols-outlined text-${reason.color} text-4xl mb-md`}
                  data-icon={reason.icon}
                >
                  {reason.icon}
                </span>
                <h3 className="font-headline-md text-headline-md mb-sm">
                  {reason.title}
                </h3>
                <p className="text-on-surface-variant">{reason.description}</p>
              </div>
              {reason.hasGlow && (
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
