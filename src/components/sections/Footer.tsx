const productLinks = [
  { label: "Why", href: "#" },
  { label: "Research", href: "#" },
  { label: "Log In", href: "#" },
];

const solutionLinks = [
  { label: "Photography", href: "#" },
  { label: "Sales", href: "#" },
  { label: "Customer Support", href: "#" },
];

const companyLinks = [
  { label: "Careers", href: "#" },
  { label: "Subscribe", href: "#" },
  { label: "Help center", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan/80 mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-cyan/60 hover:text-cyan transition-colors">{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-white text-dark rounded-t-[2rem] md:rounded-t-[3rem] px-10 md:px-20 lg:px-32 pt-20 md:pt-28 pb-10">
      <div>
        {/* Top section — tagline left, link columns far right */}
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-24">
          {/* Left — large tagline */}
          <div className="shrink-0">
            <p className="text-cyan text-4xl md:text-5xl leading-[1.15]">
              Intent as
              <br />
              <span className="font-bold">Interface</span>
            </p>
          </div>

          {/* Right — link columns with generous gaps */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
            <LinkColumn title="Product" links={productLinks} />
            <LinkColumn title="Solutions" links={solutionLinks} />
            <LinkColumn title="Company" links={companyLinks} />
          </div>
        </div>

        {/* Divider — narrower, centered */}
        <div className="mt-20 border-t border-cyan/15" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cyan/40">
            &copy; {new Date().getFullYear()} VE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-cyan/40 hover:text-cyan transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-cyan/40 hover:text-cyan transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-cyan/40 hover:text-cyan transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
