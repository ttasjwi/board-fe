import {Noto_Sans_KR} from "next/font/google";
import React from "react";
import "./globals.css";
import {Header} from "@/components/header";

import {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        default: 'Board-System',
        template: '%s | Board-System '
    },
    description: "게시판에서 여러분의 관심사를 공유해보세요.",
};

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

export default RootLayout;
