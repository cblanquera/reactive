import { useEffect } from 'react'
import state from '../state'

const sizes = {
  xs: '(max-width: 640px)',
  sm: '(min-width: 641px) and (max-width: 768px)',
  md: '(min-width: 769px) and (max-width: 1024px)',
  lg: '(min-width: 1025px)'
}

export function useResponsiveState() {
  const dispatch = state.withReact.dispatch()
  useEffect(() => {
    for (const size in sizes) {
      const mediaQuery = window.matchMedia(sizes[size])
      const handler = (event) => {
        if (event.matches) {
          dispatch.setResponsive(size)
        }
      }
      mediaQuery.addEventListener('change', handler)
      if (mediaQuery.matches) {
        dispatch.setResponsive(size)
      }
    }
  })
}