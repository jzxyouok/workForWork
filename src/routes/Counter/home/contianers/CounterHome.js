import React, {PropTypes} from 'react'

export const CounterHome = (props) => {
	return (
		<div className="counter_home">
			<div>
				<button onClick={props.getReactData}>react数据</button>
				<button onClick={props.getNodeData}>nodeJs数据</button>
			</div>
			<ul>
				{this.handleData(props.data)}
			</ul>
		</div>
	)
}

CounterHome.prototype.handleData = (data) => {
	return data.map((data, index) => {
		return (
			<li key={index}>
				{ index + " : " + data}
			</li>
		)
	})
}

CounterHome.propTypes = {
	counterHome: PropTypes.Object.isRequired,
	getReactData: PropTypes.func.isRequired,
	getNodeData: PropTypes.func.isRequired
}

export default CounterHome
