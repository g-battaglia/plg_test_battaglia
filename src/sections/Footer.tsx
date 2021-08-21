import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFooter = styled.footer`
  border-top: 1px solid #4d4d4d;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: white;
  img {
    width: 150px;
    height: auto;
    margin-bottom: 2rem;
  }

  .links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
    justify-items: center;
    font-size: 0.9rem;
  }
  .social {
    font-size: 1.5rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 2rem;
    color: gray;
    .social__icon {
      transition: color 0.2s ease-in-out;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
  @media (max-width: 768px) {
    .links {
      grid-template-columns: 1fr;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <img src={process.env.PUBLIC_URL + "/img/footlogo.png"} alt="" />
      <ul className="links">
        <li>
          <a href="#weare">we are</a>
        </li>
        <li>we do</li>
        <li>careers</li>
        <li>contact us</li>
      </ul>
      <div className="social">
        <FontAwesomeIcon
          className="social__icon"
          icon={["fab", "facebook-square"]}
        />
        <FontAwesomeIcon className="social__icon" icon={["fab", "instagram"]} />
        <FontAwesomeIcon
          className="social__icon"
          icon={["fab", "linkedin-in"]}
        />
      </div>
    </StyledFooter>
  );
};

export default Footer;
