/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	displayName: 'ListHeader',

	render: function(){
		return this.transferPropsTo(
			React.DOM.h3( {className:"topcoat-list__header"}, 
			this.props.children
			)
		);
	}

});