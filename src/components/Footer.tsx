const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kudo Advisory. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Terms
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
