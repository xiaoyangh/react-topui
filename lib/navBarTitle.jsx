/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	render: function(){
		var title = this.props.title || this.props.children;
		return this.transferPropsTo(
        	<h1 className="topcoat-navigation-bar__title" style={{textAlign: 'center'}}>{title}</h1>
		);
	}
});