import {StyledTitle, Avatar, StyledSubTitle, ButtonPosition, colors, StyledFormArea, StyledFormButton, AvatarLittle} from "./../componentes/styles";

//logo
import logo from './../assets/logo.png';

//icono perfil
import icono_perfil from './../assets/icono_perfil.webp';

import Axios from 'axios';

import React, { useEffect, useState } from "react";

const Perfil = () => {
    const [NombreIn, setNombreIn] = useState('');
    const [ApellidoIn, setApellidoIn] = useState('');
    const [EmailIn, setEmailIn] = useState('');
    const [ContraseñaIn, setContraseñaIn] = useState('');

    const [InicioStatus, setInicioStatus] = useState('');
    const [InicioStatusN, setInicioStatusN] = useState('');
    const [InicioStatusA, setInicioStatusA] = useState('');
    
    Axios.post("http://localhost:3001/inicio", {
            Nombre: NombreIn,
            Apellido: ApellidoIn,
            Email: EmailIn,
            contraseña: ContraseñaIn
        }).then((response) => {
            if(response.data.message){
                setInicioStatus(response.data.message)
            }else{
                setInicioStatus(response.data[0].Email)
                setInicioStatusN(response.data[0].Nombre)
                setInicioStatusA(response.data[0].Apellido)
            }
        });


    return(
        <div>
            <StyledFormArea background-color={colors.green}>
                <StyledTitle size={40}>
                    Mi Perfil
                </StyledTitle>
                <Avatar image={icono_perfil} />
                <StyledSubTitle size={30}>
                    <p>Deisy Arrieta</p>
                    <p>dparrietar@eafit.edu.co</p>{/* 
                    <p>{InicioStatusN} {InicioStatusA}</p>
                    <p>{InicioStatus}</p> */}
                </StyledSubTitle>
                <StyledFormArea background-color={colors.gray}> Conoce la ciudad de forma segura </StyledFormArea>
                <ButtonPosition>
                <StyledFormButton to='/Inicio'>
                    Cerrar sesión
                </StyledFormButton>
                </ButtonPosition>
            </StyledFormArea>
        </div>
    );
}

export default Perfil;