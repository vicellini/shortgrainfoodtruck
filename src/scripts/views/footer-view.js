import React from 'react'

export const FooterView = React.createClass({


  render: function(){
    return(
      <footer className="footer-el">
        <div className="u_column-contaner">
          <span className="social-text">Follow us</span>
          <a className="social-icon u_column" href="https://www.facebook.com/shortgrainfoodtruck" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a className="social-icon u_column" href="https://twitter.com/ShortGrainTruck" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </a>
          <a className="social-icon u_column" href="https://www.instagram.com/shortgrain/" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
        <span className="copyright">​All images and content are copyright Short Grain Food Truck 2016.</span>
      </footer>
    )
  }
})
