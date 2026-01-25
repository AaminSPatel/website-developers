"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  Button,
} from "@/components/ui";
import Link from "next/link";
import * as Icons from "react-icons/md";
import { useEffect, useState } from "react";
import { useSiteContext } from "../context/SiteContext";
import TechGrid from "../../components/TechGrid";
import DotsStructure from "../../components/DotsStructure";

export function ServicesClient() {
  const [services, setServices] = useState([]);
  const siteData = useSiteContext();
  useEffect(() => {
    setServices(siteData.services);
  }, []);

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive web development solutions tailored to your business
            needs
          </p>
        </motion.div>

        <section className="absolute z-0 opacity-60 top-0 left-0  h-[70vh] w-full">
          <TechGrid />
        </section>
        <section className="absolute z-0 opacity-60 top-0 left-0  h-[30vh] w-full">
          <DotsStructure />
        </section>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

            /*  initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} */
          >
            {services.map((service) => {
              const IconComponent = Icons[service.icon];

              return (
                <motion.div key={service.id} /*  variants={itemVariants} */>
                  <Card
                    variant="elevated"
                    className="h-full flex flex-col hover:scale-105 transition-transform duration-300"
                  >
                    <CardContent className="pt-8">
                      <div className="mb-6">
                        {IconComponent && (
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                            <IconComponent className="text-primary" size={32} />
                          </div>
                        )}
                      </div>
                      <CardTitle className="mb-3 text-2xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="mb-6 text-base">
                        {service.description}
                      </CardDescription>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-muted/30 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss which services are right for your project.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary" className='border-2 border-accent cursor-pointer'>
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
