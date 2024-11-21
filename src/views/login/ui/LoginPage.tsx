import React from 'react';
import {LoginForm, SocialLoginForm} from "@/components/login";

const LoginPage = () => {
    return (
        <section className={'flex flex-col items-center w-full max-w-5xl mx-auto px-4 lg:px-0'}>
            <h1 className={'text-4xl font-bold mt-8 mb-8'}>로그인</h1>
            <div className={'flex flex-row justify-between space-x-8 w-full max-w-4xl mx-auto'}>
                <div className={'flex-1'}>
                    <LoginForm/>
                </div>
                <div className={'flex-1'}>
                    <SocialLoginForm/>
                </div>
            </div>
        </section>
    );
};

export {LoginPage};
