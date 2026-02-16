import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-10vh) scale(1); opacity: 0; }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            AI Advisory for Leaders
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Turn AI intent into{" "}
            <span className="text-gradient">forward motion</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl leading-relaxed">
            <span className="text-accent font-semibold">Kudo</span> is a Japanese word (駆動) — it means <em>driving force</em>. The power that turns intent into forward motion.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            We exist to make AI move. Kudo Advisory helps leadership teams go from AI ambition to
            governed, measurable progress — without the buzzwords.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Book a Discovery Call
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-medium text-lg hover:bg-secondary transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
