import styled from "styled-components";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Maquee from "./pages/Maquee";
import Intro from './pages/Intro';
import { useEffect, useState } from "react";
import Portfolio from './pages/Portfolio';
function App() {
  let [ alert, alertSet ] = useState(true);
  useEffect(()=>{
    let timer = setTimeout(()=>{ alertSet(false) }, 7000);
    return ()=>{ clearTimeout(timer) }
  });
  return (
    <AppWrap 
      className={alert && "active"}
    >
      <Intro />
      <About />
      <MaqueeSection>
        <Maquee baseVelocity={-5}>
          HWANGWUNGHUI PORTFOLIO
        </Maquee>
        <Maquee baseVelocity={5}>
          HWANGWUNGHUI PORTFOLIO
        </Maquee>
      </MaqueeSection>
      <Skill />
      <Portfolio />
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  &.active {
    position: fixed;
    overflow: hidden;
  }
`
const MaqueeSection = styled.div`
  opacity: 0.5;
  position: fixed;
  left: 0;
  top: 60%;
  transform: translateY(-60%);
  z-index: -1;
  div:first-child {
    margin-bottom: 20px;
  }
`
