"use client";

import React, { useEffect } from 'react';
import styles from "./index.module.css";
import IconButton from "../IconButton";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSwitcher = () =>
{
  const [ darkMode, setDarkMode ] = React.useState( false );

  const icon = darkMode ?
    <FontAwesomeIcon icon={ faMoon } /> :
    <FontAwesomeIcon icon={ faSun } />;

  const setTheme = (isDark:boolean) =>
  {
    if ( isDark )
    {
      document.body.classList.add( "dark" );
    } else
    {
      document.body.classList.remove( "dark" );
    }
  };

  useEffect( () =>
  {
    // get from system preference
    const isDark = window.matchMedia( "(prefers-color-scheme: dark)" ).matches;

    setDarkMode( isDark );
    setTheme(isDark);
    console.log( { isDark } );
  }, [] );

  return (
    <span className={ styles.box }>
      <IconButton
        icon={ icon }
        onClickHandler={ () =>
        {
          console.log( {darkMode} );
          setTheme(!darkMode);
          setDarkMode( !darkMode );
          console.log( { darkMode } );
        } }
      />
    </span>
  );
};

export default ThemeSwitcher;