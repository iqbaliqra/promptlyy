const testimonials = [
  {
    quote:
      "&quot;Promptly didn&apos;t just build a product; they built a scalable future for our startup. Their AI expertise is unmatched in the market.&quot;",
    initials: "JD",
    name: "Jason Doe",
    role: "CEO, TechStream",
    color: "primary",
  },
  {
    quote:
      "&quot;The speed of delivery was breathtaking. We went from a napkin sketch to a production-ready AI tool in 4 weeks.&quot;",
    initials: "SR",
    name: "Sarah Richards",
    role: "Product Head, Nexus AI",
    color: "secondary",
  },
  {
    quote:
      "&quot;Technical rigor combined with a deep understanding of business goals. They are the best engineering partner we&apos;ve had.&quot;",
    initials: "MK",
    name: "Marcus Kim",
    role: "Founder, DataPulse",
    color: "tertiary",
  },
];

const StarRating = () => (
  <div className="flex text-tertiary mb-md">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className="material-symbols-outlined"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star
      </span>
    ))}
  </div>
);

const TestimonialCard = ({
  quote,
  initials,
  name,
  role,
  color,
}: {
  quote: string;
  initials: string;
  name: string;
  role: string;
  color: string;
}) => (
  <div className="glass-card p-xl rounded-2xl flex flex-col">
    <StarRating />
    <p
      className="text-on-surface italic mb-xl font-body-lg"
      dangerouslySetInnerHTML={{ __html: quote }}
    />
    <div className="mt-auto flex items-center gap-md">
      <div
        className={`w-12 h-12 rounded-full bg-${color}/20 flex items-center justify-center font-bold`}
      >
        {initials}
      </div>
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-sm text-on-surface-variant">{role}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-xxl px-gutter max-w-7xl mx-auto">
      <h2 className="font-display-lg text-headline-lg mb-xxl text-center">
        What Founders Say
      </h2>
      <div className="grid md:grid-cols-3 gap-md">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
