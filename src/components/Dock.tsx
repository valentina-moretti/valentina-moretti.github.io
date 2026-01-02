import {
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Moon,
  Sun,
  Twitter,
} from 'lucide-react'
import { useMemo, useState } from 'react'

import { FloatingDock } from './ui/floating-dock'
import { applyTheme, getStoredTheme, type ThemeMode } from '../lib/theme'

export function Dock({
  github,
  linkedin,
  scholar,
  x,
}: {
  github?: string
  linkedin?: string
  scholar?: string
  x?: string
}) {
  const [theme, setTheme] = useState<ThemeMode>(() =>
    typeof window === 'undefined' ? 'dark' : getStoredTheme(),
  )

  const ThemeIcon = useMemo(() => (theme === 'dark' ? Sun : Moon), [theme])

  const items = useMemo(
    () =>
      [
        {
          title: 'Home',
          href: '#hero',
          icon: <Home className="h-full w-full" />,
        },
        github
          ? {
              title: 'GitHub',
              href: github,
              external: true,
              icon: <Github className="h-full w-full" />,
            }
          : null,
        linkedin
          ? {
              title: 'LinkedIn',
              href: linkedin,
              external: true,
              icon: <Linkedin className="h-full w-full" />,
            }
          : null,
        scholar
          ? {
              title: 'Google Scholar',
              href: scholar,
              external: true,
              icon: <GraduationCap className="h-full w-full" />,
            }
          : null,
        x
          ? {
              title: 'X',
              href: x,
              external: true,
              icon: <Twitter className="h-full w-full" />,
            }
          : null,
        {
          title: 'Toggle theme',
          onClick: () => {
            const next: ThemeMode = theme === 'dark' ? 'light' : 'dark'
            setTheme(next)
            applyTheme(next)
          },
          icon: <ThemeIcon className="h-full w-full" />,
        },
      ].filter(Boolean) as Array<{
        title: string
        icon: React.ReactNode
        href?: string
        external?: boolean
        onClick?: () => void
      }>,
    [ThemeIcon, github, linkedin, scholar, theme, x],
  )

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center">
      <FloatingDock
        items={items}
        direction="horizontal"
        desktopClassName=""
        mobileClassName=""
      />
    </div>
  )
}
