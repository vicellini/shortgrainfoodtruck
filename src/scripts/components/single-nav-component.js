import React from 'react';
import {ACTIONS} from '../actions.js';

export const SingleNavComponent = React.createClass({

  _handleRoute: function(route){
    return "#" + route
  },

  render: function(){
    return (
      <li className="nav-item">
        <a className="nav-button" href={this._handleRoute(this.props.data.hashRoute)}>
          <span className="nav-text">{this.props.data.displayText}</span>
        </a>
      </li>
    )
  }
})
