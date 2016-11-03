// state可以认为是一个完整的状态树？
// 初始state = 0
// 随着输入不同的action，则返回不同的state
export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
