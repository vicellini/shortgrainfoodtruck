import React from 'react';
import {PressData} from '../press-data.js';
import {SingleThumbnail} from '../components/single-thumbnail-component.js'

export const PressView = React.createClass({

  _createReviewJSX: function(someArr){
    let finalJSX = someArr.map(function(singleObj, i){
      return (
        <SingleThumbnail key={i} data={singleObj}/>
      )
    })
    return finalJSX
  },

  render: function(){
    console.log(PressData)
    return(
      <div className="press-view">
        <h2 className="you-know">"Short Grain is doing for Japanese food what Bowie did for the Kimono."
          <br/><span className="quote">-  Hanna Raskin</span>
        </h2>
        <div className="press-all container-fluid">
          <div className="row">
            {this._createReviewJSX(PressData)}
          </div>
        </div>
      </div>
    )
  }

})
