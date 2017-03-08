import Default from '../../layouts/Default'
import Home from './home'
import CounterRoute from './counter'

export const createRoutes = (store) => ({
  path : '/counter',
  component : Default,
  indexRoute : Home,
  childRoutes : [
    CounterRoute(store)
  ]
})

export default createRoutes
