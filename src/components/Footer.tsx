const launchYear = 2026;

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="wrapper flex flex-col gap-2 py-10 text-sm text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {launchYear} Your Name. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:hello@example.com" className="hover:text-foreground">
            Email
          </a>
          <a href="#" className="hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
