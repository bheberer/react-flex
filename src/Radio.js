import React, { Component } from 'react'
import './App.css'
import './switch.css'
import Toggle from './Toggle'

const Radio = ({ defaultOn, on, disabled, className, ...props }) => (
  <Toggle on={on}>
    {({ on, toggle }) => (
      <div
        data-flex-radio-button
        data-on={on ? true : undefined}
        data-disabled={disabled ? true : undefined}
        onClick={disabled || on === true ? undefined : toggle}
        className={className}
      >
        <input
          {...props}
          type="radio"
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

export default Radio
