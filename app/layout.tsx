"use client";

import React, { useEffect, useState } from 'react';
import TitleBar from "@components/SideBar";

import './globals.css';
import { Comfortaa } from 'next/font/google';
import NavBar from "../components/NavBar";
import LandscapeLayout from "@components/LandscapeLayout";
import PortraitLayout from "@components/PortraitLayout";

const comfortaa = Comfortaa( {
    weight: [ '300', '400', '500', '600', '700' ],
    subsets: [ 'latin' ],
    display: 'swap',
} );

interface Props
{
    children: React.ReactNode;
}

export default function RootLayout (
    { children }: Props
)
{
    const [ isPortrait, setIsPortrait ] = useState( false );

    useEffect( () =>
    {
        const x = window.matchMedia( "( max-width: 480px )" );
        setIsPortrait( x.matches );
        window.addEventListener( 'resize', () =>
        {
            setIsPortrait( x.matches );
        } );
    }, [] );

    const Layout = isPortrait ? PortraitLayout : LandscapeLayout;

    return (
        <html lang="en" className={ comfortaa.className }>
            <body className="dark">
                <Layout>
                    { children }
                </Layout>
            </body>
        </html>
    );
}