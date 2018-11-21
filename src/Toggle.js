import React, { Component } from 'react'

export default class Toggle extends Component {
  static defaultProps = {
    defaultOn: false
  }
  constructor(props) {
    super(props)
    this.state = { on: this.getOn({ on: props.defaultOn }) }
  }

  getOn = (state = this.state) =>
    this.props.on !== undefined ? this.props.on : state.on

  toggle = () =>
    this.props.on !== undefined
      ? undefined
      : this.setState(currentState => {
          return { on: !currentState.on }
        })

  render() {
    return this.props.children({
      on: this.getOn(),
      toggle: this.toggle
    })
  }
}

/*

I want to be able to have individual input components that are capable of conrtolling their own state, but I also want them to be usable within larger input list
component. I think right now the idea would be to have a 'defaultOn' prop and an 'on' prop, but what happens if those two props conflict? I guess the answer
is to use on as the overriding prop, which makes sense because it's the control prop

*/
