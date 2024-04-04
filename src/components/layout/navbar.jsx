import styled from "styled-components";
import axios from 'axios'
import { useRouter } from "next/router";
import { useState } from "react";
import Link from 'next/link'

 

const StyledNavbar = styled.div`
    background-color: ${props=> props.theme.white};
    height:80px;
    display: flex;
    align-items:center;
    padding: 0 100px;

    @media(max-width: 500px){
        padding:0 20px;
    }
`

const StyledLogo = styled.span`
    flex: 1;
    font-weight:bold;
    font-size:20px
`

const StyledLogout = styled.a`
    flex:1;
    cursor:pointer;
`
const StyledUser = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%; 
    background-color: #007bff; 
    border: none;
    color: white; 
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position:relative;
`
const StyledMenu = styled.div`
    background-color:${props=> props.theme.white};
    position:absolute;
    width:250px;
    bottom:0;
    right:60px;
    box-shadow:6px 10px 2px rgba(0,0,0,0.1);
    display: ${props=>props.isOpen ? 'block' : 'none'};
`

const StyledOptions = styled.div`
    padding:15px;
    cursor:pointer;

    :hover{
        background-color: ${props=> props.theme.inputBackground};
    }
`

function Navbar(){

    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    const handleLogout= async ()=>{
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`)
        router.push('/')
    }
    return(
        <StyledNavbar>
            <StyledLogo> # SocialDev </StyledLogo>
            <StyledUser onClick={()=>{setIsOpen(!isOpen)}}>
                <StyledMenu isOpen={isOpen}>
                    <StyledOptions><Link href="./user">Minha Conta</Link></StyledOptions>
                    <StyledLogout onClick={handleLogout}>Desconectar</StyledLogout>
                </StyledMenu>
            </StyledUser>
        </StyledNavbar>
    )
}

export default Navbar