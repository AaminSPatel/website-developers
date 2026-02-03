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
    if(siteData?.services) setServices(siteData.services);
  }, [siteData]);

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive <Link href="/services" className="text-primary font-medium hover:underline">web development solutions</Link> tailored for Indore's Startups, Travel Agencies, and Professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => {
            const IconComponent = Icons[service.icon] || Icons.MdCode;
            return (
              <motion.div key={service.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
                <Card variant="elevated" className="h-full flex flex-col hover:scale-105 transition-transform">
                  <CardContent className="pt-8">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                    </div>
                    <CardTitle className="mb-2">{service.title}</CardTitle>
                    <CardDescription className="mb-4">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="mt-16 bg-background rounded-2xl p-8 border border-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-center">Specialized Industries We Serve</h3>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground">
                <div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">For Travel Agencies</h4>
                    <p>We build high-converting <Link href="/services" className="text-primary underline">travel agency websites</Link> in Indore and Ujjain. Check our <Link href="/projects" className="text-primary underline">travel portfolio</Link> for details.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">For Small Businesses</h4>
                    <p>Offering <strong>Affordable Web Design Services in Indore</strong> for local shops and freelancers. Start your <Link href="/contact" className="text-primary underline">online journey</Link> today.</p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}