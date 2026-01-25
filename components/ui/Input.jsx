export function Input({ 
  className = '', 
  type = 'text',
  placeholder,
  ...props 
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full px-4 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${className}`}
      {...props}
    />
  )
}

export function Textarea({ 
  className = '', 
  placeholder,
  rows = 4,
  ...props 
}) {
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className={`w-full px-4 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${className}`}
      {...props}
    />
  )
}

export function Select({
  className = '',
  children,
  ...props
}) {
  return (
    <select
      className={`w-full px-4 py-2.5 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}
