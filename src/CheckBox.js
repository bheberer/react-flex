import React, { Component } from 'react'
import './App.css'
import './switch.css'
import Toggle from './Toggle'

const CheckBox = ({
  defaultOn,
  on,
  disabled,
  className,
  onClick,
  ...props
}) => (
  <Toggle defaultOn={defaultOn} on={on}>
    {({ on, toggle }) => (
      <div
        data-flex-checkbox
        data-on={on ? true : undefined}
        data-disabled={disabled ? true : undefined}
        onClick={disabled ? undefined : onClick ? onClick : toggle}
        className={className}
      >
        <div data-flex-checkmark />
        <input
          {...props}
          type="checkbox"
          checked={on}
          style={{
            border: '0',
            height: '1px',
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            margin: '-1px',
            overflow: 'hidden',
            padding: '0',
            position: 'absolute',
            whiteSpace: 'nowrap',
            width: '1px'
          }}
        />
      </div>
    )}
  </Toggle>
)

export default CheckBox
