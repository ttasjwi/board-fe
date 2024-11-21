import React from 'react';

const SocialLoginForm = () => {
    return (
        <div className={'flex flex-col items-center space-y-4'}>
            <button
                type={'button'}
                className={'w-full h-12 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200'}
            >Google 로그인
            </button>
            <button
                type={'button'}
                className={'w-full h-12 bg-green-500 text-white rounded-md hover:bg-green-600'}
            >Naver 로그인
            </button>
            <button
                type={'button'}
                className={'w-full h-12 bg-yellow-400 text-gray-800 rounded-md hover:bg-yellow-500'}
            >Kakao 로그인
            </button>
        </div>
    );
};

export {SocialLoginForm};
