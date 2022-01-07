import {useEffect} from 'react'

export function checkForDarkMode() {
  useEffect(() => {
    let darkMode = window.matchMedia('(prefers-color-scheme: dark)')
    if (darkMode.matches) {
      return true
    }
    return false
  }, [])
}
