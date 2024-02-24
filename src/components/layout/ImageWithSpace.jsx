import styled from 'styled-components'

const WIDTH_BREAK = '600px'

const StyledFlex = styled.div`
    display:flex;
`
const StyledImage = styled.div`
    width:100%;
    background-image: url('${props => props.image}');
    height:100vh;
    background-repeat: no-repeat;
    background-size: cover;

    @media(max-width: ${WIDTH_BREAK}){
        display:none;
    }
`
const StyledContainer = styled.div`
    padding: 50px 40px;
    width:100%;
    background-color:white;
    padding:30px;
    align-itens: center;
    
    
    @media(min-width: ${WIDTH_BREAK}){
        width:100%;
        width: calc(${WIDTH_BREAK} - 100px)
    }
    @media(max-width: ${WIDTH_BREAK}){
        width:100%;
    }

    display:flex;
    flex-direction:column;
    justify-content:center;
`


function ImageWithSpace({children, image}){
    return(
        <div>
            <StyledFlex>
                <StyledImage image={image}/>
                <StyledContainer>
                    {children}
                </StyledContainer>
            </StyledFlex>
        </div>
    )
}

ImageWithSpace.defaultProps = {
    image: 'coffee-background.jpg'
}

export default ImageWithSpace