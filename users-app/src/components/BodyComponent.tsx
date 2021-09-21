import React, { useContext } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import { ProtectedRoute } from '../protectedRoute'
import Home from './HomeComponent'
import SignIn from './SignInComponent'
import SignUp from './SignUpComponent'

const Body: React.FunctionComponent = () => {

    const defaultProtectedRouteProps = {
        isAuthenticated: localStorage.getItem('authenticated') === 'true' ? true : false,
        authenticationPath: '/signin',
    };

    console.log(defaultProtectedRouteProps.isAuthenticated)

    return(
        <div className='uk-container uk-container-xlarge'>
            <Switch>
                <Route path='/signin' component={SignIn}/>
                <Route path='/signup' component={SignUp}/>
                <ProtectedRoute
                    {...defaultProtectedRouteProps}
                    exact={true}
                    path='/'
                    component={Home}
                />
            </Switch>
        </div>
    )
}

export default withRouter(Body)