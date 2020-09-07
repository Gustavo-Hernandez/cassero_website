import React from "react";
import {
  Navbar as NavStrap,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./styles/Navbar.css"
import business from "../businessInfo.json";


const Navbar = () => {
  return (
    <NavStrap className="shadow-sm rounded" light> 
      <NavbarBrand className="mx-auto">{business.name}</NavbarBrand>
      <Nav className="Navbar-icons">
        <NavItem>
          <NavLink href="/#">
            <FontAwesomeIcon icon={faFacebook} size="lg"/>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            <FontAwesomeIcon icon={faInstagram} size="lg" color="#DD2A7B" />
          </NavLink>
        </NavItem>
      </Nav>
    </NavStrap>
  );
};
export default Navbar;
