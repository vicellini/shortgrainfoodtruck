import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import {ViewController} from './view-controller.js';
import {ACTIONS} from './actions.js';

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

	routes: {
		'locate' : 'showLocatePage',
		'press' : 'showPressPage',
		'events' : 'showEventPage',
		'menu' : 'showMenuPage',
		'about' : 'showAboutPage',
		'' : 'showHomePage'
	},

	showHomePage: function(){
		ACTIONS.setView('HOME')
	},

	showAboutPage: function(){
		ACTIONS.setView('ABOUT')
	},

	showMenuPage: function(){
		ACTIONS.setView('MENU')
	},

	showEventPage: function(){
		ACTIONS.setView('EVENTS')
	},

	showPressPage: function(){
		ACTIONS.setView('PRESS')
	},

	showLocatePage: function(){
		ACTIONS.setView('LOCATE')
	}
})

new AppRouter()
ReactDOM.render(<ViewController/>, document.querySelector('#app-container'))
