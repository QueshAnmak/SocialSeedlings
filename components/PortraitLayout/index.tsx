import React from 'react';
import styles from './index.module.css';
import BottomBar from "@components/BottomBar";
import NavBar from "@components/NavBar";
import { Title } from "public/StaticComps";
import ThemeSwitcher from "../ThemeSwitcher";

interface Props
{
    children: React.ReactNode;
}

const PortraitLayout = ( { children } ) =>
{
    return (
        <div className={ styles.layout }>
            <div className={ styles.topBar }>
                <Title />
                <ThemeSwitcher />
            </div>
            <div className={ styles.main }>
                { children }
            </div>
            <BottomBar>
                <NavBar />
            </BottomBar>
        </div>
    );
};

export default PortraitLayout;