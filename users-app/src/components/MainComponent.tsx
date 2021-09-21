import React from 'react'
import Header from './HeaderComponent'
import Body from './BodyComponent'
import styled from 'styled-components'

const MainDiv = styled.div`
    background-color: #FBFBFB;
`

const Main: React.FunctionComponent = () => {
    return(
        <>
            <MainDiv data-uk-height-viewport>
                <Header/>
                <Body/> 
            </MainDiv>
        </>
    )
}

export default Main