import state from '../state'
import { theme, base, xs, sm, md, lg } from './base'
import { useResponsiveState } from './responsive'

function getResponsiveStyle(selector, withReact = true) {
  const responsive = withReact
    ? state.withReact.getResponsive()
    : state.getResponsive()
  
  switch (responsive) {
    case 'xs': return { ...(xs[selector] || {}) }
    case 'sm': return { ...(sm[selector] || {}) }
    case 'md': return { ...(md[selector] || {}) }
    case 'lg': return { ...(lg[selector] || {}) }
  }

  return { ...(base[selector] || {}) }
}

function getResponsiveStyles(selectors, withReact = true) {
  const styles = {}
  for (const selector of selectors) {
    styles[selector] = getResponsiveStyle(selector, withReact)
  }
  return styles
}

export {
  theme, base, xs, sm, md, lg,
  getResponsiveStyle, 
  getResponsiveStyles, 
  useResponsiveState 
}