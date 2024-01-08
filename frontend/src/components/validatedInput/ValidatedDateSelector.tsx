
import { useState, useEffect } from 'react';
import React from 'react';
import { StyledInputBox, StyledInputLabel } from './StyledInput';
import { determineValidatedSelectStyle } from '../../features/register/utils/DetermineStylesUtil';
import './ValidatedInput.css';
import { ExpandMoreRounded } from '@mui/icons-material';

interface ValidateDateSelectorProps{
    style:string;
    valid:boolean;
    name:string
    dropDown():JSX.Element[],
    dispatcher(name:string, value:string|number|boolean):void;
    data?:number;

}

export const ValidatedDateSelector:React.FC<ValidateDateSelectorProps> = ({data, style, valid, name, dropDown, dispatcher}) => {
    
    const [active, setActive] = useState<boolean>(false);
    const [value, setValue] = useState<number>(0);
    const [color, setColour] = useState<string>('gray');

    const changeValue =(e:React.ChangeEvent<HTMLSelectElement>) => {
        setValue(+e.target.value);
        console.log('Dispatch this change to a a reducer')
        console.log('value: ', e.target.value )
        dispatcher(name.toLowerCase(), + e.target.value);
       
    }
    
    const toggleActive = (e:React.FocusEvent<HTMLSelectElement>) => {
        setActive(!active);
    }

    useEffect(()=> {
        setColour(determineValidatedSelectStyle(active, valid))
    }, [active, valid, value])
    return (
        <div className='validated-input'>
            <StyledInputBox active={active} valid={valid}>
                <StyledInputLabel color={color} active={true} valid={valid}>
                    {name}
                    <ExpandMoreRounded sx={{
                        fontSize: 34,
                        color: active ? '#1DA1F2' : '#657786',
                        position: 'absolute',
                        right: '15pix',
                        top: '35%'
                    }}
                    />
                </StyledInputLabel>
                <select className="validated-input-value validated-date-selector" onChange={changeValue} onFocus={toggleActive} onBlur={toggleActive} value={data}>
                    {dropDown()}
                </select>
            </StyledInputBox>

            
        </div>
    
    );
}