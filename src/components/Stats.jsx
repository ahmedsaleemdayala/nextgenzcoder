'use client';
import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { STATS } from '@/data/site';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setN(value);
    const controls = animate(0, value, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="statistics" aria-labelledby="stats-title" className="section-pad bg-navy">
      <div className="container-page">
        <SectionHeading id="stats-title" title="Key statistics">
          Numbers taken straight from my CV and project list.
        </SectionHeading>
        <dl className="mt-12 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className={`flex flex-col ${i > 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''}`}>
              <dt className="order-2 mt-3 text-base font-semibold text-white">{s.label}</dt>
              <dd className="order-1 text-6xl font-semibold tracking-tight text-teal sm:text-7xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dd className="order-3 mt-1 text-sm text-slate-400">{s.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
