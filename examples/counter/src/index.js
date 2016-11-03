// 这是一个完全没有用到React的state的概念的例子

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter' // 定义React组件
import counter from './reducers' // 定义reducer，也操纵state状态变化的函数

// 根据reducer，得到一个store
const store = createStore(counter)

// 真正与 React组件交互的，是store？
const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('root')
)

render()

// 将render注册到store?
store.subscribe(render)
