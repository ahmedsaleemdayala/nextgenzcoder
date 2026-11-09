import Image from 'next/image';
import { GraduationCap, BookOpenCheck, Hourglass } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { EXPERIENCE, EDUCATION, COURSES, SITE } from '@/data/site';
import photo from '@/assets/ahmed-saleem.jpg';

const PILLARS = [
  { title: 'Accounts & finance', text: 'Current Accounts Manager, with part-time accounting alongside. Voucher entry through balance sheet, month-end closing and Excel reporting.' },
  { title: 'Web & app development', text: 'Freelance as NextGenzCoder: responsive sites, dashboards and business portals built with React, Node.js, Express and Supabase.' },
  { title: 'Data & AI', text: 'Completed Power BI and Python for Finance courses, uses ChatGPT, Claude and Gemini in daily work, and is now learning Agentic AI.' },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad bg-paper text-navy">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
            <div className="overflow-hidden rounded-2xl bg-navy">
              <Image
                src={photo}
                alt="Portrait of Ahmed Saleem"
                sizes="(min-width: 1024px) 360px, 90vw"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <p className="mt-4 text-sm text-slate-600">{SITE.location}. Open to remote work.</p>
          </Reveal>

          <div>
            <SectionHeading id="about-title" title="Finance experience, built into the software I write" tone="light" />
            <Reveal delay={0.05} className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              <p>
                I’ve worked in accounts and finance for over 15 years, across import/export trade, education, healthcare
                and textile manufacturing. Today I oversee the accounts at Zubaida Enterprises, keep the books at Kutiyana
                Memon Model Academy part-time, and build web applications for clients as NextGenzCoder.
              </p>
              <p>
                That mix is the point. I know how a business actually runs its money, so the dashboards and portals I
                build are shaped around real workflows, not just screens. I use AI tools to plan, write, test and debug
                code.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={0.05 * i} className="border-t-2 border-navy pt-4">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Experience, laid out like ledger entries */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold tracking-tight">Professional experience</h3>
          <ol className="mt-8 divide-y divide-slate-300 border-y border-slate-300">
            {EXPERIENCE.map((job) => (
              <Reveal as="li" key={job.role + job.org} className="grid gap-3 py-7 md:grid-cols-[13rem_1fr] md:gap-10">
                <div>
                  <p className="text-sm font-semibold text-teal-deep">{job.period}</p>
                  <p className="mt-1 text-sm text-slate-500">{job.place}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{job.role}</h4>
                  <p className="text-sm font-medium text-slate-600">{job.org}</p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-700 sm:text-base">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="mt-4 text-sm text-slate-500">Earlier: volunteer at Aga Khan University Hospital, Aug – Oct 2007.</p>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <Reveal>
            <h3 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <GraduationCap size={22} className="text-teal-deep" aria-hidden="true" /> Education
            </h3>
            <ul className="mt-6 space-y-5">
              {EDUCATION.map((e) => (
                <li key={e.title} className="flex items-baseline justify-between gap-4 border-b border-slate-300 pb-4">
                  <div>
                    <p className="font-semibold">{e.title}</p>
                    <p className="text-sm text-slate-600">{e.org}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-500">{e.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <BookOpenCheck size={22} className="text-teal-deep" aria-hidden="true" /> Additional courses
            </h3>
            <p className="mt-6 text-sm font-semibold text-slate-500">Completed</p>
            <ul className="mt-3 space-y-3">
              {COURSES.completed.map((c) => (
                <li key={c.title} className="flex items-baseline justify-between gap-4 border-b border-slate-300 pb-3">
                  <span className="font-semibold">{c.title}</span>
                  <span className="text-sm text-slate-600">{c.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 flex items-center gap-1.5 text-sm font-semibold text-slate-500">
              <Hourglass size={14} aria-hidden="true" /> In progress
            </p>
            <ul className="mt-3 space-y-3">
              {COURSES.learning.map((c) => (
                <li key={c.title} className="flex items-baseline justify-between gap-4 rounded-lg border border-dashed border-teal-deep/60 bg-white px-4 py-3">
                  <span className="font-semibold">{c.title}</span>
                  <span className="text-sm text-teal-deep">{c.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
