import React from "react";
import {
  Navbar as NavStrap,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./styles/Navbar.css"
import businessLogo from "../images/casseroLogo.jpg";
import { facebook, instagram } from "../businessInfo.json";

const Navbar = () => {
  return (
    <NavStrap className="p-4 navbar-main" light> 
      <img className="rounded-circle navbar-logo" src={businessLogo} alt="businessLogo" width="100vw"/>
      <Nav className="navbar-icons">
        <NavItem>
          <NavLink href={facebook.url}>
            <FontAwesomeIcon icon={faFacebook} size="lg"/>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={instagram.url}>
            <FontAwesomeIcon icon={faInstagram} size="lg" color="#DD2A7B" />
          </NavLink>
        </NavItem>
      </Nav>
    </NavStrap>
  );
};
export default Navbar;
