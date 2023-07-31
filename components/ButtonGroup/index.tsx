"use client";
import React from 'react';
import IconButton from "@components/IconButton";
import styles from "./index.module.css";

export type ButtonData = {
  name: string;
  icon: React.ReactNode;
  onClickHandler: any;
};

export default function ButtonGroup ( { buttons }: { buttons: ButtonData[]; } )
{
  return (
    <>
      {
        buttons.map(
          ( buttonData ) =>
          {
            const { icon: icon, onClickHandler } = buttonData;
            return (
              <IconButton
                icon={ icon }
                onClickHandler={ onClickHandler } />
            );
          }

        )
      }
    </>
  );
}
