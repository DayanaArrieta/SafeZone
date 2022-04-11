import {StyledTitle, StyledSubTitle, Avatar, ButtonPosition, colors, StyledFormArea, StyledFormButton} from "./../componentes/styles";

//logo
import logo from './../assets/logo.png';

const Dashboard = () => {
    return(
        <div>
            <div>
                <Avatar image={logo} />
            </div>
            <StyledFormArea>
                <StyledTitle size={50}>
                    SafeZone
                </StyledTitle>
                <StyledSubTitle size={30}>
                    Conoce la ciudad de forma segura 
                </StyledSubTitle>
                <ButtonPosition>
                <StyledFormButton to='/Inicio'>
                    Cerrar sesión
                </StyledFormButton>
                </ButtonPosition>
            </StyledFormArea>
        </div>
    );
}

export default Dashboard;