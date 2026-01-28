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
      title: "Indian Expertise, Global Standards",
      description:
        "Headquartered in Indore & Ujjain, we provide cost-effective web development services to clients in Mumbai, Bangalore, and globally. We understand the Indian market needs while delivering international quality code.",
    },
    {
      icon: MdAccessTime,
      title: "Fastest Delivery in the Market",
      description:
        "We value your time. Our agile development process ensures your business website is up and running in 7-10 days. Perfect for startups and small businesses who want to go online quickly without quality compromise.",
    },
    {
      icon: MdPhone,
      title: "Direct WhatsApp Support",
      description:
        "Forget automated emails. Get direct access to the developer via WhatsApp. We offer personalized support for website maintenance, updates, and troubleshooting to keep your business running smoothly 24/7.",
    },
    {
      icon: MdCheckCircle,
      title: "SEO & Performance Focused",
      description:
        "We don't just build websites; we build assets. Every site is optimized for Google Core Web Vitals, ensuring high ranking for your keywords. We focus on converting your visitors into paying customers.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Hire Us for Web Development?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with business logic to create websites that help you grow, convert users, and scale confidently across India.
          </p>
        </motion.div>

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
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
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
      </div>
    </section>
  );
}