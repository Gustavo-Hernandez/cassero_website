import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import businessInfo from "../businessInfo.json";
import "./styles/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contactSection-mainContainer d-flex justify-content-around mt-3 mb-2 ">
      <h3>CONTACTO</h3>
      <div className="d-flex flex-column align-items-start">
        <div className="row">
          <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="#DD2A7B" />
          <a className="ml-2" href={`tel:${businessInfo.phoneNumber}`}>
            Tel.{businessInfo.phoneNumber}
          </a>
        </div>
        <div className="row mt-2">
          <FontAwesomeIcon icon={faFacebook} size="lg" color="#DD2A7B" />
          <a  className="ml-2" href={businessInfo.facebook.url}>{businessInfo.facebook.name}</a>
        </div>
        <div className="row mt-2">
          <FontAwesomeIcon icon={faInstagram} size="lg" color="#DD2A7B" />
          <a className="ml-2" href={businessInfo.instagram.url}>{businessInfo.instagram.name}</a>
        </div>
        <div className="row mt-2">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" color="#DD2A7B" />
          <p className="ml-2" >{businessInfo.whatsapp.name}</p>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
