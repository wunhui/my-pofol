import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { delay } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger); // ScrollTrigger Trigger 호출
const About = () => {
    const titleTextRef = useRef(null);
    useEffect(() => {
        const titles = document.querySelectorAll('.text');
        const boxes = document.querySelectorAll('.about-box');
        let tl = gsap.timeline();
        ScrollTrigger.matchMedia({
            "(max-width: 1280px)": function() {
                tl.fromTo(titles, {opacity: 0, transform: 'translateY(-5px)'}, {
                    opacity: 1,
                    transform: 'translateY(0)',
                    duration: 0.5,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: titles[0], // 첫 번째 요소를 기준으로 설정
                        start: "top 80%",
                        end: 'bottom 50%',
                        scrub: true
                    },
                })
                tl.fromTo(boxes, {opacity: 0, x: -100}, {
                    opacity: 1,
                    x: 0,
                    duration: 2,
                    stagger: 1,
                    scrollTrigger: {
                        trigger: boxes[0], // 첫 번째 요소를 기준으로 설정
                        start: "top center",
                        end: 'bottom 30%',
                        scrub: true,
                    },
                });
            },
            "(min-width: 1280px)": function() {
                tl.fromTo(titles, {opacity: 0, y: -10}, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: titles[0], // 첫 번째 요소를 기준으로 설정
                        start: "top 80%",
                        end: 'bottom 30%',
                        scrub: true
                    },
                })
                tl.fromTo(boxes, {opacity: 0, y: 50, x: 0}, {
                    opacity: 1,
                    y: 0,
                    duration: 2,
                    stagger: 1,
                    scrollTrigger: {
                        trigger: boxes[0], // 첫 번째 요소를 기준으로 설정
                        start: "top 70%",
                        end: 'bottom 50%',
                        scrub: true
                    },
                });
            }
        })
    }, []);
    return (
        <AboutWrap className='about'>
            <TitleBox ref={titleTextRef}>
                <h3 className='text'>A</h3>
                <h3 className='text'>B</h3>
                <h3 className='text'>O</h3>
                <h3 className='text'>U</h3>
                <h3 className='text'>T</h3>
            </TitleBox>
            <AboutTextBox>
                <div>
                    <p className='text'>언</p>
                    <p className='text'>제</p>
                    <p className='text mr8'>나</p>
                    <p className='text'>도</p>
                    <p className='text'>전</p>
                    <p className='text'>하</p>
                    <p className='text mr8'>며</p>
                    <p className='text'>성</p>
                    <p className='text'>장</p>
                    <p className='text'>하</p>
                    <p className='text'>는</p>
                </div>
                <div>
                    <p className='text'>웹</p>
                    <p className='text'>퍼</p>
                    <p className='text'>블</p>
                    <p className='text'>리</p>
                    <p className='mr8 text'>셔</p>
                    <p className='text'>황</p>
                    <p className='text'>웅</p>
                    <p className='text'>희</p>
                    <p className='text'>입</p>
                    <p className='text'>니</p>
                    <p className='text'>다.</p>
                </div>
            </AboutTextBox>
            <ul>
                <li className='about-box'>
                    <div className='title-box'>
                        <p>성장 가능성</p>
                    </div>
                    <div className='desc-box'>
                        <p>
                            React, Vue 등 다양한 프레임 워크 및 라이브러리 경험이 있으며
                            웹 접근성과 표준, 크로스 브라우징을 고려한 작업에 관한 경험도 있습니다.
                        </p>
                    </div>
                </li>
                <li className='about-box'>
                    <div className='title-box'>
                        <p>커뮤니케이션 능력</p>
                    </div>
                    <div className='desc-box'>
                        <p>
                            디자이너 및 개발자들과 원할한 커뮤니케이션이 가능하며
                            협업을 통한 능동적인 업무진행이 가능합니다.
                        </p>
                    </div>
                </li>
                <li className='about-box'>
                    <div className='title-box'>
                        <p>도전적인</p>
                    </div>
                    <div className='desc-box'>
                        <p>
                            다향한 프레임워크 및 라이브러리를 사용해보려고 합니다.
                            최근에는 typescript를 사용한 프로젝트를 진행하였으며, 
                            해당 포토폴리오에는 gsap를 사용했습니다.
                        </p>
                    </div>
                </li>
            </ul>
        </AboutWrap>
  );
};

export default About;

const AboutWrap = styled.section`
  margin: 100px 0;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  ul {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    .about-box {
        transition: all .5s linear;
        background-color: #666;
        padding: 20px;
        border-radius: 12px;
        .title-box {
            margin-bottom: 8px;
            p {
                font-weight: 700;
            }
        }
        .desc-box {
            p{
                line-height: 150%;
                font-size: 14px;
                color: rgba(255, 255, 255, .6);
            }
            padding-left: 12px;
            &:before {
                content: "-";
                color: rgba(255, 255, 255,.6);
                position: absolute;
                left: 20px;
            }
        }
    }
  }
  @media (min-width: 768px) {
      ul {
            gap: 16px;
            .about-box{
                .title-box {
                    p{
                        font-size: 20px;
                    }
                }
            }
            .desc-bpx {
                p{
                    font-size: 18px;
                }
            }
        }
    }
    @media (min-width: 1280px) {
        padding-bottom: 120px;
        ul {
            margin-top: 60px;
            flex-direction: row;
            .about-box{
                width: calc(100% / 3);
                padding: 30px;
                .title-box {
                    p{
                        font-size: 24px;
                    }
                }
            }
            .desc-bpx {
                p{
                    font-size: 20px;
                }
            }
        }
    }
`
const TitleBox = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    
    h3 {
        font-size: 30px;
        font-weight: 700;
        font-family: "Poppins",sans-serif;
    }
    @media (min-width: 768px) {
        h3 {
            font-size: 40px;
        }
    }
    @media (min-width: 1280px) {
        h3 {
            font-size: 60px;
        }
    }
`

const AboutTextBox = styled.div`
    position: relative;
    margin-top: 20px;
    div {
        display: flex;
        justify-content: center;
        width: 100%;
        &:not(&:last-child) {
            margin-bottom: 8px;
        }
        p {
            font-size: 16px;
            font-weight: 400;
            font-family: "Noto Sans Kr",sans-serif;
            &.mr8 {
                margin-right: 8px;
            }
        }
    }
    @media (min-width: 768px) {
        div{
            p {
                font-size: 18px;
            }
        }
    }
    @media (min-width: 1280px) {
        margin-top: 32px;
        div{
            p {
                font-size: 20px;
            }
        }
    }
`