import React from 'react';
import SideBar from "@components/SideBar";
import { Title, Signature } from "public/StaticComps";
import NavBar from "@components/NavBar";
import styles from './index.module.css';
import ButtonGroup, { ButtonData } from "@components/ButtonGroup";
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from "../../config";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import ThemeSwitcher from "@components/ThemeSwitcher";

interface Props
{
  children: React.ReactNode;
}

const buttons: ButtonData[] = [
  {
    name: 'Github',
    icon:
      <a href={ config.links.github } target="_blank">
        <FontAwesomeIcon icon={ faGithub } />
      </a>,
    onClickHandler: null,
  },
  {
    name: 'Instagram',
    icon:
      <a href="https://instagram.com/" target="_blank">
        <FontAwesomeIcon icon={ faInstagram } />
      </a>,
    onClickHandler: null,
  },
  {
    name: 'Twitter',
    icon:
      <a href="https://twitter.com/" target="_blank">
        <FontAwesomeIcon icon={ faTwitter } />
      </a>,
    onClickHandler: null,
  },
];

const LandscapeLayout = ( { children } ) =>
{
  return (
    <div className={ styles.layout }>
      <SideBar>
        <div className={ styles.top }>
          <Title />
          <div className={ styles.buttonGroup }>
            <ThemeSwitcher />
            <ButtonGroup buttons={ buttons } />
          </div>
        </div>
        <NavBar />
        <Signature />
      </SideBar>
      <div className={ styles.main }>
        { children }
      </div>
    </div>
  );
};

export default LandscapeLayout;;