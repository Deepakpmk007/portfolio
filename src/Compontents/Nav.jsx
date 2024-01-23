import styled from "styled-components";
import { FaRegLaugh } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 50px 60px;
  align-items: center;
  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-light-3);
  }

  @media screen and (max-width: 412px) {
    margin: 25px 30px;
    & svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const NavItem = styled(motion.ul)`
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-family: var(--font-2);

  & a {
    text-decoration: none;
    color: var(--color-red);
    font-weight: 900;
    padding: 10px 20px;
    outline: none;
    flex-shrink: 1;
    transition: all 0.5s;
    border-radius: 3px;

    &:hover {
      color: var(--color-light-3);
    }
  }
  @media screen and (max-width: 412px) {
    gap: 10px;
    font-size: 1rem;
    a {
      font-weight: 500;
      padding: 5px 10px;
    }
  }
`;

const animation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
    },
  }),
};

function Nav() {
  return (
    <NavStyle>
      <FaRegLaugh />
      <div>
        <NavItem
          variants={animation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        >
          <li>
            <a href="#home"> Home</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </NavItem>
        {/* <FaRegMoon /> */}
      </div>
    </NavStyle>
  );
}

export default Nav;
