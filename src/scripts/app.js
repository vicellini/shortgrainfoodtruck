import React from 'react';
import ReactDOM from 'react-dom';

const SomeComponent = React.createClass({
	render: function(){
		console.log('whoa!')
		return <div>
			<h1>Lil Flip!</h1>
			<img src="./images/exciting.jpg"/>
		</div>
	}
})

console.log('whyyyyy', React)
ReactDOM.render(<SomeComponent/>, document.querySelector('#app-container'))