/* eslint-disable react/jsx-key */
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoSass,
} from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SiTailwindcss } from "react-icons/si";

const Continer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 1fr 10vh;
  margin: 100px 60px;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 412px) {
    display: flex;
    flex-direction: column;
    margin: 25px 10px;
  }
`;
const H2 = styled.h1`
  grid-column: 1/-1;
  text-align: center;
  font-family: var(--font-1);
  font-size: 3rem;
  color: var(--color-grey-1);
  letter-spacing: 2px;
  @media screen and (max-width: 412px) {
    font-size: 1.2rem;
  }
`;

const Div = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 50px;
  justify-content: center;
  @media screen and (max-width: 412px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const Outer = styled(motion.div)`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(235, 235, 235, 0.132);
  align-items: start;
  padding: 20px;
  /* width: max-content; */
  /* border: 1px solid var(--color-light-3); */
  border-radius: 3px;
  transition: all 0.7s;
  & h1 {
    font-family: var(--font-1);
    font-size: 2rem;
    color: var(--color-red);
    letter-spacing: 2px;
    margin-bottom: 20px;
  }
  &:hover {
    background-color: rgba(235, 235, 235, 0.251);
  }
  @media screen and (max-width: 412px) {
    align-items: center;
    padding: 10px;
    & h1 {
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
`;

const Inner = styled.div`
  display: flex;
  gap: 50px;
  @media screen and (max-width: 412px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const Img = styled.img`
  width: 400px;
  height: 250px;
  @media screen and (max-width: 412px) {
    width: 320px;
    height: 150px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 20px;
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }
  & a {
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--color-blue);
    font-family: var(--font-3);
  }
  @media screen and (max-width: 412px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & li {
      padding: 5px;
      gap: 10px;
    }
    & a {
      font-size: 1.2rem;
    }
  }
`;
const Button = styled.button`
  margin-top: 30px;
  font-size: 2rem;
  width: 200px;
  font-family: var(--font-2);
  background-color: transparent;
  outline: none;
  border: none;
  color: #fff;

  @media screen and (max-width: 412px) {
    font-size: 1.2rem;
    width: 150px;
    padding: 10px 0;
    border: 1px solid #fff;
  }
`;

const data = [
  {
    name: "Fast pizza",
    img: "../image/project-5.png",
    tool: [
      <SiTailwindcss style={{ color: "#83c5be" }} />,
      <FaReact style={{ color: "var(--color-blue)" }} />,
    ],
    link: "https://fast-pizza-deepak.netlify.app/",
    color: "--color-yellow:#f2c14e;",
  },
  {
    name: "Mapty",
    img: "../image/project-2.png",
    tool: [
      <IoLogoJavascript style={{ color: "var(--color-yellow)" }} />,

      <IoLogoCss3 style={{ color: "var(--color-blue)" }} />,
      <IoLogoHtml5 style={{ color: "var(--color-red" }} />,
    ],
    link: "https://mapty-app-workout.netlify.app/",
    color: "backgroundColor: var(--color-light-red:#ff5964)",
  },
  {
    name: "Bankist Website",
    img: "../image/project-3.png",
    tool: [
      <IoLogoSass style={{ color: " var(--color-pink)" }} />,

      <IoLogoJavascript style={{ color: "var(--color-yellow)" }} />,

      ,
    ],
    link: "https://bankist-frontent.netlify.app/",
    color: "backgroundColor:var( --color-blue:#0080af)",
  },
  {
    name: "Bankist Function",
    img: "../image/project-4.png",
    tool: [
      <IoLogoSass style={{ color: " var(--color-pink)" }} />,

      <IoLogoJavascript style={{ color: "var(--color-yellow)" }} />,
    ],
    link: "https://bankist-function.netlify.app/",
    color: "backgroundColor:var(--color-green:#5fad56);",
  },
];

const animation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

const datas = data.map((item, index) => (
  <Outer
    key={index}
    variants={animation}
    initial="initial"
    whileInView="animate"
    viewport={{ once: false }}
    custom={index}
  >
    <h1>{item.name}</h1>
    <Inner>
      <Img src={item.img} alt={item.name} loading="lazy" />
      <Ul>
        <li key={index}>{item.tool}</li>
        <a href={item.link} target="block">
          Visite the site
        </a>
      </Ul>
    </Inner>
  </Outer>
));

function Projects() {
  return (
    <Continer id="project">
      <H2>Project</H2>
      <Div>{datas}</Div>
      <Button>
        <NavLink
          to="projects"
          style={{
            fontWeight: "900",
            textDecoration: "none",
            fontFamily: "var(--font-2)",
            color: "#fff",
            outline: "none",
          }}
        >
          All Project
        </NavLink>
      </Button>
    </Continer>
  );
}

export default Projects;
