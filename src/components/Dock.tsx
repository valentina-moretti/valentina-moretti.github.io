import { Github, Home, Linkedin, Moon, Sun, Twitter } from 'lucide-react'
import { useMemo, useState } from 'react'

import { cn } from '../lib/cn'
import { applyTheme, getStoredTheme, type ThemeMode } from '../lib/theme'

export function Dock({
  github,
  linkedin,
  x,
}: {
  github?: string
  linkedin?: string
  x?: string
}) {
  const [theme, setTheme] = useState<ThemeMode>(() =>
    typeof window === 'undefined' ? 'light' : getStoredTheme(),
  )

  const ThemeIcon = useMemo(() => (theme === 'dark' ? Sun : Moon), [theme])

  return (
    <div className="fixed inset-x-0 bottom-6 flex justify-center">
      <div className="flex items-center gap-1 rounded-3xl border bg-background/80 px-2 py-2 backdrop-blur">
        <DockButton href="#hero" ariaLabel="Home">
          <Home className="size-4" />
        </DockButton>
        {github ? (
          <DockButton href={github} ariaLabel="GitHub" external>
            <Github className="size-4" />
          </DockButton>
        ) : null}
        {linkedin ? (
          <DockButton href={linkedin} ariaLabel="LinkedIn" external>
            <Linkedin className="size-4" />
          </DockButton>
        ) : null}

        {x ? (
          <DockButton href={x} ariaLabel="X" external>
            <Twitter className="size-4" />
          </DockButton>
        ) : null}

        <button
          type="button"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-3xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
          )}
          aria-label="Toggle theme"
          onClick={() => {
            const next: ThemeMode = theme === 'dark' ? 'light' : 'dark'
            setTheme(next)
            applyTheme(next)
          }}
        >
          <ThemeIcon className="size-4" />
        </button>
      </div>
    </div>
  )
}

function DockButton({
  href,
  ariaLabel,
  external,
  children,
}: {
  href: string
  ariaLabel: string
  external?: boolean
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      aria-label={ariaLabel}
      className="inline-flex h-9 w-9 items-center justify-center rounded-3xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {children}
    </a>
  )
}
