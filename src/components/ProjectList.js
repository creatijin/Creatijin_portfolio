import React, { Component } from 'react';
import pl_01 from '../img/pl_01.png';
import pl_02 from '../img/pl_02.png';
import pl_03 from '../img/pl_03.png';
import pl_04 from '../img/pl_04.png';
import pl_05 from '../img/pl_05.png';
import pl_06 from '../img/pl_06.jpg';
import pl_07 from '../img/pl_07.png';
import pl_08 from '../img/pl_08.png';
import pl_09 from '../img/pl_09.png';
import pl_10 from '../img/pl_10.png';
import pl_11 from '../img/pl_11.png';
import pl_12 from '../img/pl_12.png';
import pl_13 from '../img/pl_13.png';
import pl_14 from '../img/pl_14.png';
import pl_15 from '../img/pl_15.png';
import pl_16 from '../img/pl_16.jpg';
import pl_17 from '../img/pl_17.jpg';
import pl_18 from '../img/pl_18.jpg';
import icon_js from '../img/icon_js.png';
import icon_html from '../img/icon_html.png';
import icon_css from '../img/icon_css.png';
import icon_jquery from '../img/icon_jquery.png';
import icon_link from '../img/broken-link.png';

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
          url:'http://www.shinsegaeintercos.com/',
          bg: pl_01 ,
          txt: '신세계 인터코스 페이지는 XE를 기반으로 제작되었으며 클라이언트의 요구에 따라서 풀 페이지로 상하 슬라이드 방식으로 제작 되었습니다. 장면장면 넘어가는 식으로 연출을 시킴으로써 사용자에게 단계별로 내용을 전달할 수 있게 디자인하여 제작 했습니다.'
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
          url:'http://wheelephant.cafe24.com/',
          bg: pl_02 ,
          txt: '휠리펀트는 아프리카 주민들에게 자전거를 후원해주는 단체로써 사이트 제작당시 사용자에게 컨텐츠의 전달성과 누구나도 쉽게 후원할 수 있는 시스템 연결을 위해서 UX,UI 디자인을 고려하셔 제작했습니다.'
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
          url:'http://www.babylisskorea.com/',
          bg: pl_03 ,
          txt: '유럽 가전제품 유명 브랜드로써 이미 기존에 존재하는 홈페이지를 바탕으로 한국 웹사이트를 오픈하는 형식이기 때문에 디자인적인 제약이 많았으며 제품을 주기적으로 등록하고 제품을 강조하는 레이아웃을 사용함으로써 제품 라인마다 다른 구조를 가지고 있습니다.'
        },
        {
          company: 'SPAAAADE',
          name: '레이언스',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:'http://www.rayence.com/',
          bg: pl_04 ,
          txt: '레이언스 사이트는 유지보수 중이였으며 중간에 페이지 수정을 위주로 했습니다. 일부 스크립트와 HTML구조 CSS등을 보수작업 진행하며 다른 사람이 작업해둔 사이트를 수정하면서 체계적인 구조와 유지보수가 편하게끔 설계해야한다고 생각했습니다.'
        },
        {
          company: 'SPAAAADE',
          name: '키위미디어',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"https://www.kiwimediaco.com/",
          bg: pl_05 ,
          txt: '번역 전문업체 키위미디어 웹사이트를 제작 단계부터 참여했으며 XE 기반으로 제작했습니다. XE를 사용하다보니 편리한 점이 많고 빠르게 웹사이트를 제작 할 수 있었습니다. 플러그인을 사용하여 이메일로 문의사항과 파일 전송 폼까지 구현하여 좋은 경험으로 이어졌습니다.'
        },
        {
          company: 'SPAAAADE',
          name: '아미에우제니',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"http://www.amyeujeny.com/",
          bg: pl_06 ,
          txt: '프로젝트 진행중 참여로 메인,서브 페이지, 제이쿼리를 이용한 애니메이션 구현 등 맡아서 진행 했습니다. 일부 제품의 상세 페이지에는 제품을 강조할 수 있는 parallax 효과를 주었습니다. 추후 유지보수 업무에서 제품 추가 및 수정 작업을 했습니다.'
        },
        {
          company: 'SPAAAADE',
          name: '리봄 한의원',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"http://www.re-bom.com/",
          bg: pl_07 ,
          txt: '리봄 한의원은 이미 완성된 상태에서 유지보수 위주로 진행 되었습니다. XE를 기반으로 만들어졌으며 팝업,페이지 내용교체,추가등 업무를 주로 했습니다. 유지보수를 진행하면서 웹사이트를 제작하는것도 중요하지만 유지보수에도 많은 수고가 필요하며 사이트 제작시 유지보수를 감안하고 제작해야 유지보수가 편하다는걸 알 수 있었습니다. Mobile,Tab,PC 세가지를 해상도를 지원합니다.'
        },
        {
          company: 'SPAAAADE',
          name: '한국에너지공단',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"#",
          bg: pl_08 ,
          txt: '한국에너지공단의 에너지특별회계융자금 웹사이트를 제작했으며 퍼블리싱을 맡아서 작업했으며 입사 초기에 작업을 진행하여 프로젝트 도중에 진행하게 되었습니다. 프로젝트 처음부터 참여한 부분이 아니기 때문에 구조 파악및 회사 업무 스타일 파악도 동시에 이루어졌습니다.'
        },
        {
          company: 'SPAAAADE',
          name: '풀만',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"http://the-fullmann.com/",
          bg: pl_09 ,
          txt: 'FullMan 웹사이트는 유저에게 정보의 가독성과 확실한 정보전달이 중요한 사이트로써 깔끔한 디자인과 글씨체를 신경을 많이 썼습니다.'
        },
        {
          company: 'SPAAAADE',
          name: 'SIC',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"#",
          bg: pl_10,
          txt: ''
        },
        {
          company: 'SPAAAADE',
          name: '강원컨벤션뷰로',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"http://visitgangwon.or.kr/",
          bg: pl_11 ,
          txt: '강원도의 국제회의센터와 강원도의 정보를 담고있는 페이지로써 사용자가 정보를 빨리 전달받을 수 있는구조로 설계 되었습니다. 워드프레스를 기반으로 제작되어 XE와는 다른 기능과 구조를 경험해 볼 수 있었습니다. 워드프레스는 많은 점유율을 차지하고 있는 관리 시스템으로써 유지보수 사이트 의뢰경우 파일 구조를 빠르게 파악해야 하기 때문에 도움이 되었습니다.'
        },
        {
          company: 'SPAAAADE',
          name: 'KB손해보험 컨설팅 App',
          technology: [
              icon_html,
              icon_css,
              icon_js
          ],
          url:"#",
          bg: pl_12 ,
          txt: 'KB손해보험 컨설팅 모바일 어플리케이션의 퍼블리싱을 담당했으며 canvas를 사용한 애니메이션을 수정 및 배치 했습니다. 평소 접하기 힘든 canvas를 사용해봄으로 구조 파악을 할 수 있었고 모르는 부분에 대해서는 즉각적으로 검색등을 통해서 해결할 수 있었습니다.'
        },
        {
          company: 'SPAAAADE',
          name: 'XELF',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"https://xelf.io/",
          bg: pl_13 ,
          txt: 'XELF는 웹 PPT 템플릿 제작 툴로써 그로비스인포텍과 함께 제작 개발하여 1~3차까지 웹 페이지를 제작했습니다. 타 사이트와 다르게 하드코딩으로 작업되었으며, 앞으로 발전할 플렉서블 디스플레이(Flexible Display)의 기기에 대응하기 위해 리사이징에 대비하여 만들어졌습니다. 또한 사용자의 등급에 따라서 여러가지 UI를 적용하여 템플릿을 따로 만들어야했기 때문에 다양한 시각에서 작업을 해야했습니다. 사용자의 입장을 고려하여 최대한 빠르고 애니메이션 작동에 따른 테스트를 해 볼 수 있었습니다.'
        },
        {
          company: 'SPAAAADE',
          name: 'Dr.bom',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"https://bomstore.kr/",
          bg: pl_14,
          txt: '리봄 한의원 한의사들이 모여서 만든 화장품 브랜드로써 아직 유명 브랜드가 아니기 때문에 제품과 기능들이 한눈에 들어오도록 레이아웃과 디자인을 했으며 Mobile,Tab,Pc 세가지 버전을 지원합니다, 그리고 아랍,중국,미국 고객들을 위해서 4개국어 지원하는 사이트를 제작했습니다.'
        },
        {
          company: 'SPAAAADE',
          name: '버드브레인',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"http://creartbot.co.kr/",
          bg: pl_15 ,
          txt: '버드브레인은 코딩합습 로봇으로써 아이들에게 쉽게 접근 가능하고 문의를 언제든 받을 수 있게끔 XE를 커스텀해서 구현해놨으며 반응형 웹 페이지로써 Mobile, Tab, PC 까지 모두 지원합니다.'
        },
        {
          company: 'SPAAAADE',
          name: 'Dr.bom X GONGJIN',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"http://drbom.kr/",
          bg: pl_16 ,
          txt: '닥터봄 한방 화장품의 공진단 라인의 콜라보 홈페이지 제작으로 기존 닥터봄 페이지와는 다르게 공진단의 고급스러운 디자인을 주력으로 만든 사이트 입니다. 제품이 눈에 잘 들어올 수 있게 깔끔한 레이아웃을 선택했고 제품에 기능 및 제품사양을 손쉽게 확인 할 수 있도록 mobile,tab,pc 세가지 해상도를 지원합니다.'
        },
        {
          company: 'SPAAAADE',
          name: '(주)바텍',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"http://www.vatech.co.kr/",
          bg: pl_17 ,
          txt: '바텍 그룹은 자사 계열사 사이트 6개를 동시에 작업하여 레이아웃 부분은 동일하지만 내용이 다르기 때문에 작업시간도 가장 오래 걸리고 서브 페이지의 구조도 조금씩 다른 부분이 있어서 신경을 많이 썼습니다. 대량의 사이트를 동시 작업하기 때문에 실수 할 수 있는 부분이 많았지만 최대한 세심하게 작업했고 주의해야하는 부분을 생각 할 수 있어서 좋았습니다.'
        },
        {
          company: 'SPAAAADE',
          name: 'ARCON',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery
          ],
          url:"http://arcon.or.kr/",
          bg: pl_18 ,
          txt: '문화예술후원단체인 ARCON은 기존 사이트에서 지금 디자인된 사이트로 이전하면서 일반적인 세로형태의 페이지가아닌 가로형태의 페이지로 제작되었습니다. 가로형으로 제작할때 주의할점에 대해서 느꼈습니다. 해상도 크기가 작은 사용자들은 담아야하는 내용이 안보이는 경우가 있기때문에 제작시 주의해야합니다.'
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
        <div className="pop_img" style={{ backgroundImage: `url(${info.bg})` }}>
        </div>
        <div className="pop_txt_wrap">
          <h3>{info.company}</h3>
          <h2><a href={info.url} target="_blank">{info.name}<img className="link_icon" src={icon_link} alt="link_icon" /></a></h2>
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
        <div className='close' onClick={()=> {this.props.stateData(null, false)}}>
          <div className="stick_box">
            <span className="close_stick"></span>
            <span className="close_stick"></span>
          </div>
        </div>
        </div>
      </>
    )
  }
}


export default ProjectList;
