import PageHero from "@/components/PageHero";
import { brand } from "@/lib/siteData";

export const metadata = {
  title: "Privacy Policy",
  description: "How Business Sathi collects, uses, and protects your information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: `When you contact us through our website, WhatsApp, phone, or email, we may collect your name, phone number, email address, and any details you share about your business or project. We do not collect sensitive personal information unless you voluntarily provide it.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use the information you share solely to respond to your enquiry, provide quotes, deliver services you've requested, and communicate about ongoing projects. We do not sell, rent, or trade your information to third parties.`,
  },
  {
    title: "WhatsApp Communication",
    body: `Our contact form and WhatsApp button route your enquiry directly to our business WhatsApp number. Messages sent this way are subject to WhatsApp's own privacy policy in addition to this one.`,
  },
  {
    title: "Cookies & Analytics",
    body: `We may use basic analytics tools (such as Google Analytics) to understand how visitors use our website, in order to improve it. This data is aggregated and does not personally identify you.`,
  },
  {
    title: "Third-Party Services",
    body: `For services like Meta Ads management, we may use platforms such as Meta Business Suite on your behalf, governed by their respective privacy policies. We only access what's necessary to deliver the agreed service.`,
  },
  {
    title: "Data Retention",
    body: `We retain project-related information for as long as necessary to provide services and maintain business records, and delete it upon reasonable request where we're not legally required to retain it.`,
  },
  {
    title: "Your Rights",
    body: `You can request access to, correction of, or deletion of your personal information at any time by contacting us directly.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this policy occasionally. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: July 2026" />
      <section className="max-w-3xl mx-auto px-6 md:px-8 py-4 md:py-16 space-y-10">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display font-semibold text-xl md:text-2xl tracking-tight mb-3">
              {s.title}
            </h2>
            <p className="text-sm md:text-base text-[#666666] leading-relaxed">{s.body}</p>
          </div>
        ))}
        <div className="rounded-2xl border border-[#e7e7e7] bg-white p-6">
          <p className="text-sm text-[#666666]">
            Questions about this policy? Reach us at{" "}
            <a href={`mailto:${brand.email}`} className="text-[#2563EB] font-medium">{brand.email}</a>{" "}
            or <a href={`tel:+${brand.phoneRaw}`} className="text-[#2563EB] font-medium">{brand.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
