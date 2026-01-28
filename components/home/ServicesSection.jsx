"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardTitle, Button } from "@/components/ui";
import * as Icons from "react-icons/md";
import { useSiteContext } from "../../app/context/SiteContext";
import { useEffect, useState } from "react";

export function ServicesSection() {
  const [services, setServices] = useState([]);
  const siteData = useSiteContext();
  
  useEffect(() => {
    if(siteData?.services) {
        setServices(siteData.services);
    }
  }, [siteData]);

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions tailored for Startups, Travel Agencies, and Professionals.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.slice(0, 3).map((service) => {
            const IconComponent = Icons[service.icon] || Icons.MdCode;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                key={service.id}
              >
                <Card
                  variant="elevated"
                  className="relative overflow-hidden h-full flex flex-col hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="pt-8">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                    </div>
                    <CardTitle className="mb-2">{service.title}</CardTitle>
                    <CardDescription className="mb-4">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* NEW SEO TEXT BLOCK - Added nicely below grid */}
        <motion.div 
            className="mt-16 bg-background rounded-2xl p-8 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h3 className="text-2xl font-bold mb-4 text-center">Specialized Industries We Serve</h3>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground">
                <div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">For Travel Agencies & Tour Operators</h4>
                    <p className="leading-relaxed">
                        We build high-converting <strong>travel websites</strong> with dynamic itinerary displays, booking inquiry forms, and gallery showcases. Whether you are in Delhi, Mumbai, or Himachal, our travel portals are designed to attract tourists and rank for keywords like "Best Tour Packages".
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">For Small Businesses & Freelancers</h4>
                    <p className="leading-relaxed">
                        From personal portfolios for photographers to business websites for local shops, we offer affordable web design. Our sites are optimized for local SEO, helping you rank in your specific city, be it Indore, Pune, or Bangalore.
                    </p>
                </div>
            </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/services">
            <Button size="lg" variant="primary" className='border-2 border-accent'>
              Explore All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}