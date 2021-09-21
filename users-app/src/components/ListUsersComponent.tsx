import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { remove } from '../api'
import { UserContext } from '../contexts/UserContext'

const StyledThead = styled.thead`
    background-color: #0E2345;
    th {
        color: white;
        padding: 25px 30px 25px 30px;
        font-size: 1.5rem;
        text-transform: capitalize;
    }
`
const StyledTbody = styled.tbody`
    background-color: white;
    td {
        padding: 40px 70px 40px 30px;
        font-size: 1.1rem;
    }
    td:nth-child(1) {
        text-decoration: underline;
        font-weight: 500;
    }
    td:nth-child(3) {
        color: red !important;
        font-size: 1.5rem !important;
        font-weight: 700;
    }
    td:nth-child(3) > span {
        cursor: pointer
    }
`

const ListUsers: React.FunctionComponent = () => {
    const { users, updateUsers } = useContext(UserContext)

    const handleRemove = async (id: string) => {
        await remove(id)
        updateUsers()
    }

    if (users !== null) {
        return (
            <div className='uk-margin-large-top uk-overflow-auto'>
                <table className='uk-table uk-table-large uk-table-middle uk-text-nowrap uk-table-divider'>
                    <StyledThead>
                        <tr>
                            <th className='uk-table-shrink'>Name</th>
                            <th className='uk-table-expand'>Email</th>
                            <th className='uk-table-shrink'></th>
                        </tr>
                    </StyledThead>
                    <StyledTbody>
                        {users.length > 0 &&
                            users.map((user: any) => 
                                <tr key={user['_id']}>
                                    <td>{user['firstName'] + ' ' + user['lastName']}</td>
                                    <td>{user['email']}</td>
                                    <td><span onClick={() => handleRemove(user['_id'])}>X</span></td>
                                </tr>
                            )
                        }
                    </StyledTbody>
                </table>
            </div>
        )
    } else {
        return (
            <h2>Something went wrong</h2>
        )
    }
}

export default ListUsers