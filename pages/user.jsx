import styled from "styled-components";
import {withIronSessionSsr} from 'iron-session/next'
import axios from "axios"

import {ironConfig} from '../lib/middleware/ironSession'

import Navbar from '../src/components/layout/navbar'

function UserPage(){
    return(
        <Navbar/>
    )
}

export default UserPage