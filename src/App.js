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
      subtxt: '포트폴리오'
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
        infoName: '블로그',
        info: 'creatijin.tistory.com',
        href: 'https://creatijin.tistory.com'
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
          <h2 className="subSectiontitle">우리가하는 일</h2>
          <p className="subSectiontxt">반응적인 디자인은 Full Bundle의 핵심입니다. 우리는 보는 즐거움뿐 아니라 사용의 즐거움도 창조해내는 것에 자부심을 가지고 있습니다. 번개가 빠른 웹 사이트에서부터 독특한 브랜딩에 이르기까지 모든 제작물은 고객의 경험에 강력하고 지속적인 영향을 미칩니다.</p>
          <div className="line"><img src={line_03} alt="line_03" /></div>
          <p className="subSectiontxt">프로젝트는 전적으로 고유합니다. 아무리 다른 여행이라도 목적지는 항상 변함이 없습니다. 정말 놀라운 일입니다. 최종 제품이 눈에 띄는 것은 아닙니다. 그것은 시간의 시험입니다.</p>
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
              <h4>Description</h4>
              <p>
                회사에서 관리하고 있는 유지보수 홈페이지 보수와 클라이언트가 원하는 디자인
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
          <h2 className="subSectiontitle">CREATIVE + SEUNGJIN = Creatijin</h2>
          <p className="subSectiontxt">
            
          </p>
          <div className="line line_s_01">
            <img src="/contents/images/line_s_01.png" alt="line_s_01" />
          </div>
          <p className="subSectionttalk color_pink">
            "독창성에 힘 입어 비 전통적인 방식에서 영감을 얻어,<br/> 우리는 당신에게 맞는 솔루션을 만들 것입니다."
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
