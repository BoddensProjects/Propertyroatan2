import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappOptions = [
  {
    label: 'Request investment properties',
    message:
      "Hi Gavy, I'm interested in Roatan investment properties. I'm looking to invest, relocate, or purchase a vacation home. My budget range is: ____. Preferred area: ____. Can you send the strongest available options?",
  },
  {
    label: 'Schedule private viewing',
    message:
      "Hi Gavy, I'd like to schedule a private viewing in Roatan. I'm interested in: ocean view, beachfront, land, or rental property. My preferred dates are: ____.",
  },
  {
    label: 'Off-market opportunities',
    message:
      "Hi Gavy, I'm interested in off-market or early-access Roatan opportunities. My budget range is: ____. My goal is: investment, relocation, or vacation home.",
  },
];

function getWhatsAppLink(message) {
  return `https://wa.me/50432377727?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <div className="w-[min(22rem,calc(100vw-2.5rem))] rounded-[1.25rem] border border-slate-200 bg-white p-3 shadow-[0_18px_55px_rgba(15,23,42,0.18)]">
          <p className="px-2 pb-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-500">
            Fastest Response
          </p>
          <p className="px-2 pb-3 text-xs leading-relaxed text-slate-500">
            Choose the message that matches your goal. It helps Gavy send better
            options faster.
          </p>

          <div className="grid gap-2">
            {whatsappOptions.map((option) => (
              <a
                key={option.label}
                href={getWhatsAppLink(option.message)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                {option.label}
                <span className="text-slate-400">-&gt;</span>
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group flex items-center gap-3 rounded-full bg-green-500 px-4 py-4 text-white shadow-xl transition hover:bg-green-600 sm:px-5"
        aria-label="Open WhatsApp options"
        aria-expanded={isOpen}
      >
        <FaWhatsapp className="text-3xl" />
        <span className="hidden text-xs font-bold uppercase tracking-[0.18em] sm:inline">
          WhatsApp Gavy
        </span>
      </button>
    </div>
  );
}
