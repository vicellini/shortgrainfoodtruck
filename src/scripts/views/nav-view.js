import React from 'react';
import {SingleNavComponent} from '../components/single-nav-component';
import {ACTIONS} from '../actions.js';


export const NavView = React.createClass({

  _createNavJSX: function(routeList){
  let finalJSX = routeList.map(function(routeObj, i){
    return (
      <SingleNavComponent key={i} data={routeObj}/>
      )
    })
    return finalJSX
  },

  render: function(){
    let routeListTop  = [
        {appRoute : 'HOME', displayText : 'Home', hashRoute : ''},
        {appRoute : 'ABOUT', displayText : 'About', hashRoute : '/about'},
        {appRoute : 'MENU', displayText : 'Menu', hashRoute : '/menu'},
        {appRoute : 'EVENTS', displayText : 'Events', hashRoute : '/events'},
        {appRoute : 'PRESS', displayText : 'Press', hashRoute : '/press'},
        {appRoute : 'LOCATE', displayText : 'Locate', hashRoute : '/locate'},
      ]

    return(
      <nav className="nav-dropdown">
        <div className="dropdown mobile">
          <button className="btn btn-default dropdown-toggle nav-button" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-right nav-menu" aria-labelledby="dropdownMenu1">
            {this._createNavJSX(routeListTop)}
          </ul>
        </div>
        <div className="normal-menu">
          <ul className="u_column-container">
            {this._createNavJSX(routeListTop)}
          </ul>
        </div>
      </nav>
    )
  }
})
