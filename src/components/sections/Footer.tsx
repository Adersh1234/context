import { VeLogo } from "@/components/icons/VeLogo";

const links = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Help Center", href: "#" },
  { label: "Contact", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-white text-dark rounded-t-[2rem] md:rounded-t-[3rem] px-6 md:px-20 lg:px-32 pt-14 md:pt-28 pb-8 md:pb-10">
      <div>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-24">
          <div className="shrink-0">
            <a href="/" aria-label="Ve home"><VeLogo className="h-8 md:h-10" variant="blue" /></a>
            <p className="mt-3 text-xs text-cyan/30 italic">Intent as Interface</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-cyan/60 hover:text-cyan transition-colors">{link.label}</a>
            ))}
          </nav>
        </div>
        <div className="mt-12 md:mt-20 border-t border-cyan/15" />
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-cyan/40">&copy; {new Date().getFullYear()} Ve. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" aria-label="LinkedIn" className="text-cyan/40 hover:text-cyan transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
            </a>
            <a href="#" aria-label="Twitter / X" className="text-cyan/40 hover:text-cyan transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h5l-7-8.5L20 4h-2l-5 6.2L9 4H4z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
