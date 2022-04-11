import {useField } from "formik";
import {StyledTextInput, StyledLabel, StyledIcon, ErrorMsg} from './../componentes/styles';


export const TextInput = ({icon, ...props}) => {
    const {field, meta} = useField(props);

    return(
        <div style={{position: 'relative'}}>
            <StyledLabel htmlFor={props.correo}>
                {props.label}
            </StyledLabel>
            <StyledTextInput
						//invalid={meta.touched && meta.error}
                {...field}
                {...props}
            />

            <StyledIcon>
                {icon}
            </StyledIcon>
            

					{/* {meta.touched && meta.error ? (
						<ErrorMsg>{meta.error}</ErrorMsg>
					) : (
						<ErrorMsg style={{ visibility: "hidden"}}>.</ErrorMsg>
					)} */}
				</div>
  );
};