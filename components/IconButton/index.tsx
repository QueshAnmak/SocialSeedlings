"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./index.module.css";

type Props = {
  icon,
  onClickHandler,
};

const IconButton = ( { icon, onClickHandler }: Props ) =>
{
  return (
    <button className={styles.iconButton} onClick={ onClickHandler }>
      { icon }
    </button>
  );
};

export default IconButton;