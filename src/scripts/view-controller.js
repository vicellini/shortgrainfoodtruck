import React from 'react';
import {HomeView} from './views/home-view.js';
import {NavView} from './views/nav-view.js';
import {MenuView} from './views/menu-view.js';
import {AboutView} from './views/about-view.js';
import {EventsView} from './views/events-view.js';
import {PressView} from './views/press-view.js';
import {LocateView} from './views/locate-view.js';
import {FooterView} from './views/footer-view.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';



export const ViewController = React.createClass({
  getInitialState: function(){
    let storeObj = STORE.getStoreData()
    return storeObj
  },

  componentDidMount: function(){
    let component = this;
     STORE.onStoreChange(function(){
      let newStoreObj = STORE.getStoreData()
      component.setState(newStoreObj)
      })
  },


  render: function(){
    console.log(this.state)
    let componentToRender
    switch(this.state.currentNavRoute){
      case "HOME":
        componentToRender = <HomeView {...this.state}/>
      break;
      case "ABOUT":
        componentToRender = <AboutView {...this.state}/>
      break;
      case "MENU":
        componentToRender = <MenuView {...this.state}/>
      break;
      case "EVENTS":
        componentToRender = <EventsView {...this.state}/>
      break;
      case "PRESS":
        componentToRender = <PressView {...this.state}/>
      break;
      case "LOCATE":
        componentToRender = <LocateView {...this.state}/>
      break;
    }

    return (
    <div className="app-window">
      <div className="page-content">
        <div className="logo">
          <img src="./images/shortgrain_logo_truck_0.jpeg" className="logo-img"/>
        </div>
        <NavView {...this.state}/>
        <div className="component">
          {componentToRender}
        </div>
      <FooterView {...this.state}/>
      </div>
    </div>
    )
  }

})
