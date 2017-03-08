import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/actions'
import Counter from '../components/Counter'


const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
}

// 当它被connect调用的时候会为它传递一个参数State。课时connect中的state从何而来呢
const mapStateToProps = (state) => ({
  counter : state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
