import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if(this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement, onWordChange, wordCButton, inputDefault, displayText } = this.props
    return(
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          incrementIfOdd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          incrementAsync
        </button>
        {' '}
        <button onClick={displayText}>
          click to change
        </button>
        {' '}
        {wordCButton}
        <input type="text" onChange={(e) => this.props.onWordChange(e.target.value)} />



      </p>
    )
  }
}
  // <input type="Submit" value="Submit" />
