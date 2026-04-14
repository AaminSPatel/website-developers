"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectDetails } from "../../app/data/Projects";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Badge } from "@/components/ui";

export function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const projects = projectDetails;

  // Requirement: Loop Logic (Infinite Swipe)
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    const velocityThreshold = 500;

    if (
      info.offset.x < -swipeThreshold ||
      info.velocity.x < -velocityThreshold
    ) {
      // Go Forward or Loop to start
      setIndex((prev) => (prev + 1) % projects.length);
    } else if (
      info.offset.x > swipeThreshold ||
      info.velocity.x > velocityThreshold
    ) {
      // Go Backward or Loop to end
      setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden min-h-[800px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center w-full">
        <div className="spacing-y-2 flex flex-col lg:hidden">
          <Badge className="w-fit bg-blue-100 text-blue-600 border-none px-4 py-1 text-sm">
            Our Portfolio
          </Badge>
          <h2 className="text-4xl mt-4 md:text-6xl font-bold text-gray-900 leading-tight">
            Crafting Digital <br />
            <span className="text-blue-600">Experiences</span> That Matter.
          </h2>
        </div>
        {/* LEFT SIDE: Text Content (Hidden on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden lg:flex flex-col space-y-6"
        >
          <Badge className="w-fit bg-blue-100 text-blue-600 border-none px-4 py-1 text-sm">
            Our Portfolio
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Crafting Digital <br />
            <span className="text-blue-600">Experiences</span> That Matter.
          </h2>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            We don't just build websites; we create digital assets that solve
            real business problems. Explore our featured projects and see how
            we've helped brands grow globally with cutting-edge Next.js
            solutions.
          </p>
          <div className="pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all font-medium"
            >
              Explore All Projects <FaArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Loop Carousel */}
        <div className="relative md:-ml-28 mb-4 w-full h-[550px] flex items-center justify-center lg:justify-end">
          {/* Carousel Base Wrapper */}
          <div className="relative w-[300px] h-[450px] md:w-[360px] md:h-[500px] touch-none">
            <AnimatePresence initial={false}>
              {projects.map((project, i) => {
                // Infinite Loop Distance Calculation
                let diff = i - index;

                // Adjust diff for infinite loop wrap-around
                if (diff > projects.length / 2) diff -= projects.length;
                if (diff < -projects.length / 2) diff += projects.length;

                // Show 3 slides on each side
                if (Math.abs(diff) > 3) return null;

                const isCenter = diff === 0;
                const isLeft = diff < 0;
                const isRight = diff > 0;

                let x = 0;
                let scale = 1;
                let zIndex = 50 - Math.abs(diff);
                let brightness = 100;
                let opacity = 1;

                if (isCenter) {
                  x = 0;
                  scale = 1;
                  brightness = 100;
                } else if (isLeft) {
                  x = `${-25 + (diff + 1) * 15}%`;
                  scale = 1 - Math.abs(diff) * 0.1;
                  brightness = 85 - Math.abs(diff) * 20;
                } else if (isRight) {
                  x = `${25 + (diff - 1) * 15}%`;
                  scale = 1 - diff * 0.1;
                  brightness = 85 - diff * 20;
                }

                return (
                  <motion.div
                    key={`${project.slug}-${i}`}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    // Is logic ko update karein
                    animate={{
                      x,
                      scale,
                      zIndex, // Yeh dynamic rahega
                      opacity,
                      filter: `brightness(${brightness}%)`,
                    }}
                    // Transition me ye line add karein
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      // zIndex ko bina delay ke turant change karne ke liye:
                      x: { duration: 0 },
                    }}
                    // Drag ke waqt card hamesha sabse upar rahe
                    whileDrag={{ zIndex: 100 }}
                    className="absolute three-d-box-white inset-0 cursor-grab active:cursor-grabbing select-none rounded-[2.5rem] shadow-2xl border border-gray-100"
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="relative w-full h-full rounded-[2.5rem overflow-hidden bg-white"
                      style={{
                        contain: "layout paint",
                        overflow: "hidden !important",
                      }}
                    >
                      {/* Image for Stacked Cards */}
                      {!isCenter && (
                        <Image
                          src={project.images[0]}
                          alt={project.headline}
                          fill
                          className="object-cover pointer-events-none"
                        />
                      )}

                      {/* Active Center Card UI */}
                      {isCenter && (
                        <div
                          className="h-full w-full flex flex-col border border-border  shadow-sm"
                          style={{
                            borderRadius: "0px",
                            overflow: "hidden !important",
                          }}
                        >
                          <div className="relative h-64 overflow-hidden py-2">
                            <Image
                              src={project.images[0]}
                              alt={project.headline}
                              fill
                              className="w-full h-full  pointer-events-none object-contain scale-105"
                            />
                          </div>

                          <div className="flex-1 flex flex-col p-4 md:p-6 pt-0  md:px-8 pb-10 relative">
                            <h3 className="mb-2 text-xl md:text-2xl font-bold text-gray-900 line-clamp-2">
                              {project?.headline}
                            </h3>

                            <p className="mb-4 flex-1 line-clamp-3 text-gray-500 text-base">
                              {project?.problem}
                            </p>

                            <div className="flex flex-wrap gap-2 ">
                              {project?.results
                                .slice(0, 3)
                                .map((result, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="secondary"
                                    className="text-[10px] bg-blue-50 text-blue-600 border-none font-medium"
                                  >
                                    {result}
                                  </Badge>
                                ))}
                            </div>
                          </div>

                          {/* Circular Button - Now outside the overflow-hidden area */}
                          <div className="absolute bottom-4 right-4 z-50">
                            <Link
                              href={`/projects/${project.slug}`}
                              className="h-14 w-14 bg-blue-600 text-white flex items-center justify-center rounded-full hover:scale-110 transition-transform shadow-lg shadow-blue-200"
                            >
                              <FaArrowRight size={20} />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Pagination for Mobile Only */}
          <div className="absolute bottom-0 lg:hidden flex gap-2">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all ${i === index ? "w-6 bg-blue-600" : "w-1.5 bg-gray-200"}`}
              />
            ))}
          </div>
        </div>
        <div className="block lg:hidden mt-4">
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            We don't just build websites; we create digital assets that solve
            real business problems. Explore our featured projects and see how
            we've helped brands grow globally with cutting-edge Next.js
            solutions.
          </p>
          <div className="pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all font-medium"
            >
              Explore All Projects <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
