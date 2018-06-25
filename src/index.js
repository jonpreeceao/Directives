import React, { Component } from "react"
import ReactDOM from "react-dom"

import "./styles.css"

function mvtReplace(value) {
  return function(target, key, descriptor) {
    descriptor.value = value
    return descriptor
  }
}

function Text2() {
  return (
    <div>
      <p>Hello Gemma</p>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  )
}

class Blah extends Component {
  @mvtReplace(Text2)
  render() {
    return (
      <div>
        <h2>Start editing to see some magic happen!</h2>
        <p>Hello Gemma</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Blah />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
