import { FaWhatsapp } from 'react-icons/fa6';
import { SITE } from '@/data/site';

const text = encodeURIComponent('Hello Ahmed, I found your portfolio and would like to talk.');

// Fixed to the right edge, vertically centred, so it stays put while scrolling.
export default function WhatsAppButton() {
  return (
    <a
      href={`${SITE.whatsapp}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${SITE.name} on WhatsApp (opens in a new tab)`}
      className="group fixed right-0 top-1/2 z-40 flex -translate-y-1/2 items-center overflow-hidden rounded-l-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-[padding] duration-300 hover:pr-1 focus-visible:pr-1"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[11rem] group-hover:pl-4 group-hover:opacity-100 group-focus-visible:max-w-[11rem] group-focus-visible:pl-4 group-focus-visible:opacity-100">
        Chat on WhatsApp
      </span>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
        <FaWhatsapp aria-hidden="true" size={28} />
      </span>
    </a>
  );
}
