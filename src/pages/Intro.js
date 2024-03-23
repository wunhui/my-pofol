import gsap from 'gsap';
import React, { useEffect, useRef} from 'react'; 
import styled from 'styled-components';
const Intro = () => {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    const lineRef = useRef(null);
    const boxRef = useRef(null);
    useEffect(() => {
        let tl = gsap.timeline(); //순서대로 gsap 사용하기
        tl.fromTo(textRef1.current, 1, {transform: 'translateY(-10px)', opacity: 0}, {transform: 'translateY(0)', opacity: 1})
        tl.fromTo(textRef2.current, 1, {transform: 'translateY(-10px)', opacity: 0}, {transform: 'translateY(0)', opacity: 1})
        tl.fromTo(textRef3.current, 1, {transform: 'translateY(-10px)', opacity: 0}, {transform: 'translateY(0)', opacity: 1})
        tl.to(lineRef.current, 1, {width: "100%"})
        tl.fromTo(boxRef.current, 1, {transform: 'translateX(240px)'}, {transform: 'translateX(0)', opacity: 1, delay: .5})
    }, [])
  return (
  <IntroWrap>
    <TextBox className="about-text">
         <p ref={textRef1}>I'm</p>
         <p ref={textRef2}>Web</p>
         <div className='flex-box'>
            <p ref={textRef3}><span>Develop</span></p>
            <div ref={lineRef} className='line'/>
         </div>
    </TextBox>
    <TextBox ref={boxRef} className="about-text2">
         <p>DO YOU WANT TO</p>
         <p>FINE OUT ABOUT ME?</p>
    </TextBox>
    <MouseIcon />
  </IntroWrap>
  );
};

export default Intro;
const sizes = {
    desktop: "1200px",
    tablet: "768px",
    mobile: "360px",
};
const media = {
    desktop: `(max-width: ${sizes.desktop})`,
    tablet: `(max-width: ${sizes.tablet})`,
    mobile: `(max-width: ${sizes.mobile})`,
};

const IntroWrap = styled.section`
  margin: 0 auto;
  padding: 120px 0 0;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
`

const TextBox = styled.div`
    width: 100%;
    text-align: left;
    font-size: 45px;
    font-weight: 900;
    &.about-text {
        p {
            position: relative;
            align-items: center;
            font-family: Poppins, sans-serif !important;
        }
        .flex-box {
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            .line {
                margin-left: 12px;
                width: 0;
                height: 1px;
                background-color: #fff;
            }
        }
    }
    &.about-text2{
        padding-top: 60px;
        letter-spacing: -0.75pt;
        line-height: 150%;
        text-align: right;
        font-size: 18px;
        font-family: "Noto Sans KR", sans-serif;
    }
    @media (min-width: 768px) {
        display: inline-block;
        &.about-text {
            vertical-align: top;
            width: 100%;
        }
        &.about-text2{
            width: auto;
            float: right;
            margin-top: -98px;
            p:first-child {
                background-color: #000;
            }
        }
    }
    @media (min-width: 1280px) {
        &.about-text {
            p {
                font-size: 60px;
            }
        }
        &.about-text2 {
            margin-top: -107px;
            p {
                font-size: 20px;
            }
        }
    }
`

const MouseIcon = styled.i`
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
    bottom: 50px;
    opacity: 0;
    transform: rotate(180deg);
    animation: opacity 1.5s 5s linear forwards;
    animation-iteration-count: infinite;
    @media (min-width: 768px) {
        width: 70px;
        height: 70px;
        left: 50%;
        transform: translateX(-50%);
    }
    @keyframes opacity {
        0% {
            transform: translateY(-10px) rotate(180deg);
           opacity: 0;
        }
        100% {
            transform: translateY(0) rotate(180deg);
            opacity: 1;
        }
    }
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 50%;
        background: url("/images/mouse.png") no-repeat center / contain;
    }
`