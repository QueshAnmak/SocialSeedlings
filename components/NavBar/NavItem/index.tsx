"use client";

import React from 'react';
import { Page } from "@app/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import Link from "next/link";

type Props = { page: Page; };

const NavItem = ( { page }: Props ) =>
{
    const { name, route, icon } = page;
    return (
        <Link href={ route } className="no-underline">
            <div className={ styles.navItem }>
                <FontAwesomeIcon
                    icon={ icon }
                    className={ styles.icon }
                />
                <span className={ styles.name }>
                    { name }
                </span>
            </div>
        </Link>
    );
};

export default NavItem;