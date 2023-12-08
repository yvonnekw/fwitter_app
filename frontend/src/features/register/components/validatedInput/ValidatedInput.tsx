
import { useEffect, useState } from "react"
import React from 'react';

import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import { determinValidatedStyles } from "../../utils/DetermineStylesUtil";
import './ValidatedInput.css';
import { ValidatedInputState } from "../../utils/GlobalInterfaces";

interface ValidatedUserInputProps {
    name: string;
    label: string;
    errorMessage: string;
    validator(value:string):boolean;
    changeValue(e:React.ChangeEvent<HTMLInputElement>): void;
    attributes?:Record<string, string | number | boolean>

}

 export const ValidatedInput:React.FC<ValidatedUserInputProps> = ({
    name, label, errorMessage, validator, changeValue, attributes }) => {

      const [validatedState, setValidatedState] = useState<ValidatedInputState>({
        active: false,
        valid: true,
        typedIn: false,
        labelActive: false,
        labelColor: "gray",
        value: ""
      });

      useEffect(() => {
        setValidatedState(determinValidatedStyles(validatedState, validator));

      }, [validatedState.active, validatedState.typedIn, validatedState.value, validatedState.labelActive, validatedState.labelColor]);
      
      const focus = (e:React.FocusEvent<HTMLElement>):void => {
       setValidatedState({
          ...validatedState,
          active: !validatedState?.active
       });

      }

      const updateValue = (e:React.ChangeEvent<HTMLInputElement>): void => {
        setValidatedState ({
          ...validatedState,
          typedIn: true,
          value: e.target.value
       });

       changeValue(e);

      }

      return (
        <div className="validated-input">
            <StyledInputBox active={validatedState.active} valid={validatedState.valid}>
                <StyledInputLabel color={validatedState.labelColor} active={validatedState.labelActive} 
                valid={validatedState.valid}>{label}</StyledInputLabel>
                <input className="validated-input-value"
                  onFocus = {focus}
                  onBlur = {focus}
                  onChange ={updateValue}
                  {...attributes}
                />
            </StyledInputBox>
            {validatedState.valid ? <></> : <span>{errorMessage}</span>}
        
        </div>
      )
};
