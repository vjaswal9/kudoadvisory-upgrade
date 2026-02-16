import { Search, Shield, Rocket } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Clarify",
    desc: "We assess your AI maturity, align stakeholders, and define a clear roadmap.",
  },
  {
    num: "02",
    icon: Shield,
    title: "Govern",
    desc: "We build the policies, guardrails, and governance structures you need.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Deliver",
    desc: "We embed with your team to turn plans into measurable progress.",
  },
];

const HowWeWork = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="how-we-work" className="py-24 px-6">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 text-center">
          Our Approach
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How We Work
        </h2>
        <div className="relative flex flex-col lg:flex-row items-start gap-8 lg:gap-0">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-16 left-[16.6%] right-[16.6%] h-0.5 bg-gradient-to-r from-accent/20 via-accent/60 to-accent/20" />

          {steps.map((step, i) => (
            <div key={step.num} className="flex-1 relative text-center px-6">
              {/* Step circle */}
              <div className="relative mx-auto w-32 h-32 rounded-full bg-card border-2 border-accent/30 flex flex-col items-center justify-center mb-8 hover:border-accent transition-colors">
                <span className="text-accent text-xs font-bold tracking-widest mb-1">
                  {step.num}
                </span>
                <step.icon className="text-accent" size={32} />
              </div>
              {/* Arrow between steps on mobile */}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-2 text-accent/40">
                  <span className="text-2xl">↓</span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-3 font-sans">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
