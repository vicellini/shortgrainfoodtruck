import React from 'react';
import {MenuImgOne, MenuImgTwo, MenuImgThree} from '../components/menu-img-components.js';
import {ACTIONS} from '../actions.js'

export const MenuView = React.createClass({
  _handleChevLeft: function(){
    let imageNumber = this.props.menuPhoto
    imageNumber -= 1
    if(imageNumber === 0){
      ACTIONS.setMenuNumber(3)
    }else{
      ACTIONS.setMenuNumber(imageNumber)
    }
  },

  _handleChevRight: function(){
    let imageNumber = this.props.menuPhoto
    imageNumber += 1
    if(imageNumber === 4){
      ACTIONS.setMenuNumber(1)
    }else{
      ACTIONS.setMenuNumber(imageNumber)
    }
  },

  render: function(){
  let imageToRender
    switch(this.props.menuPhoto){
    case 1:
      imageToRender = <MenuImgOne/>
    break;
    case 2:
      imageToRender = <MenuImgTwo/>
    break;
    case 3:
      imageToRender = <MenuImgThree/>
    break;
  }
    return(
      <div className="menu-view">
        {imageToRender}
        <div className="chev-box">
          <i className="fa fa-chevron-left chev-left" onClick={this._handleChevLeft} aria-hidden="true"></i>
          <i className="fa fa-chevron-right chev-right" onClick={this._handleChevRight} aria-hidden="true"></i>
        </div>
        <div className="menu-info">
          <div className="basic-menu">
            <div className="main-title">
              <h3><span className="menu-title">CHIRASHI . DONBURI</span></h3>
                <p className="what-dis"><i>Short Grain's take on traditional Japanese rice bowls</i></p>
            </div>
            <h3><span className="menu-title">THE O.G.</span> MARKET PRICE</h3>
              <p>
                w. local caught sashimi, pickled cucumbers & ginger, ponzu, spicy mayo, masago, puffed rice, furikake
              </p>
            <h3><span className="menu-title">KARAAGE-DON</span>  10</h3>
              <p>
                w. japanese fried chicken, shaved cabbage, lemon mayo, slow cooked egg, sushi rice
              </p>
            <h3><span className="menu-title">LOCAL SEASONAL VEGGIE BOWL</span>  MARKET PRICE</h3>
              <p>
                chef's choice of whatever's in season, made delicious
              </p>
            </div>
            <div className="menu-disclaimer">
              <div className="disclaimer-text">
                <p>
                  Our menu changes on a near daily basis. In addition to our rice bowls, we almost always offer seasonal fritters and onigiris. On occassion we offer additional snacks, rice bowls, noodle bowls, salads or sides as our mind set and local produce see fit.
                  <br/>
                  <br/>
                  <br/>
                  Since we make all our own pickles and sauces, and most of our condiments, many items on our menu contain soy, sesame, and/or nuts and cannot be substituted. However, many items that contain fish flakes or roe can be made vegetarian.
                </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
})
