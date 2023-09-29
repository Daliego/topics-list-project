import styled from "styled-components"
import { AiFillDislike, AiFillLike } from "react-icons/ai";

interface ButtonInputProps {
    text: string
    type: 'like' | 'deslike'
    onClick: (likeNumber: number) => void
}

// interface ButtonStyleProps {
//     up: boolean
// }

const ButtonInputStyled = styled.button`
        height: 40px;
        font-size: medium;
        text-align: center;
    `

export function ButtonInput ({type, onClick}: ButtonInputProps) {
    
    const handleClick = () => {
        if (type === 'like') {
            onClick(1)
            return
        } 
        
        onClick(-1)
    }
    
    
    return <ButtonInputStyled onClick={handleClick}>{type === 'like' ? <AiFillLike /> : <AiFillDislike />}</ButtonInputStyled>
    // display: ${props => props.$likeNumber ? (props.$likeNumber > 0 ? 'value' : 'none') : 'none'};
}