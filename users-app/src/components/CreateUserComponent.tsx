import React, { useContext } from 'react'
import { StyledInput, StyledSubmitInput } from '../globalStyledComponents'
import { create } from '../api'

import { useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const CreateUser: React.FunctionComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { updateUsers } = useContext(UserContext)

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

    const emptyForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        //TODO: validate form
        //TODO: hash password

        event.preventDefault()
        await create(firstName, lastName, email, password)
        updateUsers()
        emptyForm()
    }

    return(
        <>
            <h1 className='uk-margin-medium-top uk-text-center uk-text-bold'>List of users</h1>
            <div>
                <form onSubmit={handleSubmit}>
                <div className='uk-grid uk-child-width-1-3 uk-grid-match' data-uk-grid>
                        <div>
                            <p className='uk-text-large uk-text-emphasis uk-margin-small-bottom'>First Name</p>
                            <StyledInput className='uk-width-1-1' value={firstName} onChange={handleFirstNameChange}/>
                        </div>
                        <div>
                            <p className='uk-text-large uk-text-emphasis uk-margin-small-bottom'>Last Name</p>
                            <StyledInput className='uk-width-1-1' value={lastName} onChange={handleLastNameChange}/>
                        </div>
                        <div>
                            <p className='uk-text-large uk-text-emphasis uk-margin-small-bottom'>Email</p>
                            <StyledInput className='uk-width-1-1' value={email} onChange={handleEmailChange}/>
                        </div>
                        <div>
                            <p className='uk-text-large uk-text-emphasis uk-margin-small-bottom'>Password</p>
                            <StyledInput className='uk-width-1-1' type='password' value={password} onChange={handlePasswordChange}/>
                        </div>
                        <div className='uk-flex-bottom'>                      
                            <StyledSubmitInput className='uk-width-1-1 uk-text-large' type='submit' value='Create user'/>
                        </div> 
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateUser