'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { SITE } from '@/data/site';
import photo from '@/assets/ahmed-saleem.jpg';

const ease = [0.22, 1, 0.36, 1];
const rise = (i) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.08 * i, ease },
});

const LEDGER = [
  { label: 'Accounts & finance', value: '15+ years' },
  { label: 'Web & app development', value: 'React, Node.js, Supabase' },
  { label: 'Data analytics', value: 'Power BI, Python for Finance' },
  { label: 'Agentic AI', value: 'Currently learning' },
];

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60rem 30rem at 85% 10%, rgba(57,120,246,0.14), transparent 60%), radial-gradient(40rem 26rem at 5% 90%, rgba(32,199,183,0.10), transparent 60%)',
        }}
      />
      <div className="container-page relative grid items-center gap-14 pb-20 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <motion.p {...rise(0)} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
            Based in Karachi, open to remote work
          </motion.p>

          <motion.h1 {...rise(1)} id="hero-title" className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] text-balance">
            <span className="mb-3 block text-xl font-medium tracking-normal text-teal sm:text-2xl">Ahmed Saleem</span>
            Accounts Manager & Full Stack Web Developer
          </motion.h1>

          <motion.p {...rise(2)} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            I combine 15+ years of financial and accounting experience with modern web development,
            business applications and data-driven technology.
          </motion.p>

          <motion.div {...rise(3)} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href={SITE.cv} download="Ahmed_Saleem_CV.pdf" className="btn btn-outline">
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Mail size={16} aria-hidden="true" /> Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div {...rise(2)} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-2">
            <Image
              src={photo}
              alt="Ahmed Saleem, accounts manager and web developer"
              priority
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 380px, 90vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          {/* Ledger: the accounting and technology sides of the profile, totalled. */}
          <motion.dl
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease }}
            aria-label="Profile summary"
            className="mt-4 rounded-xl border border-white/10 bg-navy-2/95 p-4 shadow-xl shadow-black/30 backdrop-blur lg:absolute lg:-bottom-8 lg:-left-24 lg:mt-0 lg:w-[23rem]"
          >
            {LEDGER.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 py-2 text-sm first:pt-0">
                <dt className="text-slate-400">{row.label}</dt>
                <dd className="text-right font-medium text-white">{row.value}</dd>
              </div>
            ))}
            <div className="mt-2 flex items-baseline justify-between gap-4 border-b-[3px] border-double border-teal/70 pb-2 pt-1 text-sm">
              <dt className="font-semibold text-teal">One profile</dt>
              <dd className="text-right text-slate-300">Business, finance, technology</dd>
            </div>
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
