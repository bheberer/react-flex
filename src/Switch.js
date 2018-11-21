import React, { Component } from 'react'
import './App.css'
import './switch.css'

export default class Switch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: this.props.on !== undefined ? this.props.on : false
    }
  }

  toggle = () =>
    this.setState(currentState => {
      this.props.onToggle(!currentState.on)
      return { on: !currentState.on }
    })

  render = () => {
    const { onIcon, offIcon, disabled, controlled } = this.props
    return (
      <div
        data-flex-switch-track
        data-on={this.state.on ? true : undefined}
        data-disabled={disabled ? true : undefined}
        // className={`switch ${this.state.on ? 'on' : 'off'} ${
        //   disabled ? 'disabled' : ''
        // } ${trackStyle ? trackStyle : ''}`}
        onClick={controlled || disabled ? undefined : this.toggle}
      >
        {this.state.on
          ? onIcon
            ? onIcon()
            : null
          : offIcon
          ? offIcon()
          : null}
        <div
          data-flex-switch-button
          // className={`switch-button ${this.state.on ? 'on' : 'off'} ${
          //   disabled ? 'disabled' : ''
          // } ${buttonStyle ? buttonStyle : ''}`}
        />
      </div>
    )
  }
}

{
  /* <div</div></div>
        flex-switch-track={true}
        on={this.state.on ? true : undefined}
        disabled={disabled ? true : undefined}
        className={`switch ${this.state.on ? 'on' : 'off'} ${
          disabled ? 'disabled' : ''
        } ${trackStyle ? trackStyle : ''}`}
        onClick={controlled || disabled ? undefined : this.toggle}
      > */
}
