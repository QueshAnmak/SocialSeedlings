import React from 'react';
import SideBar from "@components/SideBar";
import { Title, Signature } from "public/StaticComps";
import NavBar from "@components/NavBar";
import styles from './LandscapeLayout.module.css';

interface Props
{
    children: React.ReactNode;
}


const LandscapeLayout = ( { children } ) =>
{
    return (
        <div className={ styles.layout }>
            <SideBar>
                <Title />
                <NavBar />
                <Signature />
            </SideBar>
            <div className={ styles.main }>
                { children }
            </div>
        </div>
    );
};

export default LandscapeLayout;