export function Card({ children, className = '', variant = 'default', ...props }) {
  const variants = {
    default: 'bg-card border border-border rounded-lg shadow-sm',
    elevated: 'bg-card border border-border rounded-lg shadow-lg hover:shadow-xl transition-shadow',
    ghost: 'bg-transparent border-0'
  }

  return (
    <div className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return <div className={`p-6 border-b border-border ${className}`}>{children}</div>
}

export function CardTitle({ children, className = '' }) {
  return <h3 className={`text-2xl font-bold text-foreground ${className}`}>{children}</h3>
}

export function CardDescription({ children, className = '' }) {
  return <p className={`text-muted-foreground mt-1 ${className}`}>{children}</p>
}

export function CardContent({ children, className = '' }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }) {
  return <div className={`p-6 border-t border-border flex gap-4 ${className}`}>{children}</div>
}
