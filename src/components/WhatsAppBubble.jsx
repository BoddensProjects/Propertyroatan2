import { FaWhatsapp } from "react-icons/fa"

function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/50432377727"
      target="_blank"
      className="fixed bottom-6 right-6 z-[999] group"
    >
      <div className="relative">

        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white shadow-lg px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Chat now with Gavy
        </div>

        <div className="bg-green-500 text-white p-4 rounded-full text-3xl shadow-xl hover:scale-110 transition">
          <FaWhatsapp />
        </div>

      </div>
    </a>
  )
}

export default WhatsAppBubble