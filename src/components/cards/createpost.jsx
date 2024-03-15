import styled from "styled-components";
import {useForm} from 'react-hook-form'
import {joiResolver} from '@hookform/resolvers/joi'
import axios from "axios";
import { useSWRConfig } from "swr";

import { createPostSchema } from "../../../modules/post/post.schema";

import H4 from "../typography/h4";
import ControlledTextarea from '../input/ControlledTextarea'
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
    const { mutate } = useSWRConfig()
    const { control, handleSubmit, formState:{isValid}, reset} = useForm({
        resolver: joiResolver(createPostSchema),
        mode: 'all'
    })

    const onSubmit = async (data) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, data)
        if(response.status === 201){
            reset()
            mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
        }
    }   

    return(
            <PostContainer>
                <H4><Title>O que você está pensando, @{username}?</Title></H4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextContainer>
                        <ControlledTextarea placeholder="Digite sua mensagem"
                        rows='5' 
                        control={control} 
                        name="text" 
                        maxLenght="256"/>
                    </TextContainer>
                    <PostBottom>
                        <BottomText>Sua mensagem será publicada</BottomText>
                        <Button type="submit" disabled={!isValid}> Publicar mensagem </Button>
                    </PostBottom>
                </form>
            </PostContainer>
    )
}

export default CreatePost