import React from 'react'
import { StyledInput, StyledSubmitInput } from '../globalStyledComponents'

import { useState } from 'react';

const SignUp: React.FunctionComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        //TODO: handle log in
        event.preventDefault()
        alert(`firstName: ${firstName} lastName: ${lastName} email: ${email} password: ${password}`)
    }

    return(
        <>
            <h1 className='uk-text-bold uk-margin-medium-top uk-text-center'>Create your account</h1>
            <div>
                <div className='uk-margin-remove-bottom uk-width-2-5 uk-align-center uk-card uk-card-default uk-card-body'>
                    <form onSubmit={handleSubmit}>
                        <p className='uk-text-large uk-text-emphasis uk-margin-small-bottom uk-margin-large-top'>First Name</p>
                        <StyledInput className='uk-width-1-1' value={firstName} onChange={handleFirstNameChange}/>
                        <p className='uk-text-large uk-text-emphasis uk-margin-small-bottom'>Last Name</p>
                        <StyledInput className='uk-width-1-1' value={lastName} onChange={handleLastNameChange}/>
                        <p className='uk-text-large uk-text-emphasis uk-margin-small-bottom'>Email</p>
                        <StyledInput className='uk-width-1-1' value={email} onChange={handleEmailChange}/>
                        <p className='uk-text-large uk-text-emphasis uk-margin-small-bottom'>Password</p>
                        <StyledInput className='uk-width-1-1 uk-margin-large-bottom' type='password' value={password} onChange={handlePasswordChange}/>
                        <br/>
                        <StyledSubmitInput className='uk-text-large uk-width-1-1' type='submit' value='Create an account'/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp