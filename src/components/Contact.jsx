'use client';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { BrandIcon } from './Icons';
import { SITE, SOCIALS } from '@/data/site';
import { LIMITS, validateContact } from '@/lib/validate';

const EMPTY = { name: '', email: '', subject: '', message: '', botcheck: '' };

const field =
  'w-full rounded-lg border bg-navy px-4 py-3 text-base text-white placeholder:text-slate-500 transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal';

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [message, setMessage] = useState('');
  const lock = useRef(false); // blocks double-submits even before React re-renders

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (lock.current) return;

    const { values, errors: found, valid } = validateContact(form);
    if (!valid) {
      setErrors(found);
      setStatus('error');
      setMessage('Please fix the highlighted fields.');
      return;
    }

    lock.current = true;
    setStatus('sending');
    setMessage('');
    setErrors({});

    // A filled honeypot means a bot: pretend success, send nothing.
    if (form.botcheck) {
      setStatus('sent');
      setMessage('Message sent. I’ll reply to the email address you entered.');
      setForm(EMPTY);
      lock.current = false;
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus('error');
      setMessage('The contact form is not configured yet.');
      lock.current = false;
      return;
    }

    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio message: ${values.subject}`,
          from_name: 'Portfolio — Ahmed Saleem',
          name: values.name,
          email: values.email,
          replyto: values.email,
          message: values.message,
        }),
        signal: controller.signal,
      });
      clearTimeout(timer);
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus('sent');
        setMessage('Message sent. I’ll reply to the email address you entered.');
        setForm(EMPTY);
      } else {
        setStatus('error');
        setMessage('Your message could not be sent. Please try again, or email or WhatsApp me instead.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Check your connection and send again.');
    } finally {
      lock.current = false;
    }
  }

  const sending = status === 'sending';
  const err = (k) => (errors[k] ? { 'aria-invalid': true, 'aria-describedby': `${k}-error` } : {});
  const Err = ({ k }) => (errors[k] ? <p id={`${k}-error`} className="mt-1.5 text-sm text-red-400">{errors[k]}</p> : null);

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad bg-navy">
      <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading id="contact-title" title="Let’s talk">
            For web projects, business applications, or accounting work, send a message and I’ll reply by email.
          </SectionHeading>

          <Reveal delay={0.05}>
            <ul className="mt-10 space-y-5 text-base">
              <li className="flex items-start gap-4">
                <Mail size={20} className="mt-0.5 text-teal" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="text-white hover:text-teal">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={20} className="mt-0.5 text-teal" aria-hidden="true" />
                <a href={SITE.phoneHref} className="text-white hover:text-teal">{SITE.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="mt-0.5 text-teal" aria-hidden="true" />
                <span className="text-white">{SITE.location}</span>
              </li>
            </ul>
            <ul className="mt-8 flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-slate-300 transition-colors hover:border-teal hover:text-teal"
                  >
                    <BrandIcon name={s.icon} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} noValidate aria-busy={sending} className="rounded-2xl border border-white/10 bg-navy-2 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-200">Full name</label>
                <input id="name" name="name" type="text" autoComplete="name" required maxLength={LIMITS.name} value={form.name} onChange={onChange} disabled={sending} className={`${field} ${errors.name ? 'border-red-400' : 'border-white/15'}`} {...err('name')} />
                <Err k="name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-200">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required maxLength={LIMITS.email} value={form.email} onChange={onChange} disabled={sending} className={`${field} ${errors.email ? 'border-red-400' : 'border-white/15'}`} {...err('email')} />
                <Err k="email" />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-200">Subject</label>
              <input id="subject" name="subject" type="text" required maxLength={LIMITS.subject} value={form.subject} onChange={onChange} disabled={sending} className={`${field} ${errors.subject ? 'border-red-400' : 'border-white/15'}`} {...err('subject')} />
              <Err k="subject" />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-200">Message</label>
              <textarea id="message" name="message" rows={6} required maxLength={LIMITS.message} value={form.message} onChange={onChange} disabled={sending} className={`${field} resize-y ${errors.message ? 'border-red-400' : 'border-white/15'}`} {...err('message')} />
              <Err k="message" />
            </div>

            {/* Honeypot: hidden from people and assistive tech, bots tend to fill it. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="botcheck">Leave this field empty</label>
              <input id="botcheck" name="botcheck" type="text" tabIndex={-1} autoComplete="off" value={form.botcheck} onChange={onChange} />
            </div>

            <button type="submit" disabled={sending} className="btn btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
              {sending ? <Loader2 size={16} className="animate-spin" aria-hidden="true" /> : <Send size={16} aria-hidden="true" />}
              {sending ? 'Sending…' : 'Send message'}
            </button>

            <div role="status" aria-live="polite" className="mt-5 min-h-[1.5rem]">
              <AnimatePresence mode="wait">
                {(status === 'sent' || (status === 'error' && message)) && (
                  <motion.p
                    key={status + message}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex items-start gap-2 text-sm ${status === 'sent' ? 'text-teal' : 'text-red-400'}`}
                  >
                    {status === 'sent' ? <CheckCircle2 size={18} className="mt-px shrink-0" aria-hidden="true" /> : <AlertCircle size={18} className="mt-px shrink-0" aria-hidden="true" />}
                    <span>
                      {message}
                      {status === 'error' && !Object.values(errors).some(Boolean) && (
                        <>
                          {' '}You can also reach me at{' '}
                          <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">{SITE.email}</a> or on{' '}
                          <a href={SOCIALS.find((s) => s.icon === 'whatsapp').href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">WhatsApp</a>.
                        </>
                      )}
                    </span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
