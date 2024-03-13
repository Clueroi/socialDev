import styled from "styled-components";

import H4 from "../typography/h4";
import Textarea from '../input/textarea'
import Button from '../input/button'

const PostContainer = styled.div`
    background-color: ${props=> props.theme.white};
    padding: 20px 40px;
    border-radius: 16px;

    @media(max-width:500px){
        
    }
`

const Title = styled.div`
    font-weight:bold;
    text-align: center;
`

const TextContainer = styled.div`
    margin:20px 0;
`

const PostBottom = styled.div`
    display: flex;
    gap:10px;

    @media(max-width: 500px){
        flex-direction: column-reverse;
        align-items:center;
    }
`

const BottomText = styled.p`
    flex:1;
`


function CreatePost({username}){
    return(
            <PostContainer>
                <H4><Title>O que você está pensando, @{username}?</Title></H4>
                <TextContainer>
                    <Textarea placeholder="Digite sua mensagem" rows='5'/>
                </TextContainer>
                <PostBottom>
                    <BottomText>Sua mensagem será publicada</BottomText>
                    <Button> Enviar </Button>
                </PostBottom>
            </PostContainer>
    )
}

export default CreatePost