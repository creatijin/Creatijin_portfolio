import React, { Component } from 'react';
import pl_01 from '../img/pc_slider_01.png';
import pl_02 from '../img/pc_slider_02.png';
import pl_03 from '../img/pc_slider_03.png';
import pl_04 from '../img/project_01.png';
import pl_05 from '../img/project_02.png';
import pl_06 from '../img/project_03.png';
import pl_07 from '../img/project_04.png';
import pl_08 from '../img/project_05.png';
import pl_09 from '../img/project_06.png';
import pl_10 from '../img/project_07.png';
import pl_11 from '../img/project_08.png';
import pl_12 from '../img/project_09.png';
import pl_13 from '../img/project_10.png';
import pl_14 from '../img/project_11.png';
import pl_15 from '../img/project_12.png';
import pl_16 from '../img/project_13.png';
import pl_17 from '../img/project_14.png';
import pl_18 from '../img/project_15.png';
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
              icon_jquery
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
              icon_jquery
          ],
          bg: pl_02 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '바비리스',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          bg: pl_03 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '레이언스',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_04 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '키위미디어',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_05 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '아미 에우제니',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_06 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '리봄 한의원',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_07 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '한국에너지공단',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_08 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '그루터기 유학원',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_09 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '더마틱스 울트라',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_10 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '풀만',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_11 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: 'SIC',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_12 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '강원컨벤션뷰로',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_13 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '바텍 코리아',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_15 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '효성어묵',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_16 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: '대한건선학회',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_17 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: 'Dr.bom',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_18 ,
          txt: '신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는신세계 인터코스는'
        },
        {
          company: 'SPAAAADE',
          name: 'ARCON',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_18 ,
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
        <div className={classNames('project_list_wrap', { 'selected': this.props.dataTo })}>
        <ul className={classNames('project_pop', { 'selected': this.props.dataTo })}>
          {this.projectpop()}
        </ul>
        <div className='close' onClick={()=> {this.props.stateData(null, false)}}></div>
        </div>
      </>
    )
  }
}


export default ProjectList;
