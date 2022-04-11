//Styled components
import {StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonPosition, ExtraText, TextLink, CopyrightText} from './../componentes/styles';

import logo from './../assets/logo.png';

//formik
import {Formik, Form} from 'formik';
import { TextInput } from '../componentes/FormLib';
import * as Yup from 'yup';

//Iconos
import {FiMail, FiLock, FiUser} from 'react-icons/fi';

const Registro = () => {
    return(
        <div>
            <StyledFormArea>
                <Avatar image={logo} />
                <StyledTitle color={colors.black} size={30}>
                    Registro
                </StyledTitle>
                <Formik
                    /* validationSchema = {
                        Yup.object({
                            correo: Yup.string().email("Dirección de correo electrónico invalida").required("Obligatorio"),
                            password: Yup.string().min(8, "La contraseña es muy corta").max(30, "La contraseña es muy larga").required("Obligatorio"),
                        })
                    }  */
                >
                    {() => (
                        <Form>
                            <TextInput
                                name='nombre'
                                type='text'
                                label='Nombre'
                                placeholder='Antonio'
                                icon={<FiUser/>}
                            />

                            <TextInput
                                name='apellido'
                                type='text'
                                label='Apellidos'
                                placeholder='Giraldo Londoño'
                                icon={<FiUser/>}
                            />

                            <TextInput
                                name='email'
                                type='text'
                                label='Correo'
                                placeholder='Antonio1@example.com'
                                icon={<FiMail/>}
                            />

                            <TextInput
                                name='password'
                                type='password'
                                label='Contraseña'
                                placeholder='***********'
                                icon={<FiLock/>}
                            />

                            <TextInput
                                name='password'
                                type='password'
                                label='Confirmar contraseña'
                                placeholder='***********'
                                icon={<FiLock/>}
                            />

                            <ButtonPosition>
                                <StyledFormButton type="submit">
                                    Registrate
                                </StyledFormButton>
                            </ButtonPosition>

                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    ¿Ya tienes una cuenta creada?
                    <p>
                    <TextLink to="/Inicio">Inicia sesión</TextLink>
                    </p> 
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                Todos los derechos reservados &copy;2022
            </CopyrightText>
        </div>
    );
};

export default Registro;