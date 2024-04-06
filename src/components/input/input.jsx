import { useController } from 'react-hook-form'
import styled from 'styled-components'
import { useState } from 'react'

const StyledContainer = styled.div`
    width:100%;
`

const StyledLabel = styled.p`
    font-weight:bold;
    font-size: 14px;
    margin-bottom: 5px 0;
`
const StyledInput = styled.input`
    width:100%;
    border-radius:16px;
    border:1px solid ${props => props.theme.inputBorder};
    background-color: ${props => props.theme.inputBackground};
    padding:15px 20px;
    box-sizing: border-box;
    ${props=> props.error && `border: 2px solid ${props.theme.error};`}

    &:focus{
        outline:none;
    }

`

const ErrorText = styled.span`
    color: ${props => props.theme.error}
`

const errorMessage = {
    'string.empty': 'Este campo é obrigatório.',
    'duplicated': 'Já existe uma conta registrada com essas informações.',
    'string.email': 'Por favor digite um e-mail válido.'
}


const StyledContainerContainer = styled.div`
    display:flex;
`

const StyledImg = styled.img`
    :hover{
        background-color: ${props=>props.theme.inputBackground};
        border-radius:20px;
    }
    
`


const Input = ({label, name, control, view, images, TYPE ,defaultValue='', ...props}) => {

    const [show, setShow] = useState(false)
  
    const handleClick = ()=>{
      setShow(!show)
    }

    const {
        field:{value, onChange},
        fieldState:{error}
    } = useController({ name, control, defaultValue })
    return(
        <StyledContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledContainerContainer>
                <StyledInput error={error} type={show ? 'text' : 'password'} placeholder={label} {...props} value={value} onChange={onChange} />
                {TYPE && <StyledImg src='./eye-open.svg' width={35} onClick={handleClick}/>}
            </StyledContainerContainer>
            { error && <ErrorText>{errorMessage[error.type] || error.message}</ErrorText>}
            
        </StyledContainer>
    )
}

export default Input