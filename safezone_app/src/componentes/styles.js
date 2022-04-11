import styled from 'styled-components'

//background
import background from './../assets/mapa.jpg';

//React router
import {Link} from 'react-router-dom';

export const  colors ={
    white: "#fff",
    black: "#000000",
    green: "#008000",
    gray: "#DCDCDC",
    lightgreen: "#90EE90",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626"
}

//Styled components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
`;

//Home 
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ?  props.color : props.white};
    padding: 10px;
    margin-bottom:10px;
`;

export const StyledSubTitle = styled.h2`
    font-size: ${(props) => props.size}px;;
    text-align: center;
    color: ${(props) => props.color ?  props.color : props.white};;
    padding: 5px;
    margin-bottom:25px;
`;

export const Avatar = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 80px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid white;
    border-radius: 25px;
    color: white;
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: green;
        color: white;
        cursor: pointer;
    }
`;

export const ButtonPosition = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

//Entrada
export const StyledTextInput = styled.input`
    width: 280px;
    background-color: ${colors.gray};
    padding: 15px;
    padding-left: 50px;
    font-size: 15px;
    letter-spacing: 1px;
    color: ${colors.black};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.white};`}

    &:focus {
        background-color: ${colors. lightgreen};
        color: ${colors.black};
    }
`;

export const StyledLabel = styled.p`
    text-aling: left;
    font-size: 15px;
    font-weight: bold;
`;

export const StyledFormArea = styled.div`
    background-color: ${(props => props.bg || colors.white)};
    text-align: center;
    padding: 40px 70px;
    border-radius: 20px;
    margin: 20px;
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${(props) => props.color ?  props.color : props.white};
    border-radius: 25px;
    color: ${(props) => props.color ?  props.color : props.white};
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: green;
        color: white;
        cursor: pointer;
    }
`;

export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`; 

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => (props.color ? props.color : colors.dark2)};
    padding: 2px;
    margin-top: 10px;
`; 

export const TextLink = styled(Link)`
    text=decoration: none;
    color: ${colors.green};
    transition: ease-in-out 0.3s;

    &:hover{
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    }
`;

//Iconos
export const StyledIcon = styled.p`
    color: ${colors.black};
    position: absolute;
    font-size: 21px;
    top: 38px;
    left: 15px;
    ${(props => props.right && `right: 15px; `)};
    ${(props => props.right && `left: 240px; `)};
`;

//copyright
export const CopyrightText = styled.p`
    padding: 5px;
    margin-left: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-aling: center;
    color: ${colors.light2};
`;

