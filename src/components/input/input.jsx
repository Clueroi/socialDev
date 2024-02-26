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
`

function Input({label, ...props}){
    return(
        <StyledContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput placeholder={label} {...props} ></StyledInput>
        </StyledContainer>
    )
} 

export default Input