/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	getDefaultProps: function(){
		return {
			label: null
		};
	},

	render: function(){

		var checkbox = this.transferPropsTo(
			<input type="checkbox" className='topcoat-checkbox__checkmark' />
		);
		
		return (
			<label className="topcoat-checkbox">
  			{checkbox}
  			<div className="topcoat-checkbox__checkmark"></div>
  				<span> {this.props.label}</span>
			</label>
		);
	}
});