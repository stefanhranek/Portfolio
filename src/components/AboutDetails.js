// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Slider from 'react-slick'
import './../styles/App.scss';

export default class ReactSlickDemo extends Component {
    render() {
        var settings = {
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <Slider {...settings} className="AboutDetails">
            <div className="aboutText">
              <p>I'm a web developer based in San Diego, California. I find joy in seeing ideas come to life, which is why I love creating web & mobile applications.</p>
            </div>
            <div className="aboutText">
              <p>I love skateboarding - much of my free time goes to that. Other interests: surfing, climbing, scuba diving, table tennis, live music, board games, craft beer, coffee, dogs, and Barcelona ❤</p>
            </div>
            <div className="aboutText">
              <p>I also admire anime. I've spent much of my life absorbing it, and it still makes me feel like I can take on the world. I draw inspiration from its dream-oriented nature and beautiful imagery.</p>
            </div>
            <div className='anime'>
              <img className='leftGif' src="https://i.imgur.com/GnPeRFn.gif" alt="Secret World of Arrietty anime"/>
              <img className='rightGif' src="https://data.whicdn.com/images/317355885/original.gif" alt="Flavors of Youth anime"/>
            </div>
            <div className='anime'>
              <img className='leftGif' src="https://media.giphy.com/media/C4DlSg2161ggE/giphy.gif" alt="Ocean Waves anime"/>
              <img className='rightGif' src="https://media1.tenor.com/images/55555571c2b1fb18701b45f7b82dded4/tenor.gif?itemid=10292229" alt="Ocean Waves anime"/>
            </div>
            <div className='anime'>
              <img className='leftGif' src="https://i.giphy.com/media/b07clVdSOQcSY/giphy.webp" alt="Spirited Away anime"/>
              <img className='rightGif' src="https://data.whicdn.com/images/296132248/original.gif" alt="Garden of Words anime"/>
            </div>
            <div className='anime'>
              <img className='leftGif' src="https://waterfall.social/images/waterfall_33970c708717ef322c6a68c9f56f51fa8ab68.gif" alt="Akira anime"/>
              <img className='rightGif' src="https://media3.giphy.com/media/LlCKEq3jr6Eak/source.gif" alt="Spirited Away anime"/>
            </div>
            <div className='anime'>
              <img className='leftGif' src="https://cdn140.picsart.com/259342371009202.gif" alt="Ocean Waves anime"/>
              <img className='rightGif' src="https://i.giphy.com/media/11KzOet1ElBDz2/giphy.webp" alt="Cowboy Bebop anime"/>
            </div>

            <div className='anime'>
              <img className='leftGif' src="https://66.media.tumblr.com/9c77690164d7426ce9cceb8158767561/tumblr_nnfwszl4Kk1rnvb0co1_500.gif" alt="Whisper of the Heart anime"/>
              <img className='rightGif' src="https://data.whicdn.com/images/287420878/original.gif" alt="Whisper of the Heart anime"/>
            </div>
          </Slider>
        );
      }
    }