import styled from "styled-components";
import Nav from "../Compontents/Nav";
import Intro from "../Compontents/Intro";
import Skills from "../Compontents/Skills";
import Projects from "./../Compontents/Projects";
import Contact from "../Compontents/Contact";
import GobalStyle from "../style/GobalStyle";

function Home() {
  const HomeStyle = styled.div`
    display: grid;
    grid-template-rows: 10vh 90vh 50vh 1fr 30vh;

    @media screen and (max-width: 412px) {
      /* display: grid;
      grid-template-rows: 10vh 60vh 90vh 1fr 30vh; */
      display: flex;
      flex-direction: column;
      max-width: 412px;
    }
  `;

  return (
    <>
      <GobalStyle />
      <HomeStyle>
        <Nav />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </HomeStyle>
    </>
  );
}

export default Home;
