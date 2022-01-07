import {useEffect, useState} from 'react'

export function useClickOutside(ref, handler) {
  const [state, setState] = useState(false)
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      setState(true)
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
  return state
}
