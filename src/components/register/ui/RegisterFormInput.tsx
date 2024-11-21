import React from 'react';

type Props = {
    idAndName: string;
    type: 'text' | 'email' | 'password';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string;
};

const RegisterFormInput = ({idAndName, type, onChange, value}: Props) => {
    return (
        <input id={idAndName}
               name={idAndName}
               type={type}
               onChange={onChange}
               value={value}
               className={'py-2 px-4 border border-solid border-black outline-none'}
        />
    );
};

export {RegisterFormInput};
