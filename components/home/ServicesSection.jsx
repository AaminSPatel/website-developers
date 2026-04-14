"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
// Lucide icons popular aur clean hain
import { Code2, Smartphone, Megaphone } from "lucide-react";
import { motion } from 'framer-motion'

export function ServicesSection() {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    const sampleServices = [
      { 
        id: 1, 
        title: 'Web Dev', 
        description: 'Custom web solutions', 
        icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" /> 
      },
      { 
        id: 2, 
        title: 'App Dev', 
        description: 'Cross-platform apps', 
        icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" /> 
      },
      { 
        id: 3, 
        title: 'Marketing', 
        description: 'Grow online presence', 
        icon: <Megaphone className="w-5 h-5 md:w-6 md:h-6" /> 
      }
    ];
    setServices(sampleServices);
  }, []);

  
  const containerVariants = {
    hidden: { opacity: 0.5, y:40},
    visible: { 
      opacity: 1, 
      y:0,x:0,
      transition: { staggerChildren: 0.6, delayChildren: 0.3 } 
    }
  }
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Our Services</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional solutions for <span className="text-primary font-medium">Modern Businesses</span>.
          </p>
        </div>

        {/* Grid for 3 items in one row on mobile */}
        <div className="grid grid-cols-3 gap-2 md:gap-8">
          {services.slice(0, 3).map((service,i) => (
            <motion.div
            variants={containerVariants}
          initial={i===0?{x:-30, opacity:0.8}:i===1?{y:30, opacity:0.7}:{x:30, opacity:0.7}}
          whileInView="visible"
          viewport={{ once: false }}
            key={service.id} className="three-d-box-white min-h-26 overflow-hidden">
              <div className="h-full flex flex-col p-3 md:p-8 text-center md:text-left items-center md:items-start">
                <div className="mb-2 md:mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-primary/10 text-primary rounded-xl transition-colors">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-[14px] md:text-xl font-bold text-foreground leading-tight">
                  {service.title}
                </h3>
                
                {/* Description sirf desktop par dikhegi taaki mobile par layout kharab na ho */}
                <p className="hidden md:block mt-3 text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Niche wala bada section */}
         <motion.div
            transition={{duration:0.3}}
          initial={{y:30, opacity:0.6,scale:0.7}}
          whileInView={{y:0,opacity:1, scale:1}}
          viewport={{ once: false }} className="three-d-box-orange mt-10 md:mt-16 bg-background rounded-2xl p-6 md:p-10 border border-border/50">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Specialized Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="font-bold text-primary text-lg">Travel Industry</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Automated booking systems and high-performance travel portals. Check our 
                <Link href="/projects" className="ml-1 text-primary hover:underline">case studies</Link>.
              </p>
            </div>
            <div className="space-y-2 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8">
              <h4 className="font-bold text-primary text-lg">Business Growth</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                SEO-optimized websites designed to convert local traffic into loyal customers.
              </p>
            </div>
          </div>
      </motion.div>
        </div>
    </section>
  );
}