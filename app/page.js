import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechEcosystem from '@/components/TechEcosystem';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { SITE, SOCIALS } from '@/data/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  alternateName: SITE.brand,
  url: SITE.url,
  mainEntityOfPage: SITE.url,
  image: `${SITE.url}/og-image.png`,
  jobTitle: 'Accounts Manager and Full Stack Web & App Developer',
  email: SITE.email,
  telephone: '+92-333-3093878',
  address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
  worksFor: [{ '@type': 'Organization', name: 'Zubaida Enterprises' }, { '@type': 'Organization', name: SITE.brand }],
  alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'University of Karachi' }],
  knowsAbout: ['Accounting', 'Financial reporting', 'React', 'Next.js', 'Node.js', 'Express', 'Supabase', 'Power BI', 'Python for Finance'],
  sameAs: SOCIALS.filter((s) => s.icon !== 'whatsapp').map((s) => s.href),
};

const siteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  alternateName: [`${SITE.name} Portfolio`, SITE.brand],
  url: SITE.url,
  inLanguage: 'en',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechEcosystem />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, siteLd]) }} />
    </>
  );
}
