import actioins, {COUNTER_INCREMENT, COUNTER_DOUBLE_ASYNC} from './actions'

const ACTION_HANDLERS = {
	[COUNTER_INCREMENT]: (state, action) => Object.assign({}, state, {a: state.a + action.payload}),
	[COUNTER_DOUBLE_ASYNC]: (state, action) => Object.assign({}, state, {b: state.b * 2})
}

// state 的初始化
const initialState = {a: 0, b: 2}
export default function counterReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type]
	
	return handler ? handler(state, action) : state
}
