import {StyledTitle, ExtraText, StyledSubTitle, ButtonPosition, colors, StyledFormArea, StyledFormArea2, StyledFormButton, AvatarLittle} from "./../componentes/styles";

//logo
import logo from './../assets/logo.png';

//icono perfil
import icono_perfil from './../assets/icono_perfil.webp';

//Iconos
import {FaSearchLocation} from 'react-icons/fa';

import {Formik, Form} from 'formik';
import { TextInput } from '../componentes/FormLib';

import Axios from 'axios';

import React, { useEffect, useState } from "react";

const Recomendados = () => {

    const [NombreLugar, setNombreLugar] = useState('');
    const [TipoLugar, setTipoLugar] = useState('');
    const [Calificación, setCalificación] = useState('');
    const [Reporte, setReporte] = useState('');
    const [Descripción, setDescripción] = useState('');
    const [Lugares, setLugares] = useState('');

    const [InicioStatusN, setInicioStatusN] = useState('');
    const [InicioStatusT, setInicioStatusT] = useState('');
    const [InicioStatusC, setInicioStatusC] = useState('');
    const [InicioStatusR, setInicioStatusR] = useState('');
    const [InicioStatusD, setInicioStatusD] = useState('');

    useEffect(() => {
        Axios.get("http://localhost:3001/recomendados").then((response) => {
            setLugares(response.data[0])
        })
    });

    /* const busqueda = () => {
        Axios.post("http://localhost:3001/Recomendados", {
            Nombre: NombreLugar,
            TipoLugar: TipoLugar,
            Calificación: Calificación,
            Reporte: Reporte,
            Descripción: Descripción,
        
        }).then((response) => {
            if(response.data.message){
                setInicioStatusN(response.data.message)
                setInicioStatusT(response.data.message)
                setInicioStatusC(response.data.message)
                setInicioStatusR(response.data.message)
                setInicioStatusD(response.data.message)
            }else{
                setInicioStatusN(response.data[0].Nombre)
                setInicioStatusT(response.data[0].TipoLugar)
                setInicioStatusC(response.data[0].Calificación)
                setInicioStatusR(response.data[0].Reporte)
                setInicioStatusD(response.data[0].Descripción)
            }
        });
    } */

    return(
        <div>
            <StyledFormArea background-color={colors.green}>
                <StyledTitle size={40}>
                    Recomendados
                </StyledTitle>
                <StyledSubTitle size={20}>
                    Aquí podrá ver las zonas mejores calificadas por los usuarios de la plataforma
                </StyledSubTitle>

                <Formik>
                    {() => (
                        <Form>
                            <TextInput
                                name='busqueda'
                                type='text'
                                label='Búsqueda'
                                placeholder='Lugar'
                                icon={<FaSearchLocation/>}
                                /* onChange={(e) => {
                                    setNombreLugar(e.target.value);
                                }} */
                            />

                            <ExtraText color={colors.black}>
                                {/* <p>{InicioStatusN}</p>
                                <p>{InicioStatusT}</p>
                                <p>{InicioStatusC}</p>
                                <p>{InicioStatusR}</p>
                                <p>{InicioStatusD}</p> */}
                            </ExtraText>

                            <ButtonPosition>
                                <StyledFormButton to="/Inicio"/* onClick={busqueda} */>
                                Buscar
                                </StyledFormButton>
                                
                            </ButtonPosition>

                        </Form>
                    )}
                </Formik>
                <div>
                {Lugares.map((value) => {
                    return <h1>
                        {value.Nombre},
                        {value.Tipo_de_lugar},
                        {value.Calificación},
                        {value.Reporte},
                        {value.Descripción}
                        </h1>
                })};
                </div>
                <ButtonPosition>
                <StyledFormButton to='/Dashboard'>
                    Mapa
                </StyledFormButton>
                </ButtonPosition>
            </StyledFormArea>
        </div>
    );
}

export default Recomendados;