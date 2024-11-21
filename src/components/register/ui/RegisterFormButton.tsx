import React from 'react';

type Props = {
    type?: 'button' | 'submit';
    onClick?: () => void;
    text: string;
}

const RegisterFormButton = ({type = 'button', onClick = () => {}, text}: Props) => {
    return (
        <button
            type={type}
            className={'py-2 px-4 border border-solid border-black text-black'}
            onClick={onClick}
        >{text}
        </button>
    );
};

export {RegisterFormButton};
