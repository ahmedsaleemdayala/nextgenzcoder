import Reveal from './Reveal';

export default function SectionHeading({ id, title, children, tone = 'dark' }) {
  const light = tone === 'light';
  return (
    <Reveal className="max-w-2xl">
      <h2 id={id} className={`text-3xl font-semibold tracking-tight sm:text-4xl ${light ? 'text-navy' : 'text-white'}`}>
        {title}
      </h2>
      {children && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-slate-600' : 'text-slate-300'}`}>{children}</p>}
    </Reveal>
  );
}
