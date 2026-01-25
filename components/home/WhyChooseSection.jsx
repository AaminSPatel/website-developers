"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui";
import {
  MdLocationOn,
  MdAccessTime,
  MdPhone,
  MdCheckCircle,
} from "react-icons/md";

export function WhyChooseSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const reasons = [
    {
      icon: MdLocationOn,
      title: "Local Expert in Ujjain & Indore",
      description:
        "I understand local businesses and what works in Madhya Pradesh. No big agency - just real local experience.",
    },
    {
      icon: MdAccessTime,
      title: "Quick Response & Fast Delivery",
      description:
        "Reply within 24 hours. Most websites delivered in 7-10 days. No long waiting periods like big companies.",
    },
    {
      icon: MdPhone,
      title: "Direct WhatsApp Support",
      description:
        "No complicated ticketing systems. WhatsApp me directly for any questions or updates. Personal service.",
    },
    {
      icon: MdCheckCircle,
      title: "Results-Focused Approach",
      description:
        "I build websites that actually bring customers. Focus on conversions, not just pretty designs.",
    },
  ];

  return (
    <section className="py-12 md:py-20  bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose Us for Your Website?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We design and develop high-performance websites that help businesses
            grow, convert users, and scale confidently.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="text-primary" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-16 pt-12 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-primary mb-4">
              Serving Ujjain & Indore Since 2023
            </p>
            <p className="text-muted-foreground">
              Trusted by 5+ local businesses for their online success
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
