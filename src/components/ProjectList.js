import React, { Component } from 'react';
import pl_01 from '../img/pc_slider_01.png';
import icon_js from '../img/icon_js.png';
import icon_html from '../img/icon_html.png';
import icon_css from '../img/icon_css.png';
import icon_react from '../img/icon_react.png';
import icon_jquery from '../img/icon_jquery.png';

var classNames = require('classnames');

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectlist: [
        {
          company: 'SPAAAADE',
          name: '신세계 인터코스',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_01 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '휠리펀트',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_01 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '바비리스',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_01 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        }
      ]
    }
  }
  
  projectLists = (e) => {
    
    const projectInfo = this.state.projectlist;

    const projectLists = projectInfo.map((info,index) => (
      <li className='project_list' key={index} style={{ backgroundImage: `url(${info.bg})` }}>
        <h3>{info.name}</h3>
        <p onClick={()=> {
          this.props.stateData(index, true)
        }}>read more</p>
      </li>
    ))
    return projectLists
  }

  projectpop = () => {
    const id = this.props.dataId;
    const change = this.props.dataTo;
    const projectInfo = this.state.projectlist;
    const projectpops = projectInfo.map((info,index) => (
      <li className={`pop_list ${id === index && change === true ? "selected" : ""}`} key={index}>
        <div className="pop_img" style={{ backgroundImage: `url(${info.bg})` }}></div>
        <div className="pop_txt_wrap">
          <h3>{info.company}</h3>
          <h2>{info.name}</h2>
          <div className="skill_list">
            <p>Skill</p>
            <ul>
              {this.skillLists(index)}
            </ul>
          </div>
          <div className="projectTxt">
            <p>{info.txt}</p>
          </div>
        </div>
      </li>
    ))
    return projectpops
  }
  skillLists = (i)=> {
    const skills = this.state.projectlist[i].technology;
    const skillList = skills.map((skill, index)=> (
      <li key={index}><img src={skill} alt="skillIcon"/></li>
    ))
    return skillList;
  }

  render() {
    

    return(
      <>
        <ul className='projectList_ul'>
          {this.projectLists()}
        </ul>
        <ul className={classNames('project_pop', { 'selected': this.props.dataTo })} onClick={()=> {this.props.stateData(null, false)}}>
          {this.projectpop()}
        </ul>
      </>
    )
  }
}


export default ProjectList;
