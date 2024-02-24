import styled from "styled-components"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/h1"
import H4 from "../src/components/typography/h4"
import H2 from '../src/components/typography/H2'


function HomePage () {

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
            Faça seu login
          </H2>
        </DivMargin>
        <Form>
          <input type="email" placeholder="E-mail ou usuário"></input>
          <input type="password" placeholder="Senha"></input>
          <button> Entrar </button>
        </Form>
        <Text> Não tem uma conta? <a href="#"> Faça seu cadastro </a></Text>
      </ImageWithSpace>
    </div>
  )
}

export default HomePage