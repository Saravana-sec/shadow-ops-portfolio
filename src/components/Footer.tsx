const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="font-mono text-sm text-muted-foreground">
        <span className="text-primary">{">"}</span> Designed & built by{" "}
        <span className="text-primary">Saravana Priyan</span> © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
