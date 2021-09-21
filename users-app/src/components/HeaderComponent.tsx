import React, { useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../contexts/AuthContext'

const HeaderDiv = styled.div`
    position: relative;
    padding-top: 16px;
    width: 100%;
    height: 53px;
    background-color: #0E2345;
    color: white;
`

const Header: React.FunctionComponent = () => {

    const { logIn, logOut } = useContext(AuthContext)

    const authenticated = localStorage.getItem('authenticated') === 'true' ? true : false 
    


    return(
        <HeaderDiv>
            <div className='uk-container uk-container-xlarge'>
                <div data-uk-grid>
                    {authenticated ? <div className='uk-width-expand uk-text-large'>Users</div> : ''}
                    {authenticated ? <div className='uk-width-auto uk-text-large'>{localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName')}</div> : ''}
                    {authenticated ? <div onClick={() => {logOut(); window.location.href='/signin'}} className='uk-width-auto uk-text-large' style={{ cursor: 'pointer' }}>Logout</div> : <div  onClick={() => window.location.href = '/signin'} style={{ cursor: 'pointer' }} className='uk-width-expand uk-text-right uk-text-large'>Log in</div>}
                </div>
            </div>
        </HeaderDiv>
    )
}

export default Header