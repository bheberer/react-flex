import React, { Component } from 'react'
import Switch from './Switch_RP'

export default class InputList extends Component {
  static defaultProps = {
    defaultOnIndexes: []
  }
  constructor(props) {
    super(props)
    this.state = {
      onIndexes: this.getOnIndexes({ onIndexes: props.defaultOnIndexes })
    }
  }

  getOnIndexes = (state = this.state) =>
    this.props.onIndexes !== undefined ? this.props.onIndexes : state.onIndexes

  handleItemClick = index => {
    this.setState(state => {
      const closing = state.onIndexes.includes(index)
      return {
        onIndexes: closing
          ? state.onIndexes.filter(i => i !== index)
          : [...state.onIndexes, index]
      }
    })
  }

  render() {
    return this.props.children({
      onIndexes: this.getOnIndexes(),
      handleItemClick: this.handleItemClick
    })
  }
}
