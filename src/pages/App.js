import styled from "styled-components";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Maquee from "./pages/Maquee";
import { motion, useScroll } from 'framer-motion';

function App() {
  return (
    <AppWrap 
    >
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
      <About />
      <About />
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  padding: 20px;
`
const MaqueeSection = styled.div`
  opacity: 0.5;
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  div:first-child {
    margin-bottom: 20px;
  }
`
