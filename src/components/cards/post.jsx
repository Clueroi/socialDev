import styled from "styled-components";

const PostContainer = styled.div`
    background-color: ${props=>props.theme.white};
    padding:20px;
    border-radius:15px;
`

const StyledUsername = styled.p`
    font-weight:bold;
    font-size:18px;
`

const StyledDate = styled.p`
    font-size:12px;
`

const ContainerText = styled.div`
    margin-top:18px;
`

function Post(){
    return(
        <PostContainer>
            <StyledUsername> @Username </StyledUsername>
            <StyledDate> 22 de setembro 2004</StyledDate>
            <ContainerText>
                Texto de teste
            </ContainerText>
        </PostContainer>
    )
}

export default Post