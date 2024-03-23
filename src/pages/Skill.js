import React, { useEffect, useRef} from 'react';
// utils
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import styled from 'styled-components';
gsap.registerPlugin(ScrollTrigger); // ScrollTrigger Trigger 호출
const Skill = () => {
  const boxRef2 = useRef(null);
useEffect(() => {
  const titles = document.querySelectorAll('.skill-title');
  const boxs = document.querySelectorAll('.skill-item');
  const icons = document.querySelectorAll('.down');
  const icons2 = document.querySelectorAll('.down2');
    let tl = gsap.timeline();
    tl.fromTo(titles, {opacity: 0, transform: 'translateY(-10px)'}, {
      opacity: 1,
      transform: 'translateY(0)',
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
          trigger: titles[0],
          end: 'bottom 80%',
          scrub: true
      },
  });
    tl.fromTo(boxs, {opacity: 0, y: -50}, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 1,
      scrollTrigger: {
          trigger: boxs, // 첫 번째 요소를 기준으로 설정
          start: "top 80%",
          end: 'bottom 50%',
          scrub: true,
      },
    });
    tl.fromTo(icons, {opacity: 0, y: -10, }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 1,
      scrollTrigger: {
          trigger: icons, // 첫 번째 요소를 기준으로 설정
          start: "top 100%",
          end: 'bottom 70%',
          scrub: true
      },
    });
    tl.fromTo(icons2, {opacity: 0, y: -10, }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 1,
      scrollTrigger: {
          trigger: icons2, // 첫 번째 요소를 기준으로 설정
          start: "top 100%",
          end: 'bottom 70%',
          scrub: true
      },
    });
  }, []);

  return (
    <SkillWrap>
      <div>
        <h3 className='skill-title'>S</h3>
        <h3 className='skill-title'>K</h3>
        <h3 className='skill-title'>I</h3>
        <h3 className='skill-title'>L</h3>
        <h3 className='skill-title'>L</h3>
      </div>
      <ul className='skill-list' ref={boxRef2}>
        <li className='skill-item'>
          <div className='active-box'>
            <p>Front-End</p>
            <div>
            <ul className='text-list'>
              <li className='text-item'>웹 접근성, 웹 표준, 크로스 브라우징을 고려하여 작업이 가능합니다.</li>
              <li className='text-item'>반응형, 적응형 웹 제작이 가능합니다.</li>
              <li className='text-item'>Html, Css, Sass, styled-components를 이용한 퍼블리싱이 가능합니다.</li>
              <li className='text-item'>공통 Component 퍼블리싱 가능합니다.</li>
              <li className='text-item'>Javascript & Jquery를 이용한 동적인 웹 구현이 가능합니다.</li>
              <li className='text-item'>Vue, React 등 프레임워크 및 라이브러리에 대한 지식 있습니다.</li>
            </ul>
            <ul className='icon-list'>
              <li className="icon-item down">
                <div>
                  <img src='/images/icon_html.png' />
                </div>
                  <span>HTML</span>
              </li>
              <li className="icon-item down">
                <div>
                  <img src='/images/icon_css.png' />
                </div>
                  <span>CSS</span>
              </li>
              <li className="icon-item down">
                <div>
                  <img src='/images/icon_js.png' />
                </div>
                  <span>Javascript</span>
              </li>
              <li className="icon-item down">
                <div>
                  <img src='/images/icon_sass.png' />
                </div>
                  <span>Sass</span>
              </li>
              <li className="icon-item down">
                <div>
                  <img src='/images/icon_vue.png' />
                </div>
                  <span>Vue</span>
              </li>
              <li className="icon-item down">
                <div>
                  <img src='/images/icon_react.png' />
                </div>
                  <span>React</span>
              </li>
            </ul>
            </div>
          </div>
        </li>
        <li className='skill-item'>
          <div className='active-box'>
            <p>Tools</p>
            <div>
              <ul className='text-list'>
                <li className='text-item'>Git, Sourcetree를 활용하여 github, gitlab 저장소에 형상 관리를 할 수 있습니다.</li>
                <li className='text-item'>slack, jira를 이용한 협업이 가능합니다.</li>
              </ul>
              <ul className='icon-list'>
                <li className="icon-item down2">
                  <div>
                    <img src='/images/icon_vscode.png' />
                  </div>
                    <span>VsCode</span>
                </li>
                <li className="icon-item down2">
                  <div>
                    <img src='/images/icon_git.png' />
                  </div>
                    <span>Git</span>
                </li>
                <li className="icon-item down2">
                  <div>
                    <img src='/images/icon_github.png' />
                  </div>
                    <span>Github</span>
                </li>
                <li className="icon-item down2">
                  <div>
                    <img src='/images/icon_gitlab.png' />
                  </div>
                    <span>Gitlab</span>
                </li>
                <li className="icon-item down2">
                    <div>
                      <img src='/images/icon_slack.png' />
                    </div>
                    <span>Slack</span>
                </li>
                <li className="icon-item down2">
                    <div>
                      <img src='/images/icon_jira.svg' />
                    </div>
                    <span>Jira</span>
                </li>
                <li className="icon-item down2">
                    <div>
                      <img src='/images/icon_sourcetree.svg' />
                    </div>
                    <span>Sourcetree</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
  </SkillWrap>
  );
};

export default Skill;

const SkillWrap = styled.section`
  font-family: "Noto Sans Kr";
  width: 100%;
  & > div {
    display: flex;
    justify-content: center;
    h3 {
      font-size: 30px;
      font-weight: 700;
      text-align: center;
    }
  }
  .skill-list{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    .skill-item {
      transition: all .5s linear;
      padding: 50px 0;
      border-bottom: 1px solid #fff;
      .active-box{
        p{
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .text-list{
          margin-bottom: 20px;
          .text-item {
            position: relative;
            padding-left: 12px;
            margin-bottom: 10px;
            line-height: 120%;
            color: rgba(255, 255, 255, .6);
            &:before {
              content: "-";
              position: absolute;
              left: 0;
              top: 0;
              color:  rgba(255, 255, 255, .6);
            }
          }
        }
        .icon-list{
          transition: all .5s linear;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          li {
            position: relative;
            width: calc((100% / 3) - 8px);
            height: 0;
            padding-top: calc((100% / 3) - 8px);
            background-color: #666;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            transition: all 1s linear;
            &:hover {
              span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: block;
              }
              img {
                opacity: 0;
              }
            }
            span {
              display: none;
              font-weight: 700;
            }
            div {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              img{
                display: inline-block;
                width: 5vw;
                height: 5vw;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    & > div {
      h3 {
        font-size: 40px;
      }
    }
    .skill-list{
      gap: 20px;
      .skill-item {
        border-bottom: 1px solid #fff;
        .active-box{
          & > div {
            display: flex;
            justify-content: space-between;
            gap: 20px;
          
          }
          p{
            font-size: 42px;
          }
          .text-list{
            width: calc((100% / 2) - 10px);
            .text-item {
              font-size: 16px;
            }
          }
          .icon-list{
            width: calc((100% / 2) - 10px);
            gap: 20px;
            li {
              position: relative;
              width: calc((100% / 3) - 14px);
              height: 0;
              padding: 0;
              padding-top: calc((100% / 3) - 14px);
              span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
              div {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                img{
                  width: 50px;
                  height: 50px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    & > div {
      h3 {
        font-size: 60px;
      }
    }
    .skill-list{
      gap: 40px;
      .skill-item {
        border-bottom: 1px solid #fff;
        .active-box{
          & > div {
            display: flex;
            justify-content: space-between;
            gap: 40px;
          
          }
          p{
            font-size: 60px;
          }
          .text-list{
            width: calc((100% / 2) - 20px);
            .text-item {
              font-size: 20px;
            }
          }
          .icon-list{
            width: calc((100% / 2) - 20px);
            gap: 20px;
            li {
              position: relative;
              width: calc((100% / 4) - 16px);
              height: 0;
              padding: 0;
              padding-top: calc((100% / 4) - 16px);
              span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
              div {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                img{
                  width: 50px;
                  height: 50px;
                }
              }
            }
          }
        }
      }
    }
  }
`