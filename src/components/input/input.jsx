import { forwardRef } from 'react'
import styled from 'styled-components'

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
    'string.empty': 'Este campo é obrigatório'
}

const Input = forwardRef(
    ({label, error, ...props}, ref) => {
    return(
        <StyledContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput error={error} placeholder={label} {...props} ref={ref}></StyledInput>
            { error && <ErrorText>{errorMessage[error.type] || error.message}</ErrorText>}
        </StyledContainer>
    )
}
)

export default Input