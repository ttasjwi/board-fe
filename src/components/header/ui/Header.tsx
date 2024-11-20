import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className={'flex justify-between items-center p-4 bg-gray-300'}>
            <Link href={'/'}>
                <h1 className='text-3xl font-bold'>Board-System</h1>
            </Link>
            <nav className={'flex gap-4'}>
                <Link href={"/register"}>회원가입</Link>
                <Link href={"/auth/login"}>로그인</Link>
            </nav>
        </header>
    );
};

export {Header};
