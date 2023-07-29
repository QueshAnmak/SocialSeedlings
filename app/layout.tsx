import TitleBar from "@components/TitleBar";
import React from 'react';
export default function RootLayout ( {
    children,
}: {
    children: React.ReactNode;
} )
{
    return (
        <html lang="en">
            <body>
                <TitleBar />
                { children }
            </body>
        </html>
    );
}