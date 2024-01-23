import styled from "styled-components";

function Intro() {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 60px;
    @media screen and (max-width: 412px) {
      margin: 150px 30px;
    }
  `;

  const H1 = styled.h1`
    font-size: 3.7rem;
    font-family: var(--font-2);
    font-weight: 900;
    color: var(--color-red);
    @media screen and (max-width: 412px) {
      font-size: 1.2rem;
      width: inherit;
    }
  `;

  const P = styled.p`
    margin-top: 30px;
    max-width: 710px;
    font-size: 2.2rem;
    font-family: var(--font-2);
    color: var(--color-grey-1);

    & span {
      font-size: 2.3rem;
      color: var(--color-blue);
    }
    @media screen and (max-width: 412px) {
      margin-top: 15px;
      font-size: 1rem;
      & span {
        font-size: 1rem;
      }
    }
  `;
  return (
    <Div id="home">
      <H1>Hi. I'm Deepak, a web Developer based on India</H1>
      <P>
        Hello! I'm Work in Frontend developer with{" "}
        <span>1 year experience</span> in the field.I possess strong foundation
        in front-end and learn some back-end to became a{" "}
        <span>FullStack developer</span>. I work on user interface. Check out
        some of my work in the Projects section.
      </P>
    </Div>
  );
}

export default Intro;
