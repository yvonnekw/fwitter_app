import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/Store';
import { updateRegister } from '../../../../redux/slices/RegisterSlices';
import { validateEmail } from '../../../../services/Validators'
import { ValidatedTextInput } from '../../../../components/validatedInput/ValidatedTextInput';
//import { ValidatedInput } from '../../../../components/validatedInput/ValidatedInput';
import './RegisterEmailInput.css'

interface RegisterEmailInputProps {
    email:string;
}

export const RegisterEmailInput:React.FC<RegisterEmailInputProps> = ({email}) => {
    const [validEmail, setValidEmail] = useState<boolean>(true);

    const dispatch:AppDispatch = useDispatch();

    const updateEmail = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        dispatch(updateRegister({
            name:"email",
            value:e.target.value
        }));

        let valid = validateEmail(e.target.value);
        setValidEmail(valid);

        dispatch(updateRegister({
            name:"emailValid",
            value:valid
        }))
    }
    return (
        <div className="register-email-input">
            <ValidatedTextInput 
            data={email} 
            valid={validEmail} 
            label={"email"} 
            name={"email"} 
            changeValue={updateEmail}
            attributes={{
                maxLength: 50
            }}
            />
            {validEmail? <></> : <span className="register-email-error">Please enter a valid email.</span>}
        </div>
     
    )

}
