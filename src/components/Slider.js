import React, { Component } from 'react';
import '../css/ReactSlider.css';

var classNames = require('classnames');

class CitiesSlider extends Component {
  constructor(props) {
    super(props);
    
    this.IMAGE_PARTS = 4;
    
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;
    
    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }
  
  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }
  
  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }
  
  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }
  
  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }
  spanindex() {
    var slides = this.props.slides;
    console.log(slides);
  }
  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    // const spanindexs = this.props.slides.split().length;
    // var i = 0;
    //span key값 구하기

    return (
      <>
        <div className={classNames('slider', { 's--ready': sliderReady })}>
          <p className="slider__top-heading">웹에이전시</p>
          <ul className="slider__slides">
            {this.props.slides.map((slide, index) => (
              <li
                className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
                key={index}
                >
                <div className="slider__slide-content">
                  <h3 className="slider__slide-subheading">{slide.company || slide.site}</h3>
                  <h2 className="slider__slide-heading">
                    {slide.site.split('').map(l => <span>{l}</span>)}
                  </h2>
                  <p className="slider__slide-readmore">read more</p>
                </div>
                <div className="slider__slide-parts">
                  {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                    <div className="slider__slide-part" key={i}>
                      <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="slider__control" onClick={() => this.changeSlides(-1)} />
          <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
        </div>
      </>
    );
  }
}

export default CitiesSlider;
