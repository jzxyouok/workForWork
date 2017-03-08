import {injectReducer} from '../../../store/reducers'

export default (store) => ({
	path: '/counter/counter',
	getComponent (nextState, cb) {
		require.ensure([], (require) => {
			const Counter = require('./combine/CounterContainer').default
			const reducer = require('./modules/reducers').default
			injectReducer(store, {key: 'counter', reducer})
			/*  Return getComponent   */
			cb(null, Counter)
			/* Webpack named bundle   */
		}, 'counter')
	}
})
