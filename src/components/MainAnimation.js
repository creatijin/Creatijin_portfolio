import React, { Component } from 'react';
import '../css/animation.css';

var classNames = require('classnames');

class MainAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainEventReady: false,
      autoTime_active: 3000
    };
   

  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ MainEventReady: true });
    }, 3000);
  }

  
  render() {
    const activeClass = classNames({'textAnimation':true, 'active': this.state.MainEventReady });
    return(
      <>
        <div className="logo_box">
          <ul className="polygon_ul">
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
            <li className="polygon oneline"></li>
          </ul>
        </div>
        <div className={activeClass}>
            <h1>{this.props.main.title.split('').map(t => <span>{t}</span>)}</h1>
            <h2>{this.props.main.subtitle.split('').map(t => <span>{t}</span>)}</h2>
            <p>{this.props.main.subtxt.split('').map(t => <span>{t}</span>)}</p>
        </div>
      </>
    )
  }
}


export default MainAnimation;
