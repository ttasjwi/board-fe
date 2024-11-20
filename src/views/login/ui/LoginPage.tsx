import React from 'react';
import {LoginForm} from "@/components/login";

const LoginPage = () => {
    return (
        <div className={'flex justify-center'}>
            <section className={'w-1/3'}>
                <h1 className={'text-2xl font-bold mt-4 text-center mb-4'}>로그인</h1>
                <LoginForm/>
            </section>
        </div>
    );
};

export {LoginPage};
