import React from 'react';
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

const BottomBar = ( { children }: Props ) =>
{
  return (
    <section className={ styles.bottomBar }>
      { children }
    </section>
  );
};

export default BottomBar;