import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Switch from './Switch_RP'
import CheckBox from './CheckBox'
import InputList from './InputList'

const createListIndexes = length => {
  const indexes = []
  for (let i = 0; i < length; i++) {
    indexes.concat([i, i])
  }
  return indexes
}

class App extends Component {
  handleSwitchChange = toggle =>
    toggle ? console.log('true') : console.log('false')

  render() {
    const indexes = [0, 0, 1, 1, 2, 2]
    return (
      <div className="App">
        <header className="App-Header">
          <Switch />
          <CheckBox on />
          <InputList defaultOnIndexes={[0]}>
            {({ onIndexes, handleItemClick }) => (
              <div>
                <div style={{display: 'flex'}}>
                  <Switch
                    on={onIndexes.includes(indexes.shift())}
                    onClick={() => handleItemClick(indexes.shift())}
                  />
                  Oi Fook Me
                </div>
                <CheckBox
                  on={onIndexes.includes(1)}
                  onClick={() => handleItemClick(1)}
                />
                <Switch
                  on={onIndexes.includes(2)}
                  onClick={() => handleItemClick(2)}
                />
              </div>
            )}
          </InputList>
        </header>
      </div>
    )
  }
}

export default App

/*
things that I did incorrectly
tightly coupled my css to class structure which I didn't like
tried just creating a switch component when that logic could easily be expanded to more components
tried doing a controlled component with a literal controlled prop that fucked with toggling when using props would be more useful for what I wanted to do
*/
