"use client";

import { useEffect, useState } from "react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "MVP development usually takes 4-8 weeks. Complex enterprise systems can take 3-6 months depending on the integration requirements.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes, we offer ongoing maintenance and optimization retainers to ensure your AI models and software remain performant as you scale.",
  },
  {
    question: "Can you work with our existing dev team?",
    answer:
      "Absolutely. We often act as a specialized AI extension to existing engineering departments, handling the complex implementation layers.",
  },
];

export default function Home() {
  const [openFaqs, setOpenFaqs] = useState<boolean[]>(
    Array(faqs.length).fill(false)
  );

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  useEffect(() => {
    // Smooth scrolling for in-page anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
        "href"
      );
      if (href) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    };
    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    // Scroll-reveal animation for glass-card elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".glass-card");
    cards.forEach((card) => {
      card.classList.add(
        "transition-all",
        "duration-700",
        "opacity-0",
        "translate-y-10"
      );
      observer.observe(card);
    });

    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-white/5 shadow-sm">
        <div className="flex justify-between items-center px-gutter py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              alt="Promptly Logo"
              className="h-8 w-8 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAebqj0ocw-DbeK3pPtNRXI09HWEZksZv-FMHdTNCISUTbCjNBjtzD2WFaJ55XkvgV75-mIbpf9-gDIm9Y2659Z8LGEYJGdn_lH7jPwippHaBddLhPm1uGx9NK0-IonylHkCr5iAKkZw2GhUm_Q5Vmz5VCsP0pjZEKUNeNTTG9iI6PTT2sJ0r5q-Who4ey6etFBGujL7WRtqei03ekrB9OoF8-rmdY9QA0x5FTcWlVabsEn-y3c9M795tgxbADkafzo02KSh81lc58"
            />
            <span className="font-display-lg text-headline-md font-bold text-on-surface">
              Promptly
            </span>
          </div>
          <div className="hidden md:flex items-center gap-lg">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md"
              href="#services"
            >
              Services
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md"
              href="#work"
            >
              Work
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md"
              href="#why"
            >
              Why Choose Us
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md"
              href="#process"
            >
              Process
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md"
              href="#faq"
            >
              FAQ
            </a>
          </div>
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-label-md text-label-md hover:scale-105 active:scale-95 transition-all">
            Book a Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Trusted By */}
      <section className="py-xl bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-gutter text-center">
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-lg">
            Trusted by high-growth companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-xl opacity-60">
            <div className="flex flex-col items-center">
              <div className="font-display-lg text-headline-lg mb-2">50+</div>
              <div className="text-on-surface-variant">Projects Delivered</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-display-lg text-headline-lg mb-2">99%</div>
              <div className="text-on-surface-variant">Client Retention</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-display-lg text-headline-lg mb-2">
                $10M+
              </div>
              <div className="text-on-surface-variant">Value Generated</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-display-lg text-headline-lg mb-2">
                15ms
              </div>
              <div className="text-on-surface-variant">Average Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
          {/* Card 1 */}
          <div className="glass-card p-xl rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-primary"
                data-icon="smart_toy"
              >
                smart_toy
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-sm">
              AI Automation
            </h3>
            <p className="text-on-surface-variant text-body-md">
              Streamline operations with LLM-powered agents and custom
              automation workflows.
            </p>
          </div>
          {/* Card 2 */}
          <div className="glass-card p-xl rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-secondary"
                data-icon="cloud"
              >
                cloud
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-sm">
              SaaS Development
            </h3>
            <p className="text-on-surface-variant text-body-md">
              Building scalable, multi-tenant cloud platforms from the
              ground up.
            </p>
          </div>
          {/* Card 3 */}
          <div className="glass-card p-xl rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-tertiary"
                data-icon="hub"
              >
                hub
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-sm">
              API Ecosystems
            </h3>
            <p className="text-on-surface-variant text-body-md">
              Seamless integrations and robust backend architectures for
              complex systems.
            </p>
          </div>
          {/* Card 4 */}
          <div className="glass-card p-xl rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-primary"
                data-icon="query_stats"
              >
                query_stats
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-sm">
              Data Engineering
            </h3>
            <p className="text-on-surface-variant text-body-md">
              Architecting data pipelines that fuel intelligent decision
              making.
            </p>
          </div>
          {/* Additional 4 cards */}
          <div className="glass-card p-xl rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-secondary"
                data-icon="terminal"
              >
                terminal
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-sm">
              Custom LLMs
            </h3>
            <p className="text-on-surface-variant text-body-md">
              Fine-tuning models on your proprietary data for niche domain
              excellence.
            </p>
          </div>
          <div className="glass-card p-xl rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-tertiary"
                data-icon="shield"
              >
                shield
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-sm">
              DevOps &amp; Security
            </h3>
            <p className="text-on-surface-variant text-body-md">
              Fortifying your infrastructure with enterprise-grade security
              protocols.
            </p>
          </div>
          <div className="glass-card p-xl rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-primary"
                data-icon="phone_iphone"
              >
                phone_iphone
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-sm">
              Mobile AI
            </h3>
            <p className="text-on-surface-variant text-body-md">
              Crafting responsive mobile experiences with edge-AI
              capabilities.
            </p>
          </div>
          <div className="glass-card p-xl rounded-2xl hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-secondary"
                data-icon="auto_awesome_motion"
              >
                auto_awesome_motion
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-sm">
              RAG Systems
            </h3>
            <p className="text-on-surface-variant text-body-md">
              Implementing Retrieval Augmented Generation for accurate AI
              responses.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section
        className="py-xxl bg-surface-container-low px-gutter overflow-hidden"
        id="why"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display-lg text-headline-lg mb-xl text-center">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-md">
            <div className="md:col-span-3 glass-card p-xl rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-md"
                  data-icon="bolt"
                >
                  bolt
                </span>
                <h3 className="font-headline-md text-headline-md mb-sm">
                  Fast Delivery
                </h3>
                <p className="text-on-surface-variant">
                  We prioritize momentum. Launch MVPs in weeks, not months,
                  without compromising on technical excellence.
                </p>
              </div>
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
            <div className="md:col-span-3 glass-card p-xl rounded-3xl">
              <span
                className="material-symbols-outlined text-secondary text-4xl mb-md"
                data-icon="psychology"
              >
                psychology
              </span>
              <h3 className="font-headline-md text-headline-md mb-sm">
                AI-First Engineering
              </h3>
              <p className="text-on-surface-variant">
                AI isn&apos;t an afterthought; it&apos;s at the core of our
                development DNA, ensuring smarter and more efficient
                products.
              </p>
            </div>
            <div className="md:col-span-2 glass-card p-xl rounded-3xl">
              <span
                className="material-symbols-outlined text-tertiary text-4xl mb-md"
                data-icon="all_inclusive"
              >
                all_inclusive
              </span>
              <h3 className="font-headline-md text-headline-md mb-sm">
                Scalable Stack
              </h3>
              <p className="text-on-surface-variant">
                Systems designed to handle millions of requests from day
                one.
              </p>
            </div>
            <div className="md:col-span-2 glass-card p-xl rounded-3xl">
              <span
                className="material-symbols-outlined text-primary text-4xl mb-md"
                data-icon="handshake"
              >
                handshake
              </span>
              <h3 className="font-headline-md text-headline-md mb-sm">
                True Partnership
              </h3>
              <p className="text-on-surface-variant">
                We act as your technical co-founders, invested in your
                long-term success.
              </p>
            </div>
            <div className="md:col-span-2 glass-card p-xl rounded-3xl">
              <span
                className="material-symbols-outlined text-secondary text-4xl mb-md"
                data-icon="verified"
              >
                verified
              </span>
              <h3 className="font-headline-md text-headline-md mb-sm">
                Proven Results
              </h3>
              <p className="text-on-surface-variant">
                Our solutions have delivered significant ROI for global
                clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-xxl px-gutter max-w-7xl mx-auto" id="process">
        <h2 className="font-display-lg text-headline-lg mb-xxl text-center">
          Our 5-Step Process
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-lg relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          {/* Step 1 */}
          <div className="flex-1 flex flex-col items-center text-center relative z-10 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-primary mb-md group-hover:scale-110 transition-transform">
              <span className="text-primary font-bold text-headline-md">
                01
              </span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-xs">
              Discovery
            </h4>
            <p className="text-on-surface-variant text-sm">
              Defining goals and technical requirements.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex-1 flex flex-col items-center text-center relative z-10 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-primary mb-md group-hover:scale-110 transition-transform">
              <span className="text-secondary font-bold text-headline-md">
                02
              </span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-xs">
              Architecture
            </h4>
            <p className="text-on-surface-variant text-sm">
              Designing robust and scalable systems.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex-1 flex flex-col items-center text-center relative z-10 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-primary mb-md group-hover:scale-110 transition-transform">
              <span className="text-tertiary font-bold text-headline-md">
                03
              </span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-xs">
              Development
            </h4>
            <p className="text-on-surface-variant text-sm">
              Agile sprints and continuous integration.
            </p>
          </div>
          {/* Step 4 */}
          <div className="flex-1 flex flex-col items-center text-center relative z-10 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-primary mb-md group-hover:scale-110 transition-transform">
              <span className="text-primary font-bold text-headline-md">
                04
              </span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-xs">
              Refinement
            </h4>
            <p className="text-on-surface-variant text-sm">
              Testing, optimization, and AI tuning.
            </p>
          </div>
          {/* Step 5 */}
          <div className="flex-1 flex flex-col items-center text-center relative z-10 group">
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-primary mb-md group-hover:scale-110 transition-transform">
              <span className="text-secondary font-bold text-headline-md">
                05
              </span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-xs">Scale</h4>
            <p className="text-on-surface-variant text-sm">
              Deployment and ongoing optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
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

      {/* Tech Stack Scrolling */}
      <section className="py-xl border-y border-white/5 overflow-hidden">
        <div className="flex animate-scroll gap-xxl items-center whitespace-nowrap">
          {/* Set 1 */}
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            React
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            Next.js
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            LangChain
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            OpenAI
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            Python
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            AWS
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            Supabase
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            Tailwind
          </span>
          {/* Set 2 duplicate for seamless scroll */}
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            React
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            Next.js
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            LangChain
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            OpenAI
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            Python
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            AWS
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            Supabase
          </span>
          <span className="text-on-surface-variant font-bold text-headline-md px-12">
            Tailwind
          </span>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-xxl px-gutter max-w-7xl mx-auto">
        <h2 className="font-display-lg text-headline-lg mb-xxl text-center">
          What Founders Say
        </h2>
        <div className="grid md:grid-cols-3 gap-md">
          <div className="glass-card p-xl rounded-2xl flex flex-col">
            <div className="flex text-tertiary mb-md">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <p className="text-on-surface italic mb-xl font-body-lg">
              &quot;Promptly didn&apos;t just build a product; they built a
              scalable future for our startup. Their AI expertise is
              unmatched in the market.&quot;
            </p>
            <div className="mt-auto flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                JD
              </div>
              <div>
                <div className="font-bold">Jason Doe</div>
                <div className="text-sm text-on-surface-variant">
                  CEO, TechStream
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card p-xl rounded-2xl flex flex-col">
            <div className="flex text-tertiary mb-md">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <p className="text-on-surface italic mb-xl font-body-lg">
              &quot;The speed of delivery was breathtaking. We went from a
              napkin sketch to a production-ready AI tool in 4 weeks.&quot;
            </p>
            <div className="mt-auto flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-bold">
                SR
              </div>
              <div>
                <div className="font-bold">Sarah Richards</div>
                <div className="text-sm text-on-surface-variant">
                  Product Head, Nexus AI
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card p-xl rounded-2xl flex flex-col">
            <div className="flex text-tertiary mb-md">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <p className="text-on-surface italic mb-xl font-body-lg">
              &quot;Technical rigor combined with a deep understanding of
              business goals. They are the best engineering partner
              we&apos;ve had.&quot;
            </p>
            <div className="mt-auto flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-tertiary/20 flex items-center justify-center font-bold">
                MK
              </div>
              <div>
                <div className="font-bold">Marcus Kim</div>
                <div className="text-sm text-on-surface-variant">
                  Founder, DataPulse
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-xxl px-gutter max-w-3xl mx-auto" id="faq">
        <h2 className="font-display-lg text-headline-lg mb-xl text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-md">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="glass-card rounded-2xl overflow-hidden">
              <button
                className="w-full p-xl text-left flex justify-between items-center group"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-headline-md text-headline-md">
                  {faq.question}
                </span>
                <span
                  className="material-symbols-outlined group-hover:text-primary transition-colors"
                  data-icon="expand_more"
                >
                  expand_more
                </span>
              </button>
              <div
                className={
                  openFaqs[index] ? "px-xl pb-xl text-on-surface-variant" : "hidden"
                }
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
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

      {/* Footer */}
      <footer className="bg-surface-container-lowest py-xl border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-md px-gutter max-w-7xl mx-auto">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-md">
              <img
                alt="Promptly Logo"
                className="h-8 w-8 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAebqj0ocw-DbeK3pPtNRXI09HWEZksZv-FMHdTNCISUTbCjNBjtzD2WFaJ55XkvgV75-mIbpf9-gDIm9Y2659Z8LGEYJGdn_lH7jPwippHaBddLhPm1uGx9NK0-IonylHkCr5iAKkZw2GhUm_Q5Vmz5VCsP0pjZEKUNeNTTG9iI6PTT2sJ0r5q-Who4ey6etFBGujL7WRtqei03ekrB9OoF8-rmdY9QA0x5FTcWlVabsEn-y3c9M795tgxbADkafzo02KSh81lc58"
              />
              <span className="font-display-lg text-headline-md font-bold text-primary">
                Promptly
              </span>
            </div>
            <p className="text-on-surface-variant max-w-xs mb-lg">
              A premium AI &amp; Software Agency dedicated to high-performance
              implementation.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-md">Links</h4>
            <ul className="space-y-sm text-on-surface-variant">
              <li>
                <a
                  className="hover:text-secondary transition-colors"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors" href="#">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors" href="#">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-md">Legal</h4>
            <ul className="space-y-sm text-on-surface-variant">
              <li>
                <a className="hover:text-secondary transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-secondary transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-gutter mt-xl pt-lg border-t border-white/5 text-center text-sm text-on-surface-variant">
          © 2024 Promptly AI Automation Agency. All rights reserved.
        </div>
      </footer>
    </>
  );
}
