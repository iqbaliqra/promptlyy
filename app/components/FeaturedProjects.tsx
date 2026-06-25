"use client";

import { useState } from "react";

const projects = [
  {
    category: "AI Automation",
    title: "AeroFlow Dispatch Agent",
    problem: "Manual cargo routing and dispatch took 18+ hours daily, leading to delays and communication bottlenecks.",
    solution: "Autonomous agent pipeline that handles cargo routing, real-time fleet scheduling, and automated client notifications.",
    tech: ["LangGraph", "FastAPI", "Python", "PostgreSQL"],
    metrics: [
      { value: "89%", label: "Cost Reduction" },
      { value: "14 min", label: "Save per Load" },
    ],
    image: "/projects/ai_automation.png",
  },
  {
    category: "SaaS Development",
    title: "TenantScale Analytics",
    problem: "Multi-tenant reporting dashboards suffered from high query latency and data segregation complexities.",
    solution: "Scalable analytics platform with isolated multi-tenant schemas and automated caching layers.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { value: "99.99%", label: "Core Uptime" },
      { value: "5x", label: "Onboarding Speed" },
    ],
    image: "/projects/saas_development.png",
  },
  {
    category: "API Ecosystems",
    title: "OmniPay Unified Gateway",
    problem: "Payment routing fragmented across 12 APIs, causing transaction drop-offs and high latency.",
    solution: "A high-performance unified payment routing middleware with automatic fallback logic and smart load balancing.",
    tech: ["Go", "Redis", "GraphQL", "Docker"],
    metrics: [
      { value: "180ms", label: "Latency" },
      { value: "99.9%", label: "Success Rate" },
    ],
    image: "/projects/api_ecosystems.png",
  },
  {
    category: "Data Engineering",
    title: "Apex Stream Pipeline",
    problem: "Legacy pipeline taking 6+ hours to compile batch datasets, blocking real-time analytics.",
    solution: "Decoupled real-time streaming pipeline processing petabyte-scale telemetry via event streams.",
    tech: ["Apache Kafka", "PySpark", "AWS Lambda", "Snowflake"],
    metrics: [
      { value: "10M+", label: "Events/sec" },
      { value: "2.1s", label: "E2E Latency" },
    ],
    image: "/projects/data_engineering.png",
  },
  {
    category: "Custom LLMs",
    title: "MedScribe Fine-tuned Clinical LLM",
    problem: "General LLMs fail strict healthcare compliance, clinical accuracy, and patient privacy standards.",
    solution: "A Llama-3-70B model fine-tuned on clinical datasets with automatic PII masking.",
    tech: ["PyTorch", "Hugging Face", "vLLM", "AWS"],
    metrics: [
      { value: "96.4%", label: "Medical Accuracy" },
      { value: "0%", label: "PII Leakage" },
    ],
    image: "/projects/custom_llms.png",
  },
  {
    category: "DevOps & Security",
    title: "Guardian SecOps Sentinel",
    problem: "Infrastructure vulnerability audits took weeks of manual labor, exposing assets to zero-day risks.",
    solution: "Automated cloud security compliance engine that runs real-time configuration analysis and automated patching.",
    tech: ["Terraform", "Kubernetes", "AWS GuardDuty", "GitHub Actions"],
    metrics: [
      { value: "SOC2", label: "Audit Ready" },
      { value: "2 min", label: "Threat Response" },
    ],
    image: "/projects/devops_security.png",
  },
  {
    category: "Mobile AI",
    title: "FitPulse On-Device Coach",
    problem: "Real-time skeletal motion analysis in the cloud created lag, high bandwidth usage, and user privacy risks.",
    solution: "Lightweight on-device CoreML model for real-time fitness form correction running entirely offline.",
    tech: ["Swift", "CoreML", "Flutter", "TensorFlow Lite"],
    metrics: [
      { value: "0ms", label: "Cloud Latency" },
      { value: "60 FPS", label: "Tracking" },
    ],
    image: "/projects/mobile_ai.png",
  },
  {
    category: "RAG Systems",
    title: "DocuQuery Enterprise Hub",
    problem: "Internal enterprise search was siloed across Google Drive, Slack, and local PDFs, leading to lost time.",
    solution: "Vector search engine with hybrid sparse/dense retrieval, semantic reranking, and citation source attribution.",
    tech: ["Pinecone", "LangChain", "OpenAI", "Next.js"],
    metrics: [
      { value: "85%", label: "Search Time Cut" },
      { value: "98%", label: "Citation Accuracy" },
    ],
    image: "/projects/rag_systems.png",
  },
];

const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100 translate-y-0");

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setFadeState("opacity-0 translate-y-4");
    setTimeout(() => {
      setActiveTab(index);
      setFadeState("opacity-100 translate-y-0");
    }, 200);
  };

  const project = projects[activeTab];

  return (
    <section className="py-xxl px-gutter bg-surface" id="work">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display-lg text-headline-lg mb-xl text-center">
          Featured Projects
        </h2>

        {/* Dynamic Category Navigation Tabs */}
        <div className="flex overflow-x-auto gap-sm pb-md mb-xl justify-start lg:justify-center border-b border-white/5 scrollbar-none">
          {projects.map((proj, idx) => (
            <button
              key={proj.category}
              onClick={() => handleTabChange(idx)}
              className={`px-lg py-sm rounded-full text-sm font-medium border transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === idx
                  ? "bg-primary/10 text-primary border-primary/40 shadow-[0_0_20px_rgba(195,192,255,0.15)]"
                  : "bg-white/5 text-on-surface-variant border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {proj.category}
            </button>
          ))}
        </div>

        {/* Active Project Card Container */}
        <div
          className={`glass-card rounded-3xl overflow-hidden grid lg:grid-cols-2 transition-all duration-300 ease-out ${fadeState}`}
        >
          {/* Project Mockup Column */}
          <div
            className="bg-cover bg-center h-96 lg:h-full min-h-[380px] relative group"
            style={{
              backgroundImage: `url('${project.image}')`,
            }}
          >
            {/* Dark glassmorphism overlay on hover for subtle lighting depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>

          {/* Project Details Column */}
          <div className="p-xl flex flex-col justify-center">
            <span className="text-primary font-label-md mb-2 uppercase tracking-wide">
              {project.category}
            </span>
            <h3 className="font-display-lg text-headline-lg mb-md">
              {project.title}
            </h3>

            <div className="space-y-md mb-xl">
              <div>
                <strong className="text-on-surface block text-sm mb-1 uppercase tracking-widest text-xs opacity-60">
                  Problem
                </strong>
                <p className="text-on-surface-variant text-body-md">
                  {project.problem}
                </p>
              </div>

              <div>
                <strong className="text-on-surface block text-sm mb-1 uppercase tracking-widest text-xs opacity-60">
                  Solution
                </strong>
                <p className="text-on-surface-variant text-body-md">
                  {project.solution}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <strong className="text-on-surface block text-sm mb-2 uppercase tracking-widest text-xs opacity-60">
                  Technologies
                </strong>
                <div className="flex flex-wrap gap-xs">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-white/5 px-3 py-1 rounded-full text-xs border border-white/10 text-on-surface-variant"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics Cards */}
            <div className="grid grid-cols-2 gap-md p-md bg-white/5 rounded-2xl border border-white/5">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-secondary font-bold text-headline-md tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs text-on-surface-variant mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
