'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { BrandIcon } from './Icons';
import { FEATURED_PROJECTS, EARLIER_PROJECTS } from '@/data/site';

const KIND = {
  'Burger House': 'Restaurant ordering platform',
  Waseel360: 'Home services marketplace',
  'Meridian Watch': 'E-commerce store',
};

function Links({ project, compact = false }) {
  const base = compact
    ? 'inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 text-sm text-slate-300 transition-colors hover:text-teal'
    : 'btn';
  return (
    <div className={compact ? 'flex shrink-0 flex-nowrap items-center gap-1' : 'flex flex-wrap items-center gap-2'}>
      {project.live && (
        <motion.a whileTap={{ scale: 0.97 }} href={project.live} target="_blank" rel="noopener noreferrer" className={`${base} ${compact ? '' : 'btn-primary'}`} aria-label={`${project.title} live demo (opens in a new tab)`}>
          Live Demo <ArrowUpRight size={15} aria-hidden="true" />
        </motion.a>
      )}
      {project.github && (
        <motion.a whileTap={{ scale: 0.97 }} href={project.github} target="_blank" rel="noopener noreferrer" className={`${base} ${compact ? '' : 'btn-outline'}`} aria-label={`${project.title} on GitHub (opens in a new tab)`}>
          <BrandIcon name="github" size={15} /> GitHub
        </motion.a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-pad bg-navy">
      <div className="container-page">
        <SectionHeading id="projects-title" title="Projects">
          Real builds with working links where they exist. Each one started as a business need, not a template.
        </SectionHeading>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i} className="h-full">
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-2 p-7 transition-colors hover:border-teal/50"
              >
                <p className="text-sm font-medium text-teal">{KIND[p.title]}</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">{p.title}</h3>
                <p className="mt-4 grow text-[0.95rem] leading-relaxed text-slate-300">{p.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
                  {p.tags.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
                <div className="mt-7 min-h-[2.75rem]">
                  {p.live || p.github ? <Links project={p} /> : <p className="text-sm text-slate-400">No public links yet.</p>}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="text-xl font-semibold text-white">Earlier builds</h3>
          <p className="mt-2 text-sm text-slate-400">Practice and landing-page projects from my first months of web development.</p>
          <ul className="mt-6 grid gap-x-10 border-t border-white/10 md:grid-cols-2">
            {EARLIER_PROJECTS.map((p) => (
              <li key={p.title} className="flex items-start justify-between gap-4 border-b border-white/10 py-5">
                <div className="min-w-0">
                  <h4 className="font-semibold text-white">{p.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{p.description}</p>
                  <p className="mt-2 text-xs text-slate-500">{p.tags.join(', ')}</p>
                </div>
                <Links project={p} compact />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
