"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import TechGrid from "../../components/TechGrid";
import DotsStructure from "../../components/DotsStructure";
import { MdBusinessCenter, MdFlightTakeoff, MdLaptopMac } from "react-icons/md";

export function ContactClient() {
  return (
    <div>
      {/* Hero Section - Optimized H1 & Description */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Expert <span className="text-primary">Web Developers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to scale your business? Whether you are a <strong>Travel Agency in Delhi</strong> or a <strong>Startup in Bangalore</strong>, let's build a website that drives real growth.
          </p>
        </motion.div>

        <section className="absolute z-0 opacity-60 top-0 left-0 h-[70vh] w-full">
          <TechGrid />
        </section>
      </section>

      {/* Main Content Form & Info */}
      <section className="py-12 md:py-20 lg:py-24" id="contact-form">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Contact Form */}
            <motion.div
              className="md:col-span-2 lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Start Your Project Discussion
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below for a free quote. We usually reply within 24 hours.
              </p>
              <ContactForm />
            </motion.div>

            {/* Sidebar Info - Wrapped in <address> for SEO */}
            <motion.div
              className="md:col-span-2 lg:col-span-1 space-y-6 md:space-y-8 order-first md:order-last"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                  Contact Information
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Based in <strong>Indore & Ujjain</strong>, serving clients across India & Globally.
                </p>
              </div>
              
              {/* Semantic Address Tag */}
              <address className="not-italic">
                <ContactInfo />
              </address>

              <div className="p-6 bg-muted/30 rounded-xl border border-border mt-6">
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-sm text-muted-foreground">Support: 24/7 via WhatsApp</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SEO SECTION: "Why Reach Out?" */}
      <section className="py-16 bg-muted/20 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-4">Who Should Schedule a Consultation?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    We specialize in solving digital problems for specific industries. Reach out if you fall into these categories:
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                    className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                        <MdFlightTakeoff size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Travel Agencies</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Need a booking engine or itinerary showcase? We build high-performance travel portals that help you sell more tour packages in competitive markets like Himachal, Goa, and Kerala.
                    </p>
                </motion.div>

                <motion.div 
                    className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                        <MdBusinessCenter size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Small Businesses</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        If you are a local business owner in Indore, Mumbai, or Pune, we provide affordable SEO-friendly websites that put you on the digital map and attract local customers.
                    </p>
                </motion.div>

                <motion.div 
                    className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                        <MdLaptopMac size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Freelancers</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Photographers, Consultants, and Writers—stop using generic templates. Let us build you a custom Next.js portfolio that loads instantly and impresses international clients.
                    </p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Response Time / Stats */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Our Commitment to Service
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              We value your time. Whether you contact us via WhatsApp or Email, expect a prompt and professional response from our development team.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
              <div className="p-4 md:p-6 bg-muted/50 rounded-lg border border-border/50">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  24hrs
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Max Response Time
                </p>
              </div>
              <div className="p-4 md:p-6 bg-muted/50 rounded-lg border border-border/50">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  100%
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Privacy Guaranteed
                </p>
              </div>
              <div className="p-4 md:p-6 bg-muted/50 rounded-lg border border-border/50">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  FREE
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Initial Consultation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}