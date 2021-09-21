import React, { useContext } from 'react'
import { StyledInput, StyledSubmitInput } from '../globalStyledComponents'

import { useState } from 'react';
import { findAll } from '../api';
import { UserContext } from '../contexts/UserContext';
import { AuthContext } from '../contexts/AuthContext';

const SignIn: React.FunctionComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { users } = useContext(UserContext)
    const { authenticated, logIn } = useContext(AuthContext)

    if (localStorage.getItem('authenticated') === 'true' ? true : false) {
        window.location.href = "/";
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        //TODO: handle log in
        event.preventDefault()
        const filteredUsers = users.filter((user: any) => user['email'] === email && user['password'])
        if (filteredUsers.length !== 0) {
            logIn(filteredUsers[0].firstName, filteredUsers[0].lastName)
        } else {
            alert('wrong email and password')
        }
    }

    return(
        <>
            <h1 className='uk-margin-medium-top uk-text-center uk-text-bold'>Sign in</h1>
            <div>
                <div className='uk-margin-remove-bottom uk-width-2-5 uk-align-center uk-card uk-card-default uk-card-body'>
                    <form onSubmit={handleSubmit}>
                        <p className='uk-uk-margin-small-bottom uk-text-large uk-margin-large-top uk-text-emphasis'>Email address</p>
                        <StyledInput className='uk-width-1-1' value={email} onChange={handleEmailChange}/>
                        <p className='uk-uk-margin-small-bottom uk-text-large uk-text-emphasis'>Password</p>
                        <StyledInput className='uk-width-1-1 uk-margin-large-bottom' type='password' value={password} onChange={handlePasswordChange}/>
                        <br/>
                        <StyledSubmitInput className='uk-width-1-1 uk-margin-xlarge-top uk-text-large' type='submit' value='Sign in'/>
                    </form>
                </div>
                <p className='uk-text-center uk-text-large'>Don’t have an account ? <a href='/signup' className='uk-text-emphasis'><u>Create an account</u></a></p>
            </div>
        </>
    )
}

export default SignIn