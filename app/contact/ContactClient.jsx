"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import TechGrid from "../../components/TechGrid";
import DotsStructure from "../../components/DotsStructure";

export function ContactClient() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            We'd love to hear about your project. Let's discuss how we can help
            bring your vision to life.
          </p>
        </motion.div>

        <section className="absolute z-0 opacity-60 top-0 left-0  h-[70vh] w-full">
          <TechGrid />
        </section>
        <section className="absolute z-0 opacity-60 top-0 left-0  h-[30vh] w-full">
          <DotsStructure />
        </section>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Form */}
            <motion.div
              className="md:col-span-2 lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                Send us a Message
              </h2>
              <ContactForm />
            </motion.div>

            {/* Sidebar Info */}
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
              </div>
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>

 
      {/* FAQ-like section */}
      <section className="py-12 md:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Response Time
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              We typically respond to inquiries within 24 hours during business
              days. For urgent matters, feel free to call us directly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
              <div className="p-4 md:p-6 bg-muted/50 rounded-lg">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  24hrs
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Average Response
                </p>
              </div>
              <div className="p-4 md:p-6 bg-muted/50 rounded-lg">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  100%
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Project Success
                </p>
              </div>
              <div className="p-4 md:p-6 bg-muted/50 rounded-lg">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  7 days
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Free Consultation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
