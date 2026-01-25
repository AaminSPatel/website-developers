export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) {
  const baseStyles = 'font-semibold transition-all duration-300 rounded-lg inline-flex items-center justify-center cursor-pointer'
  
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90 active:scale-95',
    secondary: 'bg-secondary text-secondary-foreground hover:opacity-90 active:scale-95',
    outline: 'border-2 border-primary text-primary hover:bg-primary/70 hover:text-primary-foreground',
    ghost: 'text-foreground hover:bg-muted',
    destructive: 'bg-destructive text-destructive-foreground hover:opacity-90'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
