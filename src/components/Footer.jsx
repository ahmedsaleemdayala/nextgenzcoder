import Image from 'next/image';
import { NAV, SITE, SOCIALS } from '@/data/site';
import { BrandIcon } from './Icons';
import logo from '@/assets/logo-mark.png';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0c1320]">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="" width={40} height={40} className="h-10 w-10" />
            <div>
              <p className="font-semibold text-white">{SITE.name}</p>
              <p className="text-sm text-slate-400">{SITE.brand}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{SITE.tagline}</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-slate-300 hover:text-teal">{n.label}</a>
          ))}
        </nav>

        <ul className="flex gap-3">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`} className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-300 transition-colors hover:border-teal hover:text-teal">
                <BrandIcon name={s.icon} size={17} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
