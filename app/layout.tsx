import React from 'react';
import TitleBar from "@components/SideBar";

import './globals.css';
import { Comfortaa } from 'next/font/google';
import NavBar from "../components/NavBar";
import LandscapeLayout from "@components/LandscapeLayout";

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
    return (
        <html lang="en" className={ comfortaa.className }>
            <body>
                <LandscapeLayout>
                    { children }
                </LandscapeLayout>
            </body>
        </html>
    );
}