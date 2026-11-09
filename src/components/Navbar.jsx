'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV, SITE } from '@/data/site';
import logo from '@/assets/logo-mark.png';

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Close the menu first, then scroll on the next frame so the closing animation can't cancel the scroll.
  // Close the menu, wait for its exit animation, then scroll. Scrolling while the focused
  // link is unmounting gets cancelled by the browser.
  const goTo = (e, id) => {
    e.preventDefault();
    const wasOpen = open;
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }, wasOpen ? 300 : 0);
  };

  const link = (n, mobile = false) => {
    const current = active === n.id;
    return (
      <a
        key={n.id}
        href={`#${n.id}`}
        onClick={(e) => goTo(e, n.id)}
        aria-current={current ? 'page' : undefined}
        className={
          mobile
            ? `block rounded-md px-3 py-3 text-base font-medium ${current ? 'bg-white/5 text-teal' : 'text-ink hover:bg-white/5'}`
            : `relative px-3 py-2 text-sm font-medium transition-colors ${current ? 'text-teal' : 'text-slate-300 hover:text-white'}`
        }
      >
        {n.label}
        {!mobile && current && (
          <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-px bg-teal" />
        )}
      </a>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-navy/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between">
        {/* <a href="#home" className="flex items-center gap-2.5" aria-label={`${SITE.name}, back to top`}>
          <Image src={logo} alt="" width={36} height={36} className="h-9 w-9" />
          <span className="text-base font-semibold tracking-tight text-white">{SITE.name}</span>
        
        </a> */}
        <a href="#home" className="flex items-center gap-3" aria-label={`${SITE.name}, back to top`}>
  <Image src={logo} alt="" width={40} height={40} className="h-10 w-10" />
  <span className="leading-tight">
    <span className="block text-base font-semibold tracking-tight text-white">{SITE.name}</span>
    <span className="block text-xs text-slate-400">{SITE.brand}</span>
  </span>
</a>

        <div className="hidden items-center gap-1 xl:flex">{NAV.map((n) => link(n))}</div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 xl:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden xl:hidden"
          >
            <div className="container-page space-y-1 pb-5 pt-1">{NAV.map((n) => link(n, true))}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
