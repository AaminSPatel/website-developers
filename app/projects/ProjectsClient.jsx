"use client";

import { useEffect, useState } from "react";
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
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdLink } from "react-icons/md";
import TechGrid from "../../components/TechGrid";
import { projectDetails } from "../data/Projects";
import DotsStructure from "../../components/DotsStructure";

export function ProjectsClient() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectDetails);
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-muted-foreground">
            Real business results from our successful client partnerships
          </p>
        </motion.div>
 <section className="absolute z-0 opacity-60  sm:top-0 left-0  h-[70vh] w-full">
          <TechGrid />
        </section>
        <section className="absolute z-0 opacity-60 top-0 left-0  h-[30vh] w-full">
        <DotsStructure />
        </section> 
       
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            /*   initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={selectedCategory}
           */
          >
            {projects.map((project) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <Card
                  variant="elevated"
                  className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="flex items-center justify-center h-full">

                       <div className="relative h-full">
                          <Image
                            src={project.images[0]}
                            alt={`${project.headline} - Image`}
                            width={400}
                            height={300}
                            className="w-full h-full object-contain hover:scale-110 scale-105 transition duration-500 hover:rotate-y-12"
                            style={{ aspectRatio: '4/3' }}
                          />
                        </div>
                    </div>
                  </div>
                  <CardContent className="flex-1 flex flex-col pt-6">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2">
                        {project.industry}
                      </Badge>
                    </div>
                    <CardTitle className="mb-2 text-xl">
                      {project.headline}
                    </CardTitle>
                    <CardDescription className="mb-4 flex-1">
                      {project.problem.substring(0, 120) + "..."}
                    </CardDescription>

                    {/* Key Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-2 text-foreground">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <span className="text-primary mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="w-full">
                      <Button variant="primary" className="w-full group">
                        View Case Study <FaAngleDoubleRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Impressed by Our Work?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create something amazing together. Get in touch with our
              team.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
