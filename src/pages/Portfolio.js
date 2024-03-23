import React, { useEffect, useRef} from 'react';
// utils
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import styled from 'styled-components';
import workList from '../api/work.json';

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger Trigger 호출
const Portfolio = () => {
  const boxRef2 = useRef(null);
useEffect(() => {
    const titles = document.querySelectorAll('.title-item');
    const boxs = document.querySelectorAll('.portfolio-item');
    let tl = gsap.timeline();
    tl.fromTo(titles, {opacity: 0, transform: 'translateY(-10px)'}, {
      opacity: 1,
      transform: 'translateY(0)',
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
          trigger: titles[0], // 첫 번째 요소를 기준으로 설정
          end: 'bottom 70%',
          scrub: true
      },
  });
  boxs.forEach((el) => {
    tl.fromTo(el, {opacity: 0, y: -50}, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 1,
      scrollTrigger: {
          trigger: el, // 첫 번째 요소를 기준으로 설정
          start: "top 100%",
          end: 'bottom 60%',
          scrub: true
      },
    });

  })
  }, []);

  return (
    <PortfolioWrap>
      <div className='portfolio-title-box'>
        <h3 className='title-item'>P</h3>
        <h3 className='title-item'>O</h3>
        <h3 className='title-item'>R</h3>
        <h3 className='title-item'>T</h3>
        <h3 className='title-item'>F</h3>
        <h3 className='title-item'>O</h3>
        <h3 className='title-item'>L</h3>
        <h3 className='title-item'>I</h3>
        <h3 className='title-item'>O</h3>
      </div>
      <ul className='portfolio-list' ref={boxRef2}>
        {
          workList.map((item) => {
            return (
              <li className='portfolio-item'>
                <a href={item.link} className='portfolio-box'>
                  <figure className='img-box'>
                    <img src={`/images/${item.img}`} />
                  </figure>
                  <div>
                  <div className='title-box'>
                    <span className='num'>({item.id + 1})</span>
                    <p className='title'>{item.title}</p>
                  </div>
                  <div className='desc-box'>
                    <p className='desc'>
                      {item.desc}
                    </p>
                    <div className='hash-tags'>
                      {
                        item.tags.map((item, index) => {
                          return (
                            <span key={item.id} className='tag'>#{item.title}</span>
                          )
                        })
                      }
                    </div>
                  </div>
                  </div>
                </a>
              </li>
            )
          })
        }
      </ul>
  </PortfolioWrap>
  );
};

export default Portfolio;

const PortfolioWrap = styled.section`
  width: 100%;
  margin-top: 120px;
  padding-bottom: 120px;
  .portfolio-title-box {
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
    h3 {
      text-align: center;
      font-size: 30px;
      font-weight: 700;
    }
  }
  .portfolio-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .portfolio-item {
      transition: all 0.5 linear;
      .portfolio-box {
        .img-box {
          width: 100%;
          height: auto;
          padding: 10px;
          border-radius: 10px;
          background-color: #fff;
            img {
              width: 100%;
              height: 200px;
              border-radius: 10px;
              object-fit: cover;
              object-position: top center;
            }
          }
        .title-box{
          position: relative;
          padding-top: 15px;
          margin-top: 20px;
          .num{
            position: absolute;
            top: 0;
            font-size: 10px;
          }
          .title{
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 1pt;
          }
        }
        .desc-box {
          .desc{
            font-size: 13px;
            margin-top: 8px;
          }
          .hash-tags{
            margin-top: 12px;
            span{
              margin: 0 2px;
              font-size: 11px;
              color: rgba(255, 255, 255, .5);
              display: inline-block;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
  .portfolio-title-box {
    h3 {
      font-size: 40px;
    }
  }
  .portfolio-list {
    display: flex;
    flex-direction: column;
    .portfolio-item {
      padding: 40px 0;
      &:not(&:last-child) {
        border-bottom: 1px solid #fff;
      }
      transition: all 0.5 linear;
      .portfolio-box {
        display: flex;
        gap: 20px;
        .img-box {
          width: calc((100% / 2) - 10px);
          height: auto;
          padding: 20px;
          background-color: #fff;
            img {
              height: 250px;
            }
          }
          & > div {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: calc((100% /2) - 10px);
          }
        .title-box{
          position: relative;
          display: flex;
          align-items: center;
          padding-top: 0;
          margin-top: 0;
          gap: 12px;
          .num{
            position: relative;
            font-size: 14px;
          }
          .title{
            font-size: 35px;
            font-weight: 700;
            letter-spacing: 1pt;
          }
        }
        .desc-box {
          .desc{
            font-size: 18px;
          }
          .hash-tags{
            margin-top: 13px;
            span{
              margin: 0 4px;
              font-size: 11px;
            }
          }
        }
      }
    }
  }
  }
  @media (min-width: 1268px) {}
`