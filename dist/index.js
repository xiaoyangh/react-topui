!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.ReactTopui=r(require("react")):t.ReactTopui=r(t.react)}(this,function(t){return function(t){function r(a){if(e[a])return e[a].exports;var s=e[a]={exports:{},id:a,loaded:!1};return t[a].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}var e={};return r.m=t,r.c=e,r.p="",r(0)}([function(t,r,e){t.exports={ButtonBar:e(1),ButtonBarItem:e(2),Button:e(3),Checkbox:e(4),IconButton:e(5),Radio:e(6),Range:e(7),TabBar:e(8),TabBarItem:e(9),Notification:e(10),NavBar:e(11),NavBarItem:e(12),NavBarTitle:e(13),Icon:e(14),List:e(15),ListHeader:e(16),ListContainer:e(17),ListItem:e(18),LinkButton:e(19),TextInput:e(20),Textarea:e(21),Switch:e(22),Search:e(23)}},function(t,r,e){var a=e(25),s=e(26);t.exports=a.createClass({displayName:"ButtonBar",getDefaultProps:function(){return{full:!1}},render:function(){var t=s({"topcoat-button-bar":!0,full:this.props.full});return this.transferPropsTo(a.DOM.div({className:t},this.props.children))}})},function(t,r,e){var a=e(25),s=e(26);t.exports=a.createClass({displayName:"ButtonBarItem",getDefaultProps:function(){return{large:!1,full:!1}},render:function(){var t=s({"topcoat-button-bar__button":!this.props.large,"topcoat-button-bar__button--large":this.props.large,full:this.props.full}),r=this.transferPropsTo(a.DOM.button({className:t},this.props.children));return a.DOM.div({className:"topcoat-button-bar__item"},r)}})},function(t,r,e){var a=e(25),s=e(26);t.exports=a.createClass({displayName:"Button",getDefaultProps:function(){return{quiet:!1,large:!1,cta:!1,full:!1}},render:function(){var t=s({"topcoat-button":!this.props.large&&!this.props.cta&&!this.props.quiet,"topcoat-button--quiet":this.props.quiet&&!this.props.large,"topcoat-button--cta":this.props.cta&&!this.props.large,"topcoat-button--large":this.props.large&&!this.props.cta&&!this.props.quiet,"topcoat-button--large--quiet":this.props.quiet&&this.props.large,"topcoat-button--large--cta":this.props.cta&&this.props.large,full:this.props.full});return this.transferPropsTo(a.DOM.button({className:t},this.props.children))}})},function(t,r,e){var a=e(25);t.exports=a.createClass({displayName:"Checkbox",getDefaultProps:function(){return{label:null}},render:function(){var t=this.transferPropsTo(a.DOM.input({type:"checkbox",className:"topcoat-checkbox__checkmark"}));return a.DOM.label({className:"topcoat-checkbox"},t,a.DOM.div({className:"topcoat-checkbox__checkmark"}),a.DOM.span(null," ",this.props.label))}})},function(t,r,e){var a=e(25),s=e(26);t.exports=a.createClass({displayName:"IconButton",getDefaultProps:function(){return{quiet:!1,large:!1,full:!1}},render:function(){var t=s({"topcoat-button":!this.props.large&&!this.props.cta&&!this.props.quiet,"topcoat-button--quiet":this.props.quiet&&!this.props.large,"topcoat-button--large":this.props.large&&!this.props.cta&&!this.props.quiet,"topcoat-button--large--quiet":this.props.quiet&&this.props.large,full:this.props.full});return this.transferPropsTo(a.DOM.button({className:t},this.props.children))}})},function(t,r,e){var a=e(25);t.exports=a.createClass({displayName:"Radio",getDefaultProps:function(){return{right:!1,label:null}},render:function(){var t=null,r=null;this.props.label&&this.props.right?r=" "+this.props.label:this.props.label&&(t=this.props.label+" ");var e=this.transferPropsTo(a.DOM.input({type:"radio"}));return a.DOM.label({className:"topcoat-radio-button"},t,e,a.DOM.div({className:"topcoat-radio-button__checkmark"}),r)}})},function(t,r,e){var a=e(25),s=e(26);t.exports=a.createClass({displayName:"Range",getDefaultProps:function(){return{vertical:!1}},render:function(){var t=s({"topcoat-range":!this.props.vertical,"topcoat-range-vertical":this.props.vertical});return this.transferPropsTo(a.DOM.input({type:"range",className:t}))}})},function(t,r,e){var a=e(25),s=e(26);t.exports=a.createClass({displayName:"TabBar",getDefaultProps:function(){return{full:!1}},render:function(){var t=s({"topcoat-tab-bar":!0,full:this.props.full});return this.transferPropsTo(a.DOM.div({className:t},this.props.children))}})},function(t,r,e){var a=e(25),s=e(26);t.exports=a.createClass({displayName:"TabBarItem",getDefaultProps:function(){return{full:!1}},render:function(){var t=s({"topcoat-tab-bar__button":!0,full:this.props.full}),r=this.transferPropsTo(a.DOM.button({className:t},this.props.children));return a.DOM.label({className:"topcoat-tab-bar__item"},a.DOM.input({type:"radio",name:this.props.name}),r)}})},function(t,r,e){var a=e(25);t.exports=a.createClass({displayName:"Notification",getDefaultProps:function(){return{value:null}},render:function(){return a.DOM.span({className:"topcoat-notification"},this.props.value)}})},function(t,r,e){var a=e(25);t.exports=a.createClass({displayName:"NavBar",render:function(){var t="topcoat-navigation-bar";return this.transferPropsTo(a.DOM.div({className:t},this.props.children))}})},function(t,r,e){var a=e(25),s=e(26);t.exports=a.createClass({displayName:"NavBarItem",getDefaultProps:function(){return{quarter:!1,half:!1,left:!1,right:!1,center:!1}},render:function(){var t=s({"topcoat-navigation-bar__item":!0,quarter:this.props.quarter,half:this.props.half,left:this.props.left,right:this.props.right,center:this.props.center});return this.transferPropsTo(a.DOM.div({className:t},this.props.children))}})},function(t,r,e){var a=e(25);t.exports=a.createClass({displayName:"NavBarTitle",render:function(){var t=this.props.title||this.props.children;return this.transferPropsTo(a.DOM.h1({className:"topcoat-navigation-bar__title",style:{textAlign:"center"}},t))}})},function(t,r,e){var a=e(25);t.exports=a.createClass({displayName:"Icon",render:function(){return this.transferPropsTo(a.DOM.span({className:"icomatic icon"},this.props.name))}})},function(t,r,e){var a=e(25);t.exports=a.createClass({displayName:"List",render:function(){return this.transferPropsTo(a.DOM.div({className:"topcoat-list"},this.props.children))}})},function(t,r,e){var a=e(25);t.exports=a.createClass({displayName:"ListHeader",render:function(){return this.transferPropsTo(a.DOM.h3({className:"topcoat-list__header"},this.props.children))}})},function(t,r,e){var a=e(25);t.exports=a.createClass({displayName:"ListContainer",render:function(){return this.transferPropsTo(a.DOM.ul({className:"topcoat-list__container"},this.props.children))}})},function(t,r,e){var a=e(25);t.exports=a.createClass({displayName:"ListItem",render:function(){return this.transferPropsTo(a.DOM.li({className:"topcoat-list__item"},this.props.children))}})},function(t,r,e){var a=e(25),s=e(3);t.exports=a.createClass({displayName:"LinkButton",nav:function(){return window.location.href=this.props.href,!1},render:function(){return this.transferPropsTo(s({onClick:this.nav},this.props.children))}})},function(t,r,e){var a=e(25),s=e(26);t.exports=a.createClass({displayName:"TextInput",getDefaultProps:function(){return{large:!1,full:!1}},render:function(){var t=s({"topcoat-text-input":!this.props.large,"topcoat-text-input--large":this.props.large,full:this.props.full});return this.transferPropsTo(a.DOM.input({type:"text",className:t}))}})},function(t,r,e){var a=e(25),s=e(26);t.exports=a.createClass({displayName:"Textarea",getDefaultProps:function(){return{large:!1,full:!1}},render:function(){var t=s({"topcoat-textarea":!this.props.large,"topcoat-textarea--large":this.props.large,full:this.props.full});return this.transferPropsTo(a.DOM.textarea({type:"text",className:t}))}})},function(t,r,e){var a=e(25);t.exports=a.createClass({displayName:"Switch",getDefaultProps:function(){return{label:null}},render:function(){var t=this.transferPropsTo(a.DOM.input({type:"checkbox",className:"topcoat-switch__input"}));return a.DOM.label({className:"topcoat-switch"},t,a.DOM.div({className:"topcoat-switch__toggle"}))}})},function(t,r,e){var a=e(25),s=e(26);t.exports=a.createClass({displayName:"Search",getDefaultProps:function(){return{large:!1,full:!1}},render:function(){var t=s({"topcoat-search-input":!this.props.large,"topcoat-search-input--large":this.props.large,full:this.props.full});return this.transferPropsTo(a.DOM.input({type:"search",className:t}))}})},,function(r){r.exports=t},function(t){function r(t){return"object"==typeof t?Object.keys(t).map(function(r){return t[r]?r:""}).join(" "):Array.prototype.join.call(arguments," ")}t.exports=r}])});