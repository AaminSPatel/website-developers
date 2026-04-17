'use client'

import { useEffect } from 'react'

export default function CounterDev() {
  useEffect(() => {
    // Remove existing script if any to avoid duplicates
    const existingScript = document.getElementById('counter-dev-script')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and load counter.dev script
    const script = document.createElement('script')
    script.id = 'counter-dev-script'
    script.src = 'https://cdn.counter.dev/script.js'
    script.async = true
    script.setAttribute('data-id', '95795ebe-d6a8-4887-abef-7dbb03a06eb2')
    script.setAttribute('data-utcoffset', '5.5')
    // Optional: data-host="counter.dev" data-theme="light"

    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div 
      id="counter"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 text-xs md:text-sm bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-1.5 shadow-lg select-none pointer-events-none dark:bg-black/80 dark:border-gray-700"
      aria-label="Visitor counter"
    />
  )
}

