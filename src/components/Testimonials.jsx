import { Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { TESTIMONIALS } from '@/data/site';

export default function Testimonials() {
  const has = TESTIMONIALS.length > 0;
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section-pad bg-paper text-navy">
      <div className="container-page">
        <SectionHeading id="testimonials-title" title="Testimonials" tone="light">
          {has ? 'What clients and colleagues say about working together.' : 'Client and colleague feedback will be published here once it’s received.'}
        </SectionHeading>

        {has ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={0.06 * i}>
                <figure className="h-full rounded-2xl border border-slate-200 bg-white p-7">
                  <Quote size={22} className="text-teal-deep" aria-hidden="true" />
                  <blockquote className="mt-4 text-base leading-relaxed text-slate-700">{t.quote}</blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-semibold">{t.name}</span>
                    {t.role && <span className="text-slate-500">, {t.role}</span>}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-12">
            <div className="grid gap-5 md:grid-cols-3" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-7">
                  <Quote size={22} className="text-slate-300" />
                  <div className="mt-5 space-y-2.5">
                    <div className="h-2.5 w-full rounded bg-slate-200" />
                    <div className="h-2.5 w-11/12 rounded bg-slate-200" />
                    <div className="h-2.5 w-3/5 rounded bg-slate-200" />
                  </div>
                  <div className="mt-7 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-slate-200" />
                    <div className="space-y-1.5">
                      <div className="h-2.5 w-24 rounded bg-slate-200" />
                      <div className="h-2 w-16 rounded bg-slate-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-600">
              Worked with me? <a href="#contact" className="font-semibold text-teal-deep underline underline-offset-4">Send a short note</a> and it may appear here.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
