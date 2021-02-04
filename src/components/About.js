import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <>
       <h3 className="secHead" id="about">Skills</h3>
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
                    <li>SCSS 사용으로 CSS에 가독성을 향상 가능합니다.</li>
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
                TypeScript
              </h4>
              <div className="aboutListDesc">
                  <ul>
                    <li>TypeScript의 기본 타입, 객체 타입, 기타 타입에 대해서 이해하고 있습니다.</li>
                  </ul>
                </div>
              </div>
          </li>
          <li className="about_list_li">
            <div className="aboutList_box">
              <h4 className="aboutjListName">
                React
              </h4>
              <div className="aboutListDesc">
                  <ul>
                    <li>React를 사용하여 웹 제작이 가능합니다.</li>
                    <li>React의 Class문법과 Hook문법 사용이 가능합니다.</li>
                    <li>React 개발환경 구축에 관심을 가지고 학습중입니다.</li>
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
                    <li>아름답고 편한 유저 인터페이스 및 애니메이션 구현을 선호합니다.</li>
                    <li>GTQ 1급과 포토샵,일러스트 작업이 가능합니다.</li>
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
                Blog / Conference
              </h4>
              <div className="aboutListDesc">
                <ul>
                  <li>평소 공부하거나 관심있는 분야에 대해서 정리하고 공유하기를 즐겨합니다.</li>
                  <li>컨퍼런스에 참여하여 웹 시장의 흐름과 다양한 기술에 대해서 관심을 가집니다.</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <h3 className="secHead" id="about">/Skills</h3>
      </>
    )
  }
}


export default About;
