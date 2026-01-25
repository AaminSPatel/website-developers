"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  Button,
} from "@/components/ui";
import * as Icons from "react-icons/md";
import { useSiteContext } from "../../app/context/SiteContext";
import { useEffect, useState } from "react";
import DotsStructure from "../DotsStructure";

export function ServicesSection() {
  /* const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and applications built with modern technologies',
      icon: 'MdCode',
      features: ['React & Next.js', 'Full-stack solutions', 'API integration']
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly interfaces that drive engagement',
      icon: 'MdPalette',
      features: ['User research', 'Wireframing', 'Design systems']
    },
    {
      id: 3,
      title: 'SEO & Marketing',
      description: 'Strategies to boost your online visibility and traffic',
      icon: 'MdTrendingUp',
      features: ['On-page SEO', 'Content strategy', 'Analytics']
    },
    {
      id: 4,
      title: 'E-commerce',
      description: 'Powerful online stores that convert visitors into customers',
      icon: 'MdShoppingCart',
      features: ['Payment integration', 'Inventory management', 'Analytics']
    },
    {
      id: 5,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      icon: 'MdPhone',
      features: ['iOS & Android', 'React Native', 'App stores']
    },
    {
      id: 6,
      title: 'Maintenance & Support',
      description: 'Ongoing support to keep your site running smoothly',
      icon: 'MdBuild',
      features: ['Updates', 'Monitoring', 'Support 24/7']
    }
  ] */
  const [services, setServices] = useState([]);
  const siteData = useSiteContext();
  useEffect(() => {
    setServices(siteData.services);
  }, [siteData]);
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
            Comprehensive web development solutions tailored to your business
            needs
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          /* variants={containerVariants}
          */ initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.slice(0, 3).map((service, index) => {
            const IconComponent = Icons[service.icon];

            return (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                /* viewport={{ once: true }} */
                transition={{ duration: 0.6 }}
                key={service.id}
              >
                <Card
                  variant="elevated"
                  className="relative overflow-hidden h-full flex flex-col hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="pt-8">
                    <div className="mb-6">
                      {IconComponent && (
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                          <IconComponent className="text-primary" size={24} />
                        </div>
                      )}
                    </div>
                    <CardTitle className="mb-2">{service.title}</CardTitle>
                    <CardDescription className="mb-4">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="absolute top-0 right-10 h-64 w-64 hover:scale-120 opacity-60 transition-transform overflow-hidden">
                    <DotsStructure />
                    {/*   <TechSphere line={index} />
                     */}{" "}
                  </div>
                </Card>
              </motion.div>
            );
          })}
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
