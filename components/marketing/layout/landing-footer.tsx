import type { FooterContent } from "@/types/landing";

interface LandingFooterProps {
  content: FooterContent;
}

export function LandingFooter({ content }: LandingFooterProps) {
  return (
    <footer className="relative z-20 border-t border-slate-100 bg-white py-16 text-sm text-slate-500">
      <div className="container mx-auto px-6">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-navy text-xs font-bold text-white shadow-lg">
                911
              </div>
              <span className="font-display text-lg font-bold text-brand-navy">{content.companyName}</span>
            </div>
            <p className="mb-6 text-xs leading-relaxed text-slate-400">{content.summary}</p>
          </div>

          <div className="col-span-1 lg:col-span-3 lg:pl-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h5 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-navy">Legal</h5>
                <ul className="space-y-3 text-xs">
                  {content.legalLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="transition-colors hover:text-sky-500">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-navy">
                  {content.disclaimerTitle}
                </h5>
                <p className="text-[10px] leading-5 text-slate-400">{content.disclaimerText}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-slate-100 pt-8 text-xs text-slate-400 md:flex-row">
          <p>{content.copyright}</p>
          <p className="mt-2 font-medium md:mt-0">{content.signature}</p>
        </div>
      </div>
    </footer>
  );
}
