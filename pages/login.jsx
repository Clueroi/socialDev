import styled from "styled-components"
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from "next/router"
import { useState } from "react"

import { loginSchema } from "../modules/user/user.schema"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/h1"
import H4 from "../src/components/typography/h4"
import H2 from '../src/components/typography/H2'
import Button from '../src/components/input/button'
import Input from '../src/components/input/input'



function LoginPage () {

  const router = useRouter()
  const { control, handleSubmit, formState:{errors}, setError} = useForm({
    resolver: joiResolver(loginSchema)
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    try{
      setLoading(true)
      const {status} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
      if(status === 200){
        router.push('/')
      }
    } catch(response){
      console.log(response.data)
      if(response.data === 'incorrect password'){
        setError('password' ,{
          message: 'A senha está incorreta'
        })
      }
      else if(response.data === 'not found'){
        console.log('usuário não encontrado')
        setError('userOrEmail', {
          message: 'Usuário ou Email não encontrado'
        })
      }
      console.log(response)
    } finally{
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
  const Span = styled.img`

  `
  
  return (
    <div>
      <ImageWithSpace>
        <H1>#Social Dev</H1>
        <H4>Tudo que acontece no mundo dev, está aqui!</H4>
        <DivMargin>
          <H2>
            Entre em sua conta
          </H2>
        </DivMargin>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input  label="E-mail ou usuário" name='userOrEmail' control={control} ></Input>
            <Input type='password'label="Senha" name='password' control={control} ></Input>
          <Button loading={loading} type="submit" disabled={Object.keys(errors).length > 0}>Entrar </Button>
        </Form>
        <Text> Não tem uma conta? <Link href="/signup"> Faça seu cadastro </Link></Text>
      </ImageWithSpace>
    </div>
  )
}

export default LoginPage