import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import thunk from 'redux-thunk'

import Screen from './Screen'
import { 
  getResponsiveStyle, 
  getResponsiveStyles, 
  useResponsiveState 
} from './styles'

const initialState = { 
  menu: {
    show: false,
    items: []
  }, 
  panel: {
    current: null,
    screens: []
  }, 
  responsive: 'xs',
  crumbs: []
}

const actions = {
  ADD_SCREEN: (state, screen) => ({
    ...state,
    panel: {
      ...state.panel,
      screens: state.panel.screens.concat([ screen ])
    }
  }),
  REMOVE_SCREEN: (state) => ({
    ...state,
    panel: {
      ...state.panel,
      screens: state.panel.screens.slice(0, -1)
    }
  }),
  TOGGLE_MENU: (state) => ({ 
    ...state, 
    menu: {
      ...state.menu,
      show: !state.menu.show
    } 
  }),
  UPDATE_MENU: (state, items) => ({ 
    ...state, 
    menu: {
      ...state.menu,
      items: items
    } 
  }),
  SET_CRUMBS: (state, crumbs) => ({ 
    ...state, 
    crumbs: crumbs
  }),
  SET_PANEL: (state, current) => ({ 
    ...state, 
    panel: {
      ...state.panel,
      current: current
    }
  }),
  RESPONSIVE: (state, responsive) => ({ 
    ...state, 
    responsive
  })
}

let key = 0
const handlers = {
  addScreen(src, body) {
    const { panel } = state.store.getState()
    panel.current.style.right = 0
    return { 
      type: 'ADD_SCREEN', 
      payload: (
        <Screen src={src} key={++key}>
          {body}
        </Screen>
      )
   }
  },
  
  removeScreen() {
    return (dispatch) => {
      const { panel, responsive } = state.store.getState()
      const { current, screens } = panel
      if (screens.length > 1) {
        const scrollTo = (screens.length - 2) * current.clientWidth
        const remove = () => {
          if (current.scrollLeft == scrollTo) {
            dispatch({ type: 'REMOVE_SCREEN' })
            current.removeEventListener('scroll', remove, true)
          }
        }
        current.addEventListener('scroll', remove, true)
        current.scrollLeft = scrollTo
      } else {
        const remove = () => {
          dispatch({ type: 'REMOVE_SCREEN' })
          current.removeEventListener('transitionend', remove, true)
        }
        current.addEventListener('transitionend', remove, true)
        current.style.right = responsive === 'xs'? '-100%': (-550) + 'px'
      }
    }
  },
  
  toggleMenu() {
    return { type: 'TOGGLE_MENU' }
  },
  
  updateMenu(menu) {
    return { type: 'UPDATE_MENU', payload: menu }
  },
  
  setCrumbs(crumbs) {
    if (!Array.isArray(crumbs)) {
      crumbs = [ crumbs ]
    }
    return { type: 'SET_CRUMBS', payload: crumbs }
  },
  
  setPanel(panel) {
    //ex. 1 screen = 0 * width
    //ex. 2 screen = 1 * width
    //    ...
    const screens = state.store.getState().panel.screens
    if (screens.length > 1) {
      panel.scrollLeft = (screens.length - 1) * panel.clientWidth
    } else {
      panel.scrollLeft = 0
    }
    return { type: 'SET_PANEL', payload: panel }
  },

  setResponsive(size) {
    return { type: 'RESPONSIVE', payload: size }
  }
}

const views = {
  showMenu(state) {
    return state.menu.show
  },
  getCrumbs(state) {
    return state.crumbs
  },
  getMenuItems(state) {
    return state.menu.items
  },
  getPanel(state) {
    return state.panel.current
  },
  getScreens(state) {
    return state.panel.screens
  },
  getResponsive(state) {
    return state.responsive
  }
}

function reducer(state = initialState, { type, payload }) {
  if (typeof actions[type] === 'function') {
    return actions[type](state, payload)
  }

  return state
}

class State {
  constructor() {
    this.withReact = new ReactState(this)
    this.store = createStore(reducer, applyMiddleware(thunk))
  }

  useResponsive() {
    useResponsiveState()
  }

  get() {
    return this.store.getState()
  }

  getStyle(selector) {
    return getResponsiveStyle(selector, false)
  }

  getStyles(...selectors) {
    return getResponsiveStyles(selectors, false)
  }
}

class DispatchState {
  constructor(dispatch) {
    this._dispatch = dispatch
  }
}

class ReactState {
  constructor(state) {
    this._state = state
  }

  dispatch() {
    return new DispatchState(useDispatch())
  }

  getStyle(selector) {
    return getResponsiveStyle(selector, true)
  }

  getStyles(...selectors) {
    return getResponsiveStyles(selectors, true)
  }
}

for(const method in handlers) {
  State.prototype[method] = function(...args) {
    this.store.dispatch(handlers[method](...args))
  }

  ReactState.prototype[method] = function(...args) {
    const dispatch = useDispatch()
    dispatch(handlers[method](...args))
  }

  DispatchState.prototype[method] = function(...args) {
    this._dispatch(handlers[method](...args))
  }
}

for(const method in views) {
  State.prototype[method] = function(...args) {
    return views[method](this.get())
  }

  ReactState.prototype[method] = function() {
    return useSelector(views[method])
  }
}

const state = new State
export default state