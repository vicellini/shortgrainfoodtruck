import React from 'react';

export const SingleThumbnail = React.createClass({

  render: function(){
    return(
      <div className="col-xs-6 col-sm-3 single-press">
        <a href={this.props.data.url} className="thumbnail" target="_blank">
          <img src={this.props.data.img} alt="..."/>
          <h2 className="press-name">{this.props.data.name}</h2>
          <h3 className="press-date">{this.props.data.date}</h3>
        </a>
      </div>
    )
  }
})
