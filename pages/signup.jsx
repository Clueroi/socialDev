import styled from "styled-components"
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from "next/router"
import { useState } from "react"

import { signupSchema } from "../modules/user/user.schema"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/h1"
import H4 from "../src/components/typography/h4"
import H2 from '../src/components/typography/H2'
import Button from '../src/components/input/button'
import Input from '../src/components/input/input'


function SignupPage () {

  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { control, handleSubmit, formState:{errors}, setError} = useForm({
    resolver: joiResolver(signupSchema)
  })

  const HandleForm = async (data) => {
    try{
      setLoading(true)
      const {status} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, data)
      if (status === 201 ){
        router.push('/')
      }
    } catch(err){
      if(err.response.data.code = 11000){
        setError(err.response.data.duplicatedKey, {
          type:'duplicated'
        })
      }
    }
    finally{
      setLoading(false)
    }
  }

  const DivMargin = styled.div`
    margin-top:60px;
  `

  const Form = styled.form`
    display:flex;
    flex-direction: column;
    margin: 20px 0;
    gap:20px
  `
  const Text = styled.p`
    text-align:center;
  `
  
  return (
    <div>
      <ImageWithSpace>
        <H1>#Social Dev</H1>
        <H4>Tudo que acontece no mundo dev, está aqui!</H4>
        <DivMargin>
          <H2>
            Crie sua conta
          </H2>
        </DivMargin>
        <Form onSubmit={handleSubmit(HandleForm)}>
          <Input type="text" label="Nome" name="firstName" control={control}></Input>
          <Input type="text" label="Sobrenome" name="lastName" control={control}></Input>
          <Input type="text" label="Usuário" name="user" control={control}></Input>
          <Input type="email" label="E-mail" name="email" control={control}></Input>
          <Input type="password" label="Senha" name="password" control={control}></Input>
          <Button loading={loading} type="submit" disabled={Object.keys(errors).length > 0}>Entrar </Button>
        </Form>
        <Text> Já possui uma conta? <Link href="/login"> Faça seu login </Link></Text>
      </ImageWithSpace>
    </div>
  )
}

export default SignupPage