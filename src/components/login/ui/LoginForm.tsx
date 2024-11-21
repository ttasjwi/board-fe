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
        <form className={'flex flex-col space-y-4 w-full px-8'} onSubmit={handleSubmit}>
                <input
                    name={'email'}
                    type={'email'}
                    placeholder={'이메일'}
                    onChange={handleFormChange}
                    value={form.email}
                    className={'w-full h-12 px-4 border border-gray-300 rounded md focus:outline-none focus:ring-2 focus:ring-blue-500'}
                />
                <input
                    name={'password'}
                    type={'password'}
                    placeholder={'패스워드'}
                    onChange={handleFormChange}
                    value={form.password}
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            <button
                type={"submit"}
                className={'w-full h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600'}
            >로그인
            </button>
        </form>
    );
};

export {LoginForm};
