"use client";

import React from 'react';
import { Page } from "@app/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavItem.module.css";

type Props = { page: Page; };

const NavItem = ( { page }: Props ) =>
{
    const { name, route, icon } = page;
    return (
        <button onClick={ () => { window.location.href = route; } } className={styles.navItem}>
            <FontAwesomeIcon
                icon={ icon }
                className={ styles.icon }
            />
            <span className={ styles.name }>
                { name }
            </span>
        </button>
    );
};

export default NavItem;