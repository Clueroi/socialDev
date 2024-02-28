import styled from "styled-components"

import Navbar from '../src/components/layout/navbar'
import Container from "../src/components/layout/container"
import CreatePost from '../src/components/cards/createpost'
import H3 from '../src/components/typography/H3'
import Post from "../src/components/cards/post"

const Content = styled.div`
    padding:50px;
`

const LastPost = styled(H3)`
    padding: 40px 0;
`
const RefreshPosts = styled.span`
    font-weight:bold;
    color: ${props=> props.theme.primary};
    cursor: pointer;
`

const RefreshPostsContainer = styled.div`
    text-align:center;
    margin-bottom:20px;
`
const PostContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap:20px;
`


function HomePage(){
    return(
        <> 
            <Navbar/>
            <Content>
                <Container>
                    <CreatePost/>
                    <LastPost> Ultimas Postagens: </LastPost>
                    <RefreshPostsContainer>
                        <RefreshPosts> Carregar novas postagens </RefreshPosts>
                    </RefreshPostsContainer>
                    <PostContainer>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                    </PostContainer>
                </Container>
            </Content>
        </>
    )
}
export default HomePage