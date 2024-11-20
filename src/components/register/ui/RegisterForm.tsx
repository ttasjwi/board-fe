'use client';
import React, {useState} from "react";

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
                    <input id={'email'}
                           name={'email'}
                           type={'email'}
                           onChange={handleFormChange}
                           value={form.email}
                           required={true}
                           className={'py-2 px-4 border border-solid border-black outline-none'}
                    />
                    <button
                        type={'button'}
                        className={'py-2 px-4 border border-solid border-black text-black'}
                    >중복 확인
                    </button>
                    <button
                        type={'button'}
                        className={'py-2 px-4 border border-solid border-black text-black'}
                    >이메일 발송
                    </button>
                </div>
                <div>
                    <label className={'text-xl font-bold'} htmlFor={'code'}>이메일 인증코드</label>
                    <p className={'text-gray-500'}>이메일 인증코드를 입력해주세요.</p>
                    <input id={'code'}
                           name={'code'}
                           type={'text'}
                           onChange={handleFormChange}
                           value={form.code}
                           className={'py-2 px-4 border border-solid border-black outline-none'}
                           required={true}
                    />
                    <button
                        type={'button'}
                        className={'py-2 px-4 border border-solid border-black text-black'}
                    >이메일 인증
                    </button>
                </div>
            </div>
            <div>
                <label className={'text-xl font-bold'} htmlFor={'password'}>패스워드</label>
                <p className={'text-gray-500'}>패스워드는 4자 이상 32자 이하여야합니다.</p>
                <input
                    id={'password'}
                    name={'password'}
                    type={'password'}
                    onChange={handleFormChange}
                    value={form.password}
                    className={'py-2 px-4 border border-solid border-black outline-none'}
                    required={true}
                />
            </div>
            <div>
                <label className={'text-xl font-bold'} htmlFor={'passwordCheck'}>패스워드 확인</label>
                <p className={'text-gray-500'}>확인을 위해 패스워드를 다시 입력해주세요.</p>
                <input
                    id={'passwordCheck'}
                    name={'passwordCheck'}
                    type={'password'}
                    onChange={handleFormChange}
                    value={form.passwordCheck}
                    className={'py-2 px-4 border border-solid border-black outline-none'}
                    required={true}
                />
            </div>
            <div>
                <label className={'text-xl font-bold'} htmlFor={'username'}>사용자 아이디</label>
                <p className={'text-gray-500'}>사용자 아이디는 4자 이상 15자 이하의 영어 소문자, 숫자, 언더바만 허용됩니다.</p>
                <input
                    id={'username'}
                    name={'username'}
                    type={'text'}
                    onChange={handleFormChange}
                    value={form.username}
                    className={'py-2 px-4 border border-solid border-black outline-none'}
                    required={true}
                />
                <button
                    type={'button'}
                    className={'py-2 px-4 border border-solid border-black text-black'}
                >중복 확인
                </button>
            </div>
            <div>
                <label className={'text-xl font-bold'} htmlFor={'nickname'}>닉네임</label>
                <p className={'text-gray-500'}>사용자 아이디는 4자 이상 15자 이하의 영어 소문자, 숫자, 언더바만 허용됩니다.</p>
                <input
                    id={'nickname'}
                    name={'nickname'}
                    type={'text'}
                    onChange={handleFormChange}
                    value={form.nickname}
                    className={'py-2 px-4 border border-solid border-black outline-none'}
                    required={true}
                />
                <button
                    type={'button'}
                    className={'py-2 px-4 border border-solid border-black text-black'}
                >중복 확인
                </button>
            </div>
            <button
                type='submit'
                className={'w-full py-2 px-4 border border-solid border-black outline-none'}
            >가입하기
            </button>
        </form>
    );
};

export {RegisterForm};
