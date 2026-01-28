"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  Button,
  Badge,
} from "@/components/ui";
import Link from "next/link";
import * as Icons from "react-icons/md";
import { useEffect, useState } from "react";
import { useSiteContext } from "../context/SiteContext";
import TechGrid from "../../components/TechGrid";
import DotsStructure from "../../components/DotsStructure";
import { FaLaptopCode, FaRocket, FaSearchDollar } from "react-icons/fa";

export function ServicesClient() {
  const [services, setServices] = useState([]);
  const siteData = useSiteContext();
  
  useEffect(() => {
    if (siteData?.services) {
        setServices(siteData.services);
    }
  }, [siteData]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const industries = [
    {
      title: "Travel & Tourism",
      desc: "For Travel Agencies in Delhi, Mumbai & Himachal. We build booking engines, itinerary showcases, and photo-heavy galleries that load instantly.",
      icon: Icons.MdFlightTakeoff
    },
    {
      title: "Small Business & Startups",
      desc: "Local SEO-focused websites for clinics, restaurants, and shops in Indore & Pune. Get discovered by customers in your area.",
      icon: Icons.MdStorefront
    },
    {
      title: "Freelancers & Consultants",
      desc: "Personal portfolio websites for photographers, writers, and coaches. Establish your personal brand with a premium digital presence.",
      icon: Icons.MdPerson
    }
  ];

  return (
    <div>
      {/* Hero Section - Keyword Rich */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional <span className="text-primary">Web Development Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We build more than just websites. We create digital assets for <strong>Small Businesses, Travel Agencies, and Freelancers</strong> across India that drive real growth and revenue.
          </p>
        </motion.div>

        <section className="absolute z-0 opacity-60 top-0 left-0 h-[70vh] w-full">
          <TechGrid />
        </section>
      </section>

      {/* NEW SECTION: The "Why Custom" Argument (SEO Text) */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6">Why Your Business Needs a Custom Website?</h2>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            In the crowded Indian digital market, a generic template isn't enough. You need a website that loads fast, ranks on Google, and converts visitors into customers.
                        </p>
                        <p>
                            Unlike drag-and-drop builders (Wix/Wordpress), our <strong>Next.js & React development</strong> ensures your site is:
                        </p>
                        <ul className="grid grid-cols-1 gap-2 mt-4">
                            <li className="flex items-center gap-2"><Icons.MdCheckCircle className="text-primary"/> <strong>Lightning Fast:</strong> Passes Core Web Vitals.</li>
                            <li className="flex items-center gap-2"><Icons.MdCheckCircle className="text-primary"/> <strong>SEO Native:</strong> Built for Google's algorithms.</li>
                            <li className="flex items-center gap-2"><Icons.MdCheckCircle className="text-primary"/> <strong>Secure:</strong> No plugin vulnerabilities.</li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="bg-muted/30 p-8 rounded-2xl border border-border"
                >
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex gap-4">
                            <div className="bg-primary/10 p-3 h-fit rounded-lg text-primary"><FaRocket size={24}/></div>
                            <div>
                                <h3 className="font-bold text-xl">Performance First</h3>
                                <p className="text-sm text-muted-foreground">We optimize every line of code so your users never wait.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-primary/10 p-3 h-fit rounded-lg text-primary"><FaSearchDollar size={24}/></div>
                            <div>
                                <h3 className="font-bold text-xl">ROI Focused</h3>
                                <p className="text-sm text-muted-foreground">Designed to capture leads and increase sales inquiry.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-primary/10 p-3 h-fit rounded-lg text-primary"><FaLaptopCode size={24}/></div>
                            <div>
                                <h3 className="font-bold text-xl">Mobile Responsive</h3>
                                <p className="text-sm text-muted-foreground">Perfect experience on Phones, Tablets, and Desktops.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Services Grid (Existing Data) */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Development Services</h2>
                <p className="text-muted-foreground">Everything you need to succeed online</p>
            </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => {
              const IconComponent = Icons[service.icon];
              return (
                <motion.div key={service.id}>
                  <Card
                    variant="elevated"
                    className="h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 border-border/50"
                  >
                    <CardContent className="pt-8 px-8 pb-8 flex-1 flex flex-col">
                      <div className="mb-6">
                        {IconComponent && (
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 text-primary">
                            <IconComponent size={32} />
                          </div>
                        )}
                      </div>
                      <CardTitle className="mb-3 text-2xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="mb-6 text-base flex-1">
                        {service.description}
                      </CardDescription>
                      <div className="space-y-3 pt-6 border-t border-border mt-auto">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Icons.MdCheck className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
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

      {/* NEW SECTION: Industry Solutions (Targeting specific Niches) */}
      <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <Badge variant="outline" className="mb-4">Specialized Expertise</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                      We understand the specific challenges of your industry. Whether you are a Travel Agent needing booking forms or a Freelancer needing a portfolio.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {industries.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        className="p-6 rounded-2xl border border-border bg-muted/10 hover:bg-muted/30 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                          <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-sm mb-4 text-primary">
                              <item.icon size={24} />
                          </div>
                          <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                              {item.desc}
                          </p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary/5 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Start Your Digital Journey</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't settle for a slow website. Get a custom solution tailored for your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                <Button size="lg" variant="primary" className='px-8 py-6 text-lg shadow-lg hover:shadow-primary/25'>
                    Get a Free Quote
                </Button>
                </Link>
                <Link href="/projects">
                <Button size="lg" variant="outline" className='px-8 py-6 text-lg'>
                    View Our Work
                </Button>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}