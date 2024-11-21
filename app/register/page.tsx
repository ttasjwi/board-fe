import React from 'react';
import {RegisterForm} from "@/components/register";

const RegisterPage = () => {
    return (
        <div className={'flex justify-center'}>
            <section className={'w-1/3'}>
                <h1 className={'text-2xl font-bold mt-4 text-center mb-4'}>회원 가입</h1>
                <p className={'mb-2'}>회원 정보를 입력해주세요.</p>
                <RegisterForm/>
            </section>
        </div>
    );
};

export default RegisterPage;
