import React from 'react';
import ReactDOM from 'react-dom';

const SomeComponent = React.createClass({
	render: function(){
		console.log('whoa!')
		return <div>
			<h1>Owoooooooooo!</h1>
		</div>
	}
})

console.log('whyyyyy', React)
ReactDOM.render(<SomeComponent/>, document.querySelector('#app-container'))