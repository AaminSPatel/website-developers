import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { brand } from "@/lib/siteData";

export const metadata = {
  title: "Contact Us — Let's Talk About Your Business",
  description:
    "Get in touch with Business Sathi for a free consultation on your website, Google Business Profile, SEO, or Meta Ads needs in Indore.",
};

const quickCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Fastest way to reach us",
    action: `https://wa.me/${brand.whatsappNumber}`,
    label: brand.phone,
    external: true,
  },
  {
    icon: Phone,
    title: "Call",
    detail: "Mon–Sat, 10 AM – 7 PM",
    action: `tel:+${brand.phoneRaw}`,
    label: brand.phone,
  },
  {
    icon: Mail,
    title: "Email",
    detail: "We reply within a day",
    action: `mailto:${brand.email}`,
    label: brand.email,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your business. We'll tell you honestly how we can help."
        description="No pressure, no scripted sales pitch — just a real conversation about what your business needs."
      />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {quickCards.map((card) => (
            <a
              key={card.title}
              href={card.action}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="card-lift rounded-3xl border border-[#e7e7e7] bg-white p-6 flex flex-col items-start"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]/8 text-[#2563EB] mb-4">
                <card.icon size={19} />
              </span>
              <h3 className="font-display font-semibold text-base tracking-tight mb-1">{card.title}</h3>
              <p className="text-xs text-[#999999] mb-2">{card.detail}</p>
              <p className="text-sm font-medium text-[#2563EB]">{card.label}</p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <ContactForm />

          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e7e7] bg-white p-7">
              <h3 className="font-display font-semibold text-lg tracking-tight mb-5 flex items-center gap-2">
                <Clock size={18} className="text-[#2563EB]" /> Business Hours
              </h3>
              <div className="space-y-3">
                {brand.businessHours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-[#666666]">{h.day}</span>
                    <span className="font-medium text-[#111111]">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#e7e7e7] bg-white p-7">
              <h3 className="font-display font-semibold text-lg tracking-tight mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-[#2563EB]" /> Where We Work
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                We're based in {brand.city}, {brand.region}, and work primarily with local
                businesses across the city — in person when it helps, remotely for everything else.
                We also take on select remote projects beyond {brand.city}.
              </p>
            </div>

            <div className="rounded-3xl bg-[#0B0F1A] p-7 text-white noise">
              <h3 className="font-display font-semibold text-lg tracking-tight mb-2">
                Prefer WhatsApp?
              </h3>
              <p className="text-sm text-white/60 mb-5 leading-relaxed">
                Most of our clients reach us there first — it's the fastest way to get a real answer.
              </p>
              <a href={`https://wa.me/${brand.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                <MessageCircle size={16} /> Message Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
