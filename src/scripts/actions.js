import {STORE} from './store.js';

export const ACTIONS = {
  setView: function(viewType, routeParamsObj){
    STORE.setStore('currentNavRoute', viewType)
  },

  routeTo: function(path){
    window.location.hash = path
  },

  setMenuNumber: function(number){
    STORE.setStore('menuPhoto', number)
  }

}
