import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <>
       <h3 className="secHead" id="about">Skill</h3>
        <ul className="about_list_ul">
          <li className="about_list_li">
            <div className="aboutList_box">
              <h4 className="aboutjListName">
                HTML / CSS
              </h4>
              <div className="aboutListDesc">
                  <ul>
                    <li>시맨틱 마크업을 준수합니다.</li>
                    <li>반응형 웹 제작에 익숙합니다.</li>
                    <li>CSS 유연한 애니메이션 제작이 가능합니다.</li>
                    <li>다양한 플랫폼 및 브라우저를 지원할 수 있습니다.</li>
                  </ul>
              </div>
            </div>
          </li>
          <li className="about_list_li">
            <div className="aboutList_box">
              <h4 className="aboutjListName">
                JavaScript
              </h4>
              <div className="aboutListDesc">
                  <ul>
                    <li>ECMAScript 5 이후의 자바스크립트 문법에 익숙합니다.</li>
                    <li>jQuery 없이 DOM API를 다루는데 능숙합니다.</li>
                    <li>jQuery 없이 VanillaJs를 사용 가능합니다.</li>
                  </ul>
                </div>
              </div>
          </li>
          <li className="about_list_li">
            <div className="aboutList_box">
              <h4 className="aboutjListName">
                React + View
              </h4>
              <div className="aboutListDesc">
                  <ul>
                    <li>React를 사용하여 다양한 제작이 가능합니다.</li>
                    <li>View 사용하여 다양한 제작이 가능합니다.</li>
                  </ul>
              </div>
            </div>
          </li>
          <li className="about_list_li">
            <div className="aboutList_box">
              <h4 className="aboutjListName">
                Design
              </h4>
              <div className="aboutListDesc">
                  <ul>
                    <li>아름다운 유저 인터페이스 및 애니메이션 구현을 즐깁니다.</li>
                    <li>다양한 플랫폼 및 브라우저를 지원할 수 있습니다.</li>
                  </ul>
              </div>
            </div>
          </li>
          <li className="about_list_li">
            <div className="aboutList_box">
              <h4 className="aboutjListName">
                Communication
              </h4>
              <div className="aboutListDesc">
                  <ul>
                    <li>항상 최신의 기술이 옳다고 여기지 않습니다. 상황에 따라 적절한 선택이 있다고 믿습니다.</li>
                    <li>솔직하며 직설적인 커뮤니케이션을 선호합니다.</li>
                    <li>회사 혹은 팀의 프로세스 및 문화를 개선하거나 바꾸려는 시도를 적극적으로 합니다.</li>
                    <li>업무에 필요하다면 능숙한 분야가 아니더라도 적극적으로 탐색하여 최적의 결과를 낼 수 있도록 노력합니다.</li>
                  </ul>
              </div>
            </div>
          </li>
          <li className="about_list_li">
            <div className="aboutList_box">
              <h4 className="aboutjListName">
                Creatijin
              </h4>
              <div className="aboutListDesc">
                <ul>
                <li>업무에 있어서 계획을 가지고 진행하며 예외상황을 고려하며 작업 합니다.</li>
                <li></li>
                <li>회사 혹은 팀의 프로세스 및 문화를 개선하거나 바꾸려는 시도를 적극적으로 합니다.</li>
                </ul>+
              </div>
            </div>
          </li>
        </ul>
        <h3 className="secHead" id="about">/Skill</h3>
      </>
    )
  }
}


export default About;
