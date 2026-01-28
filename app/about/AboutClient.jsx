"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  Badge,
  Button,
} from "@/components/ui";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import TechGrid from "../../components/TechGrid";
import DotsStructure from "../../components/DotsStructure";

export function AboutClient() {
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

  // Values updated with specific Tech & Business keywords
  const values = [
    {
      title: "Technical Excellence",
      description:
        "We don't use old templates. We build custom, fast-loading sites using Next.js & React.",
    },
    {
      title: "Business-Centric Innovation",
      description: "We focus on features that bring sales, like WhatsApp integration and SEO structures.",
    },
    {
      title: "Small Business Focus",
      description: "We understand budget constraints and offer premium quality at affordable freelance rates.",
    },
    {
      title: "100% Transparency",
      description: "No hidden costs. Whether you are in Mumbai or Indore, you get clear pricing upfront.",
    },
    {
      title: "Reliability & Speed",
      description: "We respect deadlines. Most small business websites are delivered within 7-10 days.",
    },
    {
      title: "Long-Term Growth",
      description: "Our websites are scalable. Start small, and grow your digital presence as you earn.",
    },
  ];

  const team = [
    {
      name: "Aamin",
      profilePic: '/profile.png',
      role: "Lead Developer",
      expertise: "Full-Stack & Next.js",
    },
    { 
      name: "Shubham",
      profilePic: '/shubh.jpeg', 
      role: "Design Lead", 
      expertise: "UI/UX & Branding" 
    },
    {
      name: "Kuldeep",
      profilePic: '/kuldeep.png',
      role: "SEO Strategist",
      expertise: "Local SEO & Marketing",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <motion.div
          className="max-w-4xl z-30 mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* H1 Optimized for broad search */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expert Web Development Team in <span className="text-primary">India</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Bridging the gap between affordable freelance rates and premium agency quality for businesses worldwide.
          </p>
        </motion.div>
        <section className="absolute opacity-60 top-0 left-0 h-[70vh] w-full">
          <TechGrid />
        </section>
     
      </section>

      {/* Our Story - Mixing Local Roots with National Reach */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey: From Indore to India</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2023, our journey began in the historic cities of <strong>Indore and Ujjain</strong> with a simple mission: to make high-quality web development accessible to small businesses. We noticed that local businesses were often stuck with slow, outdated websites that didn't generate leads.
              </p>
              <p>
                What started as a passion for coding has grown into a specialized <strong>Freelance Web Development Agency</strong>. Today, while we stay true to our roots in Madhya Pradesh, we proudly serve a diverse clientele—from <strong>Travel Agencies in Delhi</strong> needing complex booking engines to <strong>Startups in Bangalore</strong> looking for modern Next.js portfolios.
              </p>
              <p>
                We believe you don't need a massive budget to have a world-class website. By keeping our operations lean and remote, we deliver <strong>Mumbai-agency quality work</strong> at a fraction of the cost, helping you dominate your local market.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Clients Choose Us?</h2>
            <p className="text-lg text-muted-foreground">
              Our core principles that drive digital success
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card variant="elevated" className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <CardTitle className="mb-3 text-xl">{value.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Experts</h2>
            <p className="text-lg text-muted-foreground">
              A dedicated team of developers and SEO specialists working for your growth
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card variant="elevated" className="text-center hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                      <img 
                        src={member.profilePic} 
                        alt={`${member.name} - ${member.role} based in Indore`}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <CardTitle className="mb-2 text-xl">{member.name}</CardTitle>
                    <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                      {member.role}
                    </p>
                    <Badge variant="secondary" className="px-3 py-1">
                      {member.expertise}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <p className="text-4xl md:text-5xl font-bold mb-2">3+</p>
              <p className="opacity-90 text-sm md:text-base">Years Experience</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-4xl md:text-5xl font-bold mb-2">10+</p>
              <p className="opacity-90 text-sm md:text-base">Websites Launched</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-4xl md:text-5xl font-bold mb-2">100%</p>
              <p className="opacity-90 text-sm md:text-base">Client Satisfaction</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-4xl md:text-5xl font-bold mb-2">24/7</p>
              <p className="opacity-90 text-sm md:text-base">Support Available</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Grow Your Business Online</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need a simple portfolio or a complex travel website, we are ready to build it.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="default" className="group px-8 py-6 text-lg">
                Start Your Project
                <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}