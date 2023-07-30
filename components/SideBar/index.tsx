import React from 'react';
import styles from "./SideBar.module.css";

type Props = {
  children: React.ReactNode;
};

const SideBar = ( { children }: Props ) =>
{
  return (
    <section className={ styles.sideBar }>
      { children }
    </section>
  );
};

export default SideBar;