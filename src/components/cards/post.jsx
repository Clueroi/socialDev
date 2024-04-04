import styled from "styled-components";
import moment from 'moment'
import axios from 'axios'
import {useSWRConfig, useSWR} from 'swr'
import { useState } from "react";

import Menu from "../navigation/menu";
import EditPost from "./editPost";

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

const ContainerMenu = styled.div`
    float:right;
`
const StyledLikes = styled.img`
    width:20px;
    height:20px;
`
const StyledCount = styled.h4`
    
`

function Post({text, user, date, isOwner, id, likes}){

    const [like, setLike] = useState(false)
    const [number, setNumber] = useState(0)

    const HandleLike = ()=>{
        if(!like){
            setLike(true)
            setNumber(number + 1)
        } else{
            setNumber(number-1)
            setLike(false)
        }
        
        console.log(number)
    }

    const [editPost, setEditPost] = useState(false)
    const {mutate } = useSWRConfig()

    const handleEdit = async ()=>{
        setEditPost(true)
    }

    const handleSaveEdit = ()=>{
        setEditPost(false)
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
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
            <ContainerText>
                {!editPost && text}
                {editPost && <EditPost id={id} text={text} onSave={handleSaveEdit}  />}
            </ContainerText>
            <StyledLikes src="/tolike.png" onClick={HandleLike}/><StyledCount>{number}</StyledCount>
        </PostContainer>
    )
    
}

export default Post