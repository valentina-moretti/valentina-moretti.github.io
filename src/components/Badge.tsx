import { cn } from '../lib/cn'

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}
