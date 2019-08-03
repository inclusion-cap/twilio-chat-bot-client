import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';

function Body() {

  const slider = (
    <AwesomeSlider cssModule={AwsSliderStyles} >
      <div className="carousel-item">
        <img src='http://www.fubiz.net/wp-content/uploads/2019/07/stranger-things-animation-anime-annees-80-11.png' alt="img" />
      </div>
      <div className="carousel-item">
        <img src='https://i.ytimg.com/vi/MY3oAyuYXmo/maxresdefault.jpg' alt="img" />
      </div>
      <div className="carousel-item">
        <img src='http://www.fubiz.net/wp-content/uploads/2019/07/stranger-things-animation-anime-annees-80-8.png' alt="img" />
      </div>
      <div className="carousel-item">
        <img src='https://c7.uihere.com/files/951/961/183/demogorgon-eleven-sticker-wall-decal-google-allo-stranger-things-thumb.jpg' alt="img" />
      </div>
    </AwesomeSlider >
  );

  return (<div className="body">
    <div id="carousel-container">
      {slider}
    </div>
  </div>);
}

export default Body;
