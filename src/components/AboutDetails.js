// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Slider from 'react-slick'
import './../styles/App.scss';

export default class ReactSlickDemo extends Component {
    render() {
        var settings = {
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <Slider {...settings} className="AboutDetails">
            <div >
              <p>I'm a web developer based in San Diego, California. I truly enjoy seeing ideas come to life, which is why I love creating web & mobile applications.</p>
            </div>
            <div>
              <p>I also love skateboarding, surfing, rock climbing, scuba diving, table tennis, live music, board games, craft beer, coffee, dogs, and Barcelona ❤</p>
            </div>
            <div>
              <p>I have also maintained a life-long career of anime-watching. So my ambitious, goofy, empathetic personality can be attributed to that.</p>
            </div>
          </Slider>
        );
      }
    }