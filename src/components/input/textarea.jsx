import styled from "styled-components";

const Textarea = styled.textarea`
    resize:none;
    width:100%;
    padding:20px;
    box-sizing: border-box;
    background-color: ${props=> props.theme.inputBackground};
    border: ${props=> props.theme.inputBorder};
    border-radius: 10px;
    font-size: 14px;
    font-family: 'Roboto', 'sans-serif';
`

export default Textarea