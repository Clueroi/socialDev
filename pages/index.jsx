import useSWR from 'swr'
import styled from "styled-components"
import {withIronSessionSsr} from 'iron-session/next'
import axios from "axios"

import {ironConfig} from '../lib/middleware/ironSession'

import Navbar from '../src/components/layout/navbar'
import Container from "../src/components/layout/container"
import CreatePost from '../src/components/cards/createpost'
import H3 from '../src/components/typography/H3'
import Post from "../src/components/cards/post"
import MarkedPost from '../src/components/cards/MarkedPost'
import { useEffect, useState } from 'react'

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

const fetcher = url => axios.get(url).then(res => res.data)


function HomePage({ user}){
    const {data} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, fetcher)


    return(
        <> 
            <Navbar/>
            <Content>
                <Container>
                    <CreatePost username={user.user}/>
                    <LastPost> Ultimas Postagens: </LastPost>
                    <RefreshPostsContainer>
                        <RefreshPosts> Carregar novas postagens </RefreshPosts>
                    </RefreshPostsContainer>
                    <PostContainer>
                        <MarkedPost
                        titleText={'Antes de tudo obrigado por acessar'}
                        text={'Este é o trabalho de um curso, desenvolvido em react com Node funcionando em Back-End. ' +
                        'Usando node e express, a qual atualmente é a bilbioteca que mais tenho dificuldade de trabalhar com, tenho preferências por node com fastify e nestJs. ' +
                        'Estou rodando o mongoDB como banco de dados e utilizo alguns conceitos básicos de react e bibliotecas para o front como os hooks de react e o styled components. ' +
                        'Para além de um site, essa plataforma é uma forma de portóflio onde estarão meus projetos dentro de um projeto, clique abaixo e acesse outros projetos que fiz '}
                        user={'Clueroi "Desenvolvedor "'}
                        
                        />
                        {
                            data?.map(post=>
                                <Post
                                    key={post._id}
                                    text={post.text}
                                    user={post.createdBy?.user}
                                    date={post.createdData}
                                    isOwner={post.createdBy._id === user.id}
                                    id={post._id}
                                />
                            )
                        }
                    </PostContainer>
                </Container>
            </Content>
        </>
    )
}

export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({ req }){
        const user = req.session.user
        if (!user) {
            return {
                redirect:{
                    permanent: false,
                    destination: '/login'
                }
            }
        }
        return{
            props:{
                user 
            }
        }
    },
    ironConfig,

)

export default HomePage