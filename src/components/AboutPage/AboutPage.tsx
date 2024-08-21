import React from "react";
import "./AboutPage.css";
import logo from "../../images/profile_picture.jpg";
import AboutList from "../../components/AboutList/AboutList";
import aboutInfoData from "../../data/aboutInfo.json";
import { AboutInfo } from "@/interfaces/AboutInfo";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import contactInfoData from "../../data/contactInfo.json";
import Image from "next/image";

const AboutPage: React.FC = () => {

  const aboutInfo:AboutInfo = aboutInfoData.aboutInfo;

  return (
    <section data-testid="about-section" className="about-section" id="about">
      <h1 data-testid="about-section-header" className="app-header">
        Christoffer Näs
      </h1>
      <div className="about-grid-container">
        <div className="grid-item">
          <Image className="profile-img" src={logo} alt="logo" />
        </div>
        <div className="grid-item">
          <AboutList aboutInfo={aboutInfo}/>
        </div>
        <div className="grid-item">
          <ul className="link-ul">
            <li className="link-li">
            <a aria-label="Visit Github.com"  href={contactInfoData.contactInfo.githubLink} target="_blank" rel="noreferrer">
              <FaGithub className="icon" size={40} color="#000" />
            </a>
            </li>
            <li className="link-li">
              <a aria-label="Visit linkedin.com" href={contactInfoData.contactInfo.linkedInLink} target="_blank" rel="noreferrer">
                <FaLinkedin className="icon" size={40} color="#000" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
