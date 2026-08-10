"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/siteData";

const industries = ["All", ...new Set(projects.map((p) => p.industry))];

export default function PortfolioClient() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.industry === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Websites built for real businesses, not case-study filler."
        description="Five projects. Five industries. Every one built after understanding how the business actually works."
      />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === ind
                  ? "bg-[#111111] text-white"
                  : "bg-white border border-[#e7e7e7] text-[#666666] hover:border-[#2563EB] hover:text-[#2563EB]"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          {filtered.length > 0 ? (
            <ProjectsShowcase key={filter} limit={filtered.length} projectsOverride={filtered} />
          ) : (
            <p className="text-center text-[#666666]">No projects in this category yet.</p>
          )}
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <CTASection
          title="Want your business featured here next?"
          description="Let's talk about what a website built specifically for your business could look like."
        />
      </section>
    </>
  );
}
