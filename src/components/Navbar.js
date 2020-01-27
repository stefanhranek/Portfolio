import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './../styles/App.scss';
import $ from 'jquery';

export default class Navbar extends Component {


  componentDidMount() {
    $(document).ready(function() {
      $('a').bind('click', function(e) {
          e.preventDefault(); // prevent hard jump, the default behavior
  
          var target = $(this).attr("href"); // Set the target as variable
  
          // perform animated scrolling by getting top-position of target-element and set it as scroll target
          $('html, body').stop().animate({
              scrollTop: $(target).offset().top
          }, 600, function() {
              window.location.hash = target; //attach the hash (#jumptarget) to the pageurl
          });
  
          return false;
      });
  });
  
  $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop();
  
      // Show/hide menu on scroll
      //if (scrollDistance >= 850) {
      //		$('nav').fadeIn("fast");
      //} else {
      //		$('nav').fadeOut("fast");
      //}
    
      // Assign active class to nav links while scolling
      $('.page-section').each(function(i) {
          if ($(this).position().top <= scrollDistance) {
              $('.navigation a.active').removeClass('active');
              $('.navigation a').eq(i).addClass('active');
          }
      });
  }).scroll();
  }

    render() {
        return (
            <nav className="navContainer">
                <ul>
                    <a className="navLink" href="#1">About</a>
                    <a className="navLink" href="#2">Projects</a>
                    <a className="navLink" href="#3">Contact</a>
                </ul>
            </nav>
        )
    }
}