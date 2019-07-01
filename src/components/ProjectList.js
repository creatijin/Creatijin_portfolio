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
          txt: 'XE를 기반으로 만들었고 페이지 별로 원 페이지 슬라이드로 한 장면장면 넘어가는 카드형식의 느낌을 주었습니다. 플러그인을 커스텀 했으며'
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
          txt: '유럽 가전제품 유명 브랜드로써 이미 기존에 존재하는 홈페이지를 바탕으로 한국 웹사이트를 오픈하는 형식이기 때문에 디자인적인 제약이 많았으며 제품을 주기적으로 등록하고 제품을 강조하는 레이아웃을 사용함으로써 제품 라인마다 다른 구조를 가지고 있습니다.'
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
        txt: '레이언스 사이트는 유지보수 중이였으며 중간에 페이지 수정을 위주로 했습니다. 일부 스크립트와 HTML구조 CSS등을 보수작업 진행하며 다른 사람이 작업해둔 사이트를 수정하면서 체계적인 구조와 유지보수가 편하게끔 설계해야한다고 생각했습니다.'
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
          txt: '번역 전문업체 키위미디어 웹사이트를 제작 단계부터 참여했으며 XE 기반으로 제작했습니다. XE를 사용하다보니 편리한 점이 많고 빠르게 웹사이트를 제작 할 수 있었습니다. 플러그인을 사용하여 이메일로 문의사항과 파일 전송 폼까지 구현하여 좋은 경험으로 이어졌습니다.'
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
          txt: '프로젝트 진행중 참여로 메인,서브 페이지, 제이쿼리를 이용한 애니메이션 구현 등 맡아서 진행 했습니다. 일부 제품의 상세 페이지에는 제품을 강조할 수 있는 parallax 효과를 주었습니다. 추후 유지보수 업무에서 제품 추가 및 수정 작업을 했습니다.'
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
          txt: '리봄 한의원은 이미 완성된 상태에서 유지보수 위주로 진행 되었습니다. XE를 기반으로 만들어졌으며 팝업,페이지 내용교체,추가등 업무를 주로 했습니다. 유지보수를 진행하면서 웹사이트를 제작하는것도 중요하지만 유지보수에도 많은 수고가 필요하며 사이트 제작시 유지보수를 감안하고 제작해야 유지보수가 편하다는걸 알 수 있었습니다.'
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
          txt: '한국에너지공단의 에너지특별회계융자금 웹사이트를 제작했으며 퍼블리싱을 맡아서 작업했으며 입사 초기에 작업을 진행하여 프로젝트 도중에 진행하게 되었습니다. 프로젝트 처음부터 참여한 부분이 아니기 때문에 구조 파악및 회사 업무 스타일 파악도 동시에 이루어졌습니다.'
        },
        {
          company: 'SPAAAADE',
          name: 'KB손해보험',
          technology: [
              icon_html,
              icon_css,
              icon_js,
              icon_jquery,
              icon_react
          ],
          bg: pl_09 ,
          txt: 'KB손해보험 컨설팅 모바일 어플리케이션의 퍼블리싱을 담당했으며 canvas를 사용한 애니메이션을 수정 및 배치 했습니다. 평소 접하기 힘든 canvas를 사용해봄으로 구조 파악을 할 수 있었고 모르는 부분에 대해서는 즉각적으로 검색등을 통해서 해결할 수 있었습니다.'
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
          txt: ''
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
          txt: 'FullMan 웹사이트는 유저에게 정보의 가독성과 확실한 정보전달이 중요한 사이트로써 깔끔한 디자인과 글씨체를 신경을 많이 썼습니다.'
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
          txt: '강원도 '
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
          txt: '바텍 그룹은 자사 계열사 사이트 6개를 동시에 작업하여 레이아웃 부분은 동일하지만 내용이 다르기 때문에 작업시간도 가장 오래 걸리고 서브 페이지의 구조도 조금씩 다른 부분이 있어서 신경을 많이 썼습니다. 대량의 사이트를 동시 작업하기 때문에 실수 할 수 있는 부분이 많았지만 최대한 세심하게 작업했고 주의해야하는 부분을 생각 할 수 있어서 좋았습니다.'
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
          txt: ''
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
          txt: '리봄 한의원의 미용 제품 홍보 웹사이트로 제품을 효과적으로 보여줘야해서 제품 라인별로 소개 페이지를 제작해야 했고 다 다른 레이아웃으로 작업을 했습니다. 그리고 한국어 뿐만 아니라 중국어, 영어까지 총 3개국어 사이트를 제작해야하는 과정에서 중국어로 사이트 제작에 주의 해야하는 부분을 경험으로 체험 할 수 있었습니다.'
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
          txt: ''
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
