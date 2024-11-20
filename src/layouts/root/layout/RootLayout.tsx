import {Noto_Sans_KR} from "next/font/google";
import React from "react";
import "./globals.css";
import {Header} from "@/components/header";

const sans = Noto_Sans_KR({subsets: ["latin"]});

type Props = {
    children: React.ReactNode
}

const RootLayout = ({children}: Readonly<Props>) => {

    return (
        <html lang="ko" className={sans.className}>
        <body>
        <Header />
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}

export {RootLayout};
