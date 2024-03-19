import styled from "styled-components"
import { useState, useRef, useEffect } from "react"


const Dots = styled.img`
    cursor:pointer;
`

const StyledMenu = styled.div`
    background-color:${props=> props.theme.white};
    position:absolute;
    width:250px;
    right:0;
    box-shadow:6px 10px 2px rgba(0,0,0,0.1);
    display: ${props=>props.isOpen ? 'block' : 'none'};
`

const ContainerMenu = styled.div`
    position: relative;
`

const StyledOptions = styled.div`
    padding:15px;
    cursor:pointer;

    :hover{
        background-color: ${props=> props.theme.inputBackground};
    }
`


const Menu = ({options=[]})=>{

    const [isOpen, setIsOpen] = useState(false)
    const MenuRef = useRef(null)

    useEffect(() => {
        
        function handleClickOutside(event) {
            if (MenuRef.current && !MenuRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)   
        return () => {
            
        }
    }, [])

    const handleClick = (onClick) =>{
        setIsOpen(false)
        onClick()
    }


    return(
        <ContainerMenu>
            <Dots src="/three-dots.svg" height="20px" onClick={() => setIsOpen(!isOpen)} />
            <StyledMenu isOpen={isOpen} ref={MenuRef} onBlur={()=>{setIsOpen(!isOpen)}}>
                {
                    options.map((option, pos) => 
                        <StyledOptions
                            key={`menu-${pos}`}
                            onClick={()=>handleClick(option.onClick)}
                        >
                            {option.text}
                        </StyledOptions>
                    )
                }
            </StyledMenu>
        </ContainerMenu>
    )
}

export default Menu