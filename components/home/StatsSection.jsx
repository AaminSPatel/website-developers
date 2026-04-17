'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  
  const stats = [
    { value: 70, suffix: '%', label: 'Increase in Leads', color: 'from-blue-500 to-cyan-500' },
    { value: 300, suffix: '+', label: 'Projects Delivered', color: 'from-purple-500 to-pink-500' },
    { value: 95, suffix: '%', label: 'Client Satisfaction', color: 'from-green-500 to-emerald-500' },
    { value: 24, suffix: '/7', label: 'Support Available', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Impact in <span className="text-primary">Numbers</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} inView={inView} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, inView, delay }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const increment = stat.value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          setCount(stat.value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }
  }, [inView, stat.value])
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
           style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
      
      <div className="relative bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 text-center">
        <motion.div
          className={`text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
          animate={{ scale: inView ? [1, 1.1, 1] : 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
        >
          {count}{stat.suffix}
        </motion.div>
        <div className="text-muted-foreground font-medium">{stat.label}</div>
        
        {/* Animated ring */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-primary/20"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>
    </motion.div>
  )
}