import styled from "styled-components"
import Link from 'next/link'

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/h1"
import H4 from "../src/components/typography/h4"
import H2 from '../src/components/typography/H2'
import Button from '../src/components/input/button'
import Input from '../src/components/input/input'


function SignupPage () {

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
        <Form>
          <Input type="text" label="Nome"></Input>
          <Input type="text" label="Sobrenome"></Input>
          <Input type="email" label="E-mail ou usuário"></Input>
          <Input type="password" label="Senha"></Input>
          <Button>Entrar </Button>
        </Form>
        <Text> Já possui uma conta? <Link href="/login"> Faça seu login </Link></Text>
      </ImageWithSpace>
    </div>
  )
}

export default SignupPage