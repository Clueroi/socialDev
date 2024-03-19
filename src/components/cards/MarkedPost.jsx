import styled from "styled-components";
import moment from 'moment'
import axios from 'axios'
import {useSWRConfig, useSWR} from 'swr'
import { useState } from "react";

import Menu from "../navigation/menu";

const PostContainer = styled.div`
    background-color: ${props=>props.theme.black};
    color:${props=>props.theme.white};
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

const ContainerMenu = styled.div`
    float:right;
`

const Title = styled.div`
    text-align:center;
    font-size: 20px;
    font-weight:lighter;
`

function MarkedPost({text, user, date, isOwner, id, titleText}){
    
    const [editPost, setEditPost] = useState(false)
    const {mutate } = useSWRConfig()

    const handleEdit = async ()=>{
        
    }
    const handleDelete = async () =>{
        try{
            
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
                data: {
                    id
                }
            })
            if(response.status === 200){
                mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
            }
        } catch(err){
            console.error()
        }
    }

    

    return(
        <PostContainer>
            {
                isOwner && 
                <ContainerMenu>
                <Menu
                    options={[
                        {
                            text:'Editar Publicação',
                            onClick: handleEdit
                        },
                        {
                            text:'Excluir Publicação',
                            onClick: handleDelete
                        }
                    ]}
                />
            </ContainerMenu>
            }
            
            <StyledUsername> @{user}</StyledUsername>
            <StyledDate> {moment(date).format('LLL')}</StyledDate>
            <Title>{titleText}</Title>
            <ContainerText>
                {!editPost && text}
            </ContainerText>
        </PostContainer>
    )
}

export default MarkedPost