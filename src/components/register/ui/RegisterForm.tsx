'use client';
import React, {useState} from "react";
import {RegisterFormInput} from "./RegisterFormInput";
import {RegisterFormButton} from "./RegisterFormButton";

export type FormData = {
    email: string,
    password: string,
    passwordCheck: string,
    code: string,
    username: string,
    nickname: string,
}

const RegisterForm = () => {
    const [form, setForm] = useState<FormData>({
        email: '',
        password: '',
        passwordCheck: '',
        code: '',
        username: '',
        nickname: '',
    })

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setForm(prev => ({
                ...prev,
                [name]: value
            })
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form className={''} onSubmit={handleSubmit}>
            <div className={'flex flex-col'}>
                <label className={'text-xl font-bold'} htmlFor={'email'}>이메일</label>
                <p className={'text-gray-500'}>이메일 주소를 입력해주세요.</p>
                <div className={'mb-2'}>
                    <RegisterFormInput
                           idAndName={'email'}
                           type={'email'}
                           onChange={handleFormChange}
                           value={form.email}
                    />
                    <RegisterFormButton text={'유효성 확인'} />
                    <RegisterFormButton text={'이메일 발송'} />
                </div>
                <div>
                    <label className={'text-xl font-bold'} htmlFor={'code'}>이메일 인증코드</label>
                    <p className={'text-gray-500'}>이메일 인증코드를 입력해주세요.</p>
                    <RegisterFormInput
                        idAndName={'code'}
                        type={'text'}
                        onChange={handleFormChange}
                        value={form.code}
                    />
                    <RegisterFormButton text={'이메일 인증'} />
                </div>
            </div>
            <div>
                <label className={'text-xl font-bold'} htmlFor={'password'}>패스워드</label>
                <p className={'text-gray-500'}>패스워드는 4자 이상 32자 이하여야합니다.</p>
                <RegisterFormInput
                    idAndName={'password'}
                    type={'password'}
                    onChange={handleFormChange}
                    value={form.password}
                />
            </div>
            <div>
                <label className={'text-xl font-bold'} htmlFor={'passwordCheck'}>패스워드 확인</label>
                <p className={'text-gray-500'}>확인을 위해 패스워드를 다시 입력해주세요.</p>
                <RegisterFormInput
                    idAndName={'passwordCheck'}
                    type={'password'}
                    onChange={handleFormChange}
                    value={form.passwordCheck}
                />
            </div>
            <div>
                <label className={'text-xl font-bold'} htmlFor={'username'}>사용자 아이디</label>
                <p className={'text-gray-500'}>사용자 아이디는 4자 이상 15자 이하의 영어 소문자, 숫자, 언더바만 허용됩니다.</p>
                <RegisterFormInput
                    idAndName={'username'}
                    type={'text'}
                    onChange={handleFormChange}
                    value={form.username}
                />
                <RegisterFormButton text={'유효성 확인'} />
            </div>
            <div>
                <label className={'text-xl font-bold'} htmlFor={'nickname'}>닉네임</label>
                <p className={'text-gray-500'}>닉네임은 1자 이상 15자 이하의 한글/영문자(대,소)/숫자만 허용됩니다.</p>
                <RegisterFormInput
                    idAndName={'nickname'}
                    type={'text'}
                    onChange={handleFormChange}
                    value={form.nickname}
                />
                <RegisterFormButton text={'유효성 확인'} />
            </div>
            <RegisterFormButton type='submit' text={'회원 가입'} />
        </form>
    );
};

export {RegisterForm};
