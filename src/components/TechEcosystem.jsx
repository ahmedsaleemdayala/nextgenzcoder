'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { TechIcon } from './Icons';
import { TECH } from '@/data/site';

const SPAN = { 'Accounting & Finance': 'lg:col-span-2', 'Artificial Intelligence': 'lg:col-span-2' };

export default function TechEcosystem() {
  return (
    <section id="technology" aria-labelledby="tech-title" className="section-pad bg-navy-2">
      <div className="container-page">
        <SectionHeading id="tech-title" title="Technology ecosystem">
          Tools I use across code, accounts and data. Listed as skills, not scores. What I know is what the work above shows.
        </SectionHeading>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TECH.map((group, i) => (
            <Reveal key={group.title} delay={0.04 * (i % 3)} className={`${SPAN[group.title] || ''}`}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className="h-full rounded-2xl border border-white/10 bg-navy p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                    <TechIcon name={group.icon} size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">{item}</li>
                  ))}
                  {group.learning?.map((item) => (
                    <li key={item} className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-teal/60 px-2.5 py-1 text-xs font-medium text-teal">
                      {item}
                      <span className="text-slate-400">(currently learning)</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
