"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type Props = {
  icon,
  onClickHandler,
};

const IconButton = ( { icon, onClickHandler }: Props ) =>
{
  return (
    <button onClick={ onClickHandler }>
      { icon }
    </button>
  );
};

export default IconButton;