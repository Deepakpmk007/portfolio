import styled from "styled-components";
import {
  PiGithubLogoBold,
  PiInstagramLogoBold,
  PiLinkedinLogoBold,
} from "react-icons/pi";
import { VscMail } from "react-icons/vsc";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-light-1);
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;

  & a {
    text-decoration: none;
    & svg {
      color: #000;
      width: 3rem;
      height: 3rem;
      transition: all 0.5s;
      &:hover {
        color: var(--color-light-3);
      }
    }
  }
  @media screen and (max-width: 412px) {
    gap: 15px;
    & a {
      & svg {
        width: 2.2rem;
        height: 2.2rem;
      }
    }
  }
`;

const H1 = styled.h1`
  font-weight: 800;
  font-size: 4rem;
  font-family: var(--font-3);
  color: var(--color-light-3);
  margin-bottom: 20px;
  @media screen and (max-width: 412px) {
    font-size: 1.5rem;
  }
`;

function Contact() {
  return (
    <Div id="contact">
      <H1>Contact</H1>
      <Ul>
        <li>
          <a href="https://github.com/Deepakpmk007" target="block">
            <PiGithubLogoBold />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/deepak-k-9304b7255"
            target="block"
          >
            <PiLinkedinLogoBold />
          </a>
        </li>
        <li>
          <a href="#" target="block">
            <VscMail />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/deepakpmk__?igshid=MzNlNGNkZWQ4Mg==">
            <PiInstagramLogoBold />
          </a>
        </li>
      </Ul>
    </Div>
  );
}

export default Contact;
