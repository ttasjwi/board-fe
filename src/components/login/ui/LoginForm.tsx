'use client';
import React, {useState} from 'react';

type FormData = {
    email: string,
    password: string,
}

const LoginForm = () => {

    const [form, setForm] = useState<FormData>({
        email: '',
        password: '',
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form className={'flex flex-col'} onSubmit={handleSubmit}>
            <div className={'flex flex-col'}>
                <label className={'text-xl font-bold'} htmlFor={"email"}>이메일</label>
                <input
                    id={'email'}
                    name={'email'}
                    type={'email'}
                    onChange={handleFormChange}
                    value={form.email}
                    className={'py-2 px-4 border border-solid border-black outline-none'}
                    required={true}
                />
            </div>
            <div className={'flex flex-col'}>
                <label className={'text-xl font-bold'} htmlFor={'password'}>패스워드</label>
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
            <button
                className={'w-full mt-2 py-2 px-4 border border-solid border-black outline-none'}
                type={"submit"}
            >로그인
            </button>
        </form>
    );
};

export {LoginForm};
