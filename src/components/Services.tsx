import {
  Lightbulb,
  FileCheck,
  Users,
  Cpu,
  GraduationCap,
  Workflow,
} from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Lightbulb,
    title: "AI Strategy",
    desc: "Align AI initiatives with business goals and board expectations.",
  },
  {
    icon: FileCheck,
    title: "Policy & Governance",
    desc: "Build frameworks that satisfy regulators and enable innovation.",
  },
  {
    icon: Users,
    title: "Operating Model Design",
    desc: "Structure teams and processes to scale AI responsibly.",
  },
  {
    icon: Cpu,
    title: "Use Case Prioritisation",
    desc: "Identify and rank high-impact AI opportunities by feasibility.",
  },
  {
    icon: GraduationCap,
    title: "Leadership Enablement",
    desc: "Equip your C-suite with practical AI literacy and confidence.",
  },
  {
    icon: Workflow,
    title: "Delivery Assurance",
    desc: "Keep AI programmes on track with hands-on oversight.",
  },
];

const Services = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={servicesBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div ref={ref} className="section-fade-in max-w-7xl mx-auto relative z-10">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 text-center">
          What We Do
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <s.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 font-sans">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
