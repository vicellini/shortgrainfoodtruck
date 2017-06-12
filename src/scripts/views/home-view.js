import React from 'react';

export const HomeView = React.createClass({
  render: function(){
    return (
      <div className="home-view">
        <div className="home-img_container hidden-xs">
          <img src="./images/sg-home.jpeg" className="home-img"/>
        </div>
        <div className="tagline-div">
          <p>
            We take pride in sourcing as locally and sustainably as possible through Grow Food Carolina, Rooting Down Farms, Spade & Clover, Joyce Farms, Fili-West Farms, and Abundant Seafood, among other local farmers and fisherman.
          </p>
          <br/>
          <p>
            As always,
            <br/>
            <span className="tagline">Arigato Y'all!</span>
          </p>
        </div>
      </div>
    )
  }
})
