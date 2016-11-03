import React, { Component, PropTypes } from 'react'

// 这是一个没有依赖state的组件
// 所有的状态由props来决定
class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times

        <button onClick={onIncrement}>
          +
        </button>

        <button onClick={onDecrement}>
          -
        </button>

        <button onClick={this.incrementIfOdd}>
          如果是奇数就+1
        </button>

        <button onClick={this.incrementAsync}>
          1秒后+1
        </button>

      </p>
    )
  }
}

export default Counter
