import React, { Component } from 'react';



class Contact extends Component {
  render() {
    var infodata = this.props.data;
    var lists = [];
    var i = 0;

    while( i < infodata.length ) {
      lists.push(
      <li className="contact_list" key={lists.length}>
        <p>{infodata[i].infoName}</p>
        <a 
        href={infodata[i].href}
        // target="_blank"
        >{infodata[i].info}
        </a>
      </li>)
      i = i + 1;
    }
    return(
      <>
        <div className="contact_wrap">
          <h2 className="contact_title">Contact</h2>   
          <ul className="contact_ul">
            {lists}
          </ul>
        </div>
      </>
    )
  }
}


export default Contact;
