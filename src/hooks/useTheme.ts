import { useState, useEffect } from 'react'

// Initialize theme before React renders
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  const htmlElement = document.documentElement
  
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark')
    return true
  } else {
    htmlElement.classList.remove('dark')
    return false
  }
}

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState<boolean>(initializeTheme)

  useEffect(() => {
    const htmlElement = document.documentElement
    
    if (darkMode) {
      htmlElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      htmlElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return { darkMode, setDarkMode }
}
