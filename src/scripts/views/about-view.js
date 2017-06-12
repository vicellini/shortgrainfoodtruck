import React from 'react';


export const AboutView = React.createClass({

  render: function(){
    return(
      <div className="about-component">
        <img className="about-img visible-xs-block" src="./images/sg-about.jpg"/>
        <div className="lg-about-img hidden-xs">
          <img className="lg-img" src="./images/sg-about.jpeg"/>
        </div>
        <div className="chef-info">
          <p className="about-chef">
            <span className="chef">Shuai Wang</span> got his cooking chops in the kitchens of NYC. He now brings local sustainable untraditional Japanese cuisine to the South.
          </p>
          <p className="about-chef">
            <span className="chef">Corrie Wang</span> is a young adult novelist. Her debut novel THE TAKEDOWN drops April 11, 2017 through Disney's FreeForm Books. You can order it <a href="https://www.amazon.com/Takedown-Corrie-Wang/dp/1484757424/ref=sr_1_1?ie=UTF8&qid=1471729685&sr=8-1&keywords=corrie+wang" target="_blank">here</a> or wherever books are sold.
          </p>
        </div>
      </div>
    )
  }
})
