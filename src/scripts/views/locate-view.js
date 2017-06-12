import React from 'react';

export const LocateView = React.createClass ({

  render: function(){
    return (
      <div className="locate-view">
        <img src="./images/sg-locate.jpeg"/>
        <span className="location-info">
          <div className="small-iframe-container visible-xs-block">
            <iframe className="phone-calendar" src="https://calendar.google.com/calendar/embed?showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=500&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=shortgrain.info%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York"></iframe>
          </div>
          <div className="hidden-xs big-cal">
            <iframe className="g-calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=shortgrain.info%40gmail.com&amp;color=%2329527A&amp;ctz=America%2FNew_York" >
            </iframe>
          </div>
          <div className="locate-info">
            <p>Since we're always on the go, and dates are always being added, the best way to find us, is to follow us!</p>
            <br className="visible-xs"/>
            <p>For any further inquiries you can contact us at <a href="mailto:shortgrainchs@gmail.com">shortgrainchs@gmail.com</a> or call <a href="tel:843.321.3035">843.321.3035</a> and leave a message!</p>
          </div>
        </span>
      </div>
    )
  }
})
