import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useState } from "react";

const Contact = () => {
  const ref = useScrollFadeIn();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's talk about your AI ambitions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're just starting your AI journey or need help
              governing what you've already built, we'd love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:vijay@kudoadvisory.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="text-accent" size={18} />
                </div>
                vijay@kudoadvisory.com
              </a>
              <a
                href="https://www.linkedin.com/in/vijayjaswal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Linkedin className="text-accent" size={18} />
                </div>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <ArrowRight className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 font-sans">Thank you!</h3>
                <p className="text-muted-foreground">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                    placeholder="Tell us about your AI goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
