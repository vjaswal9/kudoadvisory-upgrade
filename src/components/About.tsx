import { Target, Shield, Zap } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import aboutImage from "@/assets/about-image.jpg";

const pillars = [
  { icon: Target, title: "Outcome-led", desc: "Every engagement ties to a measurable business result." },
  { icon: Shield, title: "Governed", desc: "Responsible AI isn't optional — it's built into our approach." },
  { icon: Zap, title: "Delivery-first", desc: "We ship outcomes, not slide decks." },
];

const About = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Practical AI advisory for enterprise leaders
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kudo Advisory was founded to bridge the gap between AI ambition and
              enterprise reality. We work with CIOs, CDOs, and transformation
              leads to build AI strategies that are governed, measurable, and
              actually get delivered.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No buzzwords. No vendor lock-in. Just clear-headed advice that
              moves the needle.
            </p>
          </div>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Enterprise AI advisory team collaborating"
              className="rounded-2xl shadow-2xl shadow-accent/10 w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl bg-accent/20 -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-xl bg-primary/10 -z-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-8 rounded-2xl bg-card border border-border text-center hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <p.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 font-sans">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
