import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { LayoutTemplate, Server, Database, BookOpenCheck, ChartColumn, Bot, Wrench } from 'lucide-react';

const BRAND = { github: FaGithub, linkedin: FaLinkedinIn, instagram: FaInstagram, whatsapp: FaWhatsapp };
const TECH = { layout: LayoutTemplate, server: Server, database: Database, ledger: BookOpenCheck, chart: ChartColumn, ai: Bot, tools: Wrench };

export function BrandIcon({ name, ...props }) {
  const Icon = BRAND[name];
  return Icon ? <Icon aria-hidden="true" {...props} /> : null;
}
export function TechIcon({ name, ...props }) {
  const Icon = TECH[name] || Wrench;
  return <Icon aria-hidden="true" {...props} />;
}
