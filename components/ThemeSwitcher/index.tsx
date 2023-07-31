"use client";

import React from 'react';
import styles from "./index.module.css";
import IconButton from "../IconButton";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSwitcher = () =>
{
  const [ darkMode, setDarkMode ] = React.useState( true );

  const icon = darkMode ?
    <FontAwesomeIcon icon={ faMoon } /> :
    <FontAwesomeIcon icon={ faSun } />;

  const switchTheme = () =>
  {
    setDarkMode( !darkMode );
    if ( darkMode )
    {
      document.body.classList.remove( "dark" );
    } else
    {
      document.body.classList.add( "dark" );
    }
  };

  return (
    <IconButton
      icon={ icon }
      onClickHandler={ switchTheme }
    />
  );
};

export default ThemeSwitcher;