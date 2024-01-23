import styled from "styled-components";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";

const Div = styled.div`
  margin: 50px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 412px) {
    margin: 65px 30px;
  }
`;

const Div2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  @media screen and (max-width: 412px) {
    flex-direction: column;
  }
`;
const Li = styled(motion.li)`
  display: flex;
  align-items: center;
  font-family: var(--font-3);
  font-size: 1.7rem;
  padding: 10px 25px;
  background-color: #fff;
  gap: 20px;

  & svg {
    width: 2.2rem;
    height: 2.2rem;
  }
  @media screen and (max-width: 412px) {
    display: flex;
    /* flex-direction: column; */
    font-size: 1rem;
    & svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
const H1 = styled.h1`
  font-family: var(--font-1);
  font-size: 3rem;
  color: var(--color-grey-1);
  letter-spacing: 2px;
  @media screen and (max-width: 412px) {
    font-size: 1.2rem;
  }
`;

const icons = [
  [<FaHtml5 style={{ color: "darkorange" }} />, "html"],
  [<FaCss3 style={{ color: "blue" }} />, "CSS"],
  [<FaJs style={{ color: "yellow" }} />, "JavaScript"],
  [<FaSass style={{ color: "var(--color-pink)" }} />, "sass"],
  [<FaGithub style={{ color: "black" }} />, "GitHub"],
  [<FaReact style={{ color: "var(--color-blue)" }} />, "React JS"],
  [<SiStyledcomponents />, "styled components"],
  [<SiTailwindcss style={{ color: "#83c5be" }} />, "Tailwindcss"],
  [<SiReactrouter style={{ color: "red" }} />, "React Router"],
  [<SiRedux style={{ color: "#7209b7" }} />, "Redux"],
  [<FaNpm style={{ color: "red" }} />, "node package manager"],
  [<FaNodeJs style={{ color: "green" }} />, "NodeJs"],
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
      delay: 0.1 * index,
    },
  }),
};
const icon = icons.map((item, index) => (
  <Li
    key={index}
    custom={index}
    variants={animation}
    initial="initial"
    whileInView="animate"
    viewport={{
      once: true,
    }}
  >
    {item}
  </Li>
));

function Skills() {
  return (
    <Div>
      <H1>Skill sets</H1>
      <Div2>{icon}</Div2>
    </Div>
  );
}

export default Skills;
