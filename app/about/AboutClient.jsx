"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

  const values = [
    {
      title: "Excellence",
      description:
        "We deliver high-quality solutions that exceed expectations.",
    },
    {
      title: "Innovation",
      description: "We stay ahead of trends and use cutting-edge technologies.",
    },
    {
      title: "Client-First",
      description: "Your success is our success. We prioritize your goals.",
    },
    {
      title: "Transparency",
      description: "Clear communication and honest collaboration throughout.",
    },
    {
      title: "Reliability",
      description: "You can count on us to deliver on time and on budget.",
    },
    {
      title: "Scalability",
      description: "Solutions built to grow with your business.",
    },
  ];

  const team = [
    {
      name: "Aamin",
      profilePic:'/profile.png',
      role: "Lead Developer",
      expertise: "Full-Stack Development",
    },
    { name: "Shubham",
      profilePic:'/shubh.jpeg', 
      role: "Design Lead", 
      expertise: "UI/UX Design" },
    {
      name: "Kuldeep",
      profilePic:'/kuldeep.png',
      role: "SEO Expert",
      expertise: "SEO & Marketing",
    },
    /* {
      name: "Emma Project Manager",
      role: "PM",
      expertise: "Project Management",
    }, */
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground">
            We're a team of passionate developers and designers dedicated to
            creating exceptional digital experiences.
          </p>
        </motion.div>
        <section className="absolute opacity-60 top-0 left-0  h-[70vh] w-full">
          <TechGrid />
        </section>
        <section className="absolute z-0 opacity-60 top-0 left-0  h-[30vh] w-full">
          <DotsStructure />
        </section>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Founded in 2023, Website Developers began with a simple mission:
              to help businesses succeed online. What started as a small team of
              passionate developers has grown into a full-service web
              development agency.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Over the years, we've had the privilege of working with startups,
              small businesses, and enterprises across various industries. Each
              project has taught us something new and helped us refine our
              processes and expertise.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we're committed to helping growth-focused businesses
              leverage technology to achieve their goals and stay ahead of the
              competition.
            </p>
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
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do
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
                <Card variant="elevated">
                  <CardContent className="pt-6">
                    <CardTitle className="mb-2">{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
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
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the talented people behind your success
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card variant="elevated" className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 bg-primary/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <img src={member.profilePic} alt={member.name + member.role + member.expertise}
                      className="w-28 h-24 rounded-2xl" />
                    </div>
                    <CardTitle className="mb-1">{member.name}</CardTitle>
                    <p className="text-sm font-medium text-primary mb-2">
                      {member.role}
                    </p>
                    <Badge variant="secondary" className="text-xs">
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
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <p className="text-5xl font-bold mb-2">3+</p>
              <p className="opacity-80">Years in Business</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-5xl font-bold mb-2">8+</p>
              <p className="opacity-80">Projects Delivered</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-5xl font-bold mb-2">5+</p>
              <p className="opacity-80">Happy Clients</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-5xl font-bold mb-2">₹50K+</p>
              <p className="opacity-80">Revenue Influenced</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help bring your vision to life.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="group">
                Get in Touch
                <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
