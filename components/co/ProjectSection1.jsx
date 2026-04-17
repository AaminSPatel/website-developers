'use client'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function ProjectsSection() {
  const projects = [
    { id: 1, title: 'Travel Portal', image: '/project1.jpg', category: 'Web App' },
    { id: 2, title: 'E-Commerce Store', image: '/project2.jpg', category: 'E-Commerce' },
    { id: 3, title: 'Portfolio Site', image: '/project3.jpg', category: 'Portfolio' },
    // Add more projects
  ]

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Marquee */}
        <div className="flex gap-6 animate-scroll">
          {[...projects, ...projects].map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="relative flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden group cursor-pointer"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-primary text-sm font-medium mb-2 block">
          {project.category}
        </span>
        <h3 className="text-white text-xl font-bold">{project.title}</h3>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="mt-4"
        >
          <span className="inline-flex items-center text-white text-sm">
            View Project 
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}