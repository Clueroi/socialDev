import styled from "styled-components"

import Navbar from '../src/components/layout/navbar'
import Container from "../src/components/layout/container"
import CreatePost from '../src/components/cards/createpost'

const Content = styled.div`
    padding:50px;
`

function HomePage(){
    return(
        <> 
            <Navbar/>
            <Content>
                <Container>
                    <CreatePost/>
                </Container>
            </Content>
        </>
    )
}
export default HomePage