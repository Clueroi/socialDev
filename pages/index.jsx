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
                        text={'Trabalho de um curso, desenvolvido em react com NextJs funcionando em Back-End. ' +
                        'Não foi feito totalmente sozinho, o back end ainda tenho severas dificuldades, mas sigo desenvolvendo e aprendendo. ' +
                        'Estou rodando o mongoDB como banco de dados e usei o useForm para a entrega de formulários no cadastro. ' + 
                        'Decidi fazer com o useState toda a parte de displayBlock e DisplayNone, o useEffect para definir o clique nos 3 pontos ' +
                        'UseRef para definir quem é a referência para o clique, SWR para carregamento automático na criação de posts e diversas outras funcionalidades que estou explorando'}
                        user={'Clueroi "Desenvolvedor"'}
                        
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