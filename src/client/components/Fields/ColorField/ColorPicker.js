import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Popover from '@material-ui/core/Popover'
import { 
  StylesProvider, 
  createGenerateClassName, 
  makeStyles 
} from '@material-ui/core/styles'

import { ColorButton, ColorBox } from 'material-ui-color'

import * as ColorTool from './colorTool'
import uncontrolled from './uncontrolled'
import * as CommonTypes from './commonTypes'
import useTranslate from './useTranslate'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginTop: 16,
    flexDirection: 'row',
    width: '100%',
  },
  field: {
    flexGrow: 1,
  },
  colorpickerButton: {
    margin: 6,
  }
})

const generateClassName = createGenerateClassName({ seed: 'ColorPicker' })

const getColorText = (color, disablePlainColor) => {
  let text = disablePlainColor ? `color-${color.hex}` : color.name
  if (text.startsWith('color-')) {
    if (typeof color.raw !== 'string' || !color.raw.startsWith('#')) {
      text = ColorTool.getCssColor(color, 'hex')
    } else {
      text = color.raw
    }
  } else if (text === 'none') {
    text = color.raw
  }
  return text
}

const ColorPicker = ({
  name,
  value,
  deferred,
  palette,
  inputFormats,
  openAtStart,
  onChange,
  onOpen,
  doPopup,
  disableAlpha,
  hslGradient,
  disablePlainColor,
  shrink
}) => {
  const classes = useStyles()
  const refPicker = useRef(null)
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslate()
  const color = ColorTool.validateColor(
    value, disableAlpha, t, i18n.language, disablePlainColor
  )
  const raw = getColorText(color, disablePlainColor)

  useEffect(() => {
    if (openAtStart) {
      setOpen(true)
    }
    if (typeof shrink === 'function') {
      shrink(!!raw.length)
    }
  }, [openAtStart])

  const handleClick = () => {
    const b = Boolean(refPicker.current)
    setOpen(b)
    if (onOpen) onOpen(b)
  }

  const handleClose = () => {
    setOpen(false)
    if (onOpen) onOpen(false)
  }

  const handleColorChange = newColor => {
    onChange(newColor)
    if (typeof shrink === 'function') {
      shrink(true)
    }
    if (deferred) {
      handleClose()
    }
  }

  const handleChange = event => {
    onChange(event.target.value)
  }

  const doShrink = () => {
    if (typeof shrink === 'function') {
      shrink(true)
    }
  }
  const shouldShrink = (event) => {
    if (typeof shrink === 'function') {
      shrink(!!event.target.value.length)
    }
  }

  let box = (
    <ColorBox
      value={color}
      style={{ position: 'relative' }}
      deferred={deferred}
      palette={palette}
      inputFormats={inputFormats}
      disableAlpha={disableAlpha}
      hslGradient={hslGradient}
      onChange={handleColorChange}
    />
  )
  if (doPopup) {
    box = doPopup(box)
  } else {
    box = (
      <Popover
        id="color-popover"
        open={open}
        anchorEl={refPicker.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {box}
      </Popover>
    )
  }

  return (
    <StylesProvider generateClassName={generateClassName}>
      <div ref={refPicker} className={classes.root}>
        <TextField 
          className={classes.field}
          color="primary" 
          name={name}
          value={raw !== 'none' ? raw: ''} 
          onChange={handleChange} 
          onFocus={doShrink}
          onBlur={shouldShrink}
          data-testid="colorpicker-input" 
        />
        <ColorButton
          data-testid="colorpicker-button"
          className={`muicc-colorpicker-button ${classes.colorpickerButton}`}
          color={color}
          onClick={handleClick}
        />
        {box}
      </div>
    </StylesProvider>
  )
}

ColorPicker.propTypes = {
  value: CommonTypes.color,
  deferred: PropTypes.bool,
  palette: CommonTypes.palette,
  inputFormats: CommonTypes.inputFormats,
  onChange: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  shrink: PropTypes.func,
  openAtStart: PropTypes.bool,
  doPopup: PropTypes.func,
  /**
    Don't use alpha
   */
  disableAlpha: PropTypes.bool,
  hslGradient: PropTypes.bool,
  disablePlainColor: PropTypes.bool,
}

ColorPicker.defaultProps = {
  value: 'none',
  deferred: false,
  palette: undefined,
  inputFormats: ['hex', 'rgb'],
  onOpen: undefined,
  openAtStart: false,
  doPopup: undefined,
  disableAlpha: false,
  hslGradient: false,
  disablePlainColor: false,
}

export default uncontrolled(ColorPicker)