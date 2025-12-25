export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'theme'

export function getStoredTheme(): ThemeMode {
  const value = localStorage.getItem(STORAGE_KEY)
  return value === 'dark' ? 'dark' : 'light'
}

export function applyTheme(theme: ThemeMode) {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
  root.style.colorScheme = theme
  localStorage.setItem(STORAGE_KEY, theme)
}
