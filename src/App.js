import React, { Component } from 'react';
import MainAnimation from './components/MainAnimation';
import About from './components/About';
import CitiesSlider from './components/Slider';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';

// CSS
import './css/layout.css';
import './css/index.css';
import './css/resize.css';

// img
import line_01 from './img/line_01.png';
import line_03 from './img/line_03.png';
import spaaaade from './img/spaaaadelogo.png';
import slide_img_01 from './img/pc_slider_01.png';
import slide_img_02 from './img/pc_slider_02.png';
import slide_img_03 from './img/pc_slider_03.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      changeTo:false
    }
  }
  
  stateCallBack = (i,v) => {
    this.setState({id:i, changeTo: v})
  }

  render() {
    const slides = [
      {
        site: '신세계 인터코스',
        company: 'SPAAAADE',
        img: slide_img_01
      },
      {
        site: '휠리펀트',
        company: 'SPAAAADE',
        img: slide_img_02,
      },
      {
        site: '바비리스',
        company: 'SPAAAADE',
        img: slide_img_03,
      }
    ];
    const mainContent = {
      title: 'Creatijin',
      subtitle: 'Creative it is nature',
      subtxt: 'PORTFOLIO'
    }
    const contactInfo = [
      {
        infoName: '핸드폰',
        info: '010-3705-0124',
        href: '010-3705-0124'
      },
      {
        infoName: '이메일',
        info: 'newlex0124@gmail.com',
        href: 'newlex0124@gmail.com'
      },
      {
        infoName: '깃허브',
        info: 'github.com/creatijin',
        href: 'https://github.com/creatijin'
      },
      {
        infoName: '티스토리 블로그',
        info: 'creatijin.tistory.com',
        href: 'https://creatijin.tistory.com'
      },
      {
        infoName: '개츠비 블로그',
        info: 'creatijin.netlify.com/',
        href: 'https://creatijin.netlify.com'
      },
      {
        infoName: '인스타그램',
        info: 'www.instagram.com/koguma0124',
        href: 'https://www.instagram.com/koguma0124'
      }
    ];
    return(
      <>
        <div className="section section_00" id="Page1">
          <MainAnimation main={mainContent}/>
        </div>
        <div className="section subSection" id="Page2">
          <h2 className="subSectiontitle">웹의 매력에 빠진 개발자</h2>
          <p className="subSectiontxt">웹 에이전시에서 웹 퍼블리셔와 스크립트쪽을 담당했고 지금은 현재 Fron-end쪽에 관심을 가지고 공부중에 있습니다.<br />새로운것에 대한 도전을 두려워하지 않으며 배움에 있어 높고 낮음이 없다는 생각을 가지고 있습니다.</p>
          <div className="line"><img src={line_03} alt="line_03" /></div>
          <p className="subSectiontxt">빠르게 변화하는 웹 시장을 무작정 따라가기 보다는 적절한 상황에 필요한 기술을 사용하고,<br/>동료들과 원활한 커뮤니케이션으로 업무효율을 높이고자 합니다.</p>
        </div>
        <div className="section section_01" id="Page3">
          <div className="section_inner inner_mh">
            <About />
          </div>
        </div>
        <div className="section subSection" id="Page4">
          <h2 className="subSectiontitle">Work Experience</h2>
          <div className="workListwrap">
            <div className="work_title work_lists">
              <div className="work_logo"><img src={spaaaade} alt="spaaaadelogo" /></div>
              <h4>스페이드컴퍼니</h4>
              <p>웹 에이전시</p>
            </div>
            <div className="work_contant work_lists">
              <h4>Work</h4>
              <p>
                웹 에이전시에서 퍼블리셔로써 전반적인 웹 사이트 제작 업무를 맡아서 진행 했습니다 기획자,디자이너와 함께 커뮤니케이션을 통하여 원활한 업무환경을 만들었습니다 그 외에도 사내 쇼핑몰 유지보수 및 사내 사업도 참여 했습니다. 
              </p>
              <h4>Tech Stack</h4>
              <p>
                Html, CSS, SCSS, JavaScript, jQuery, cafe24, 고도몰, WordPress, XE, 그누보드
              </p>
            </div>
          </div>
        </div>
        <div className="section section_02" id="Page5">
          <CitiesSlider slides={slides} stateData={this.stateCallBack}/>
        </div>
        <div className="section section_03" id="Page6">
          <ProjectList stateData={this.stateCallBack} dataId={this.state.id} dataTo={this.state.changeTo}/>
        </div>
        <div className="section subSection" id="Page7">
          <h2 className="subSectiontitle">CREATIVITY + SEUNGJIN = Creatijin</h2>
          <p className="subSectionttalk color_pink">
            "Creativity is contagious, pass it on"<br/><span>"창의력은 감염되는 것이다 전달하되도록 하자 창작은 새로운것을 낳는 것"</span><br/>- Albert Einstein -
          </p>
          <div className="line line_s_01">
            <img src={line_01} alt="line_01" />
          </div>
          <p className="subSectiontxt">
            아인슈타인의 말 처럼 창의력은 전달된다고 믿습니다.<br/>업무에도 창의력이 필요하다고 생각합니다. 창의력의 뜻을 담은 단어와 이름을 합쳐<br/>언제나 창의력을 전달 할 수 있는 사람이 되고자 합니다.
          </p>
        </div>
        <div className="section" id="Page9">
          <Contact data={contactInfo}/>
        </div>
      </>
    )
  }
}


export default App;
