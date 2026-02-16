import { Target, Shield, Rocket, BarChart3 } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const outcomes = [
  {
    icon: Target,
    title: "Strategic clarity",
    desc: "A clear AI roadmap tied to business outcomes, not hype.",
  },
  {
    icon: Shield,
    title: "Defensible governance",
    desc: "Policies and guardrails your board and regulators will trust.",
  },
  {
    icon: Rocket,
    title: "Accelerated delivery",
    desc: "AI initiatives that ship — not stall in committee.",
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    desc: "Clear metrics linking AI spend to business value.",
  },
];

const Outcomes = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="outcomes" className="py-24 px-6">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 text-center">
          What You Get
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Executive-ready outcomes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <item.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-sans">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
