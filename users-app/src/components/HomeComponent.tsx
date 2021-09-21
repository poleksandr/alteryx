import React from 'react'
import CreateUser from './CreateUserComponent'
import ListUsers from './ListUsersComponent'

const Home: React.FunctionComponent = () => {
    return(
        <>
            <CreateUser/>
            <ListUsers/>
        </>
    )
}

export default Home