import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../../../redux/slices/RegisterSlices'
import { RootState, AppDispatch } from '../../../../redux/Store';
import { stringifyDate } from '../../utils/DateUtils';
import { ValidatedDisplay } from '../../../../components/validatedInput/ValidatedDisplay';
import { StyledNextButton } from '../registerNextButton/RegisterNextButton';
import './RegisterFormThree.css';

export const RegisterFormThree:React.FC = () => {

    const state = useSelector((state:RootState) => state.register);
    const dispatch:AppDispatch = useDispatch();

    const submitUser = () => {
        const user = {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            dob: `${state.dob.year}-${state.dob.month}-${state.dob.day}`,
        }

        console.log("we are attempting to register a user");
        dispatch(registerUser(user));
    }

    return (
        <div className='reg-step-three-container'>
            <div className='reg-step-three-content'>
                <h1 className='reg-step-three-header'>Create your account</h1>
                <div className='reg-step-three-value'>
                    <ValidatedDisplay label={"Name"} value={`${state.firstName} ${state.lastName}`}/>
                </div>
                <div className='reg-step-three-value'>
                    <ValidatedDisplay label={"Email"} value={state.email}/>
                        {state.error ? 
                            <p className='reg-step-three-error'>The email you specified is in use, please use a different one.</p> :
                            <></>
                        }
                        
                </div>
                <div className='reg-step-three-value'>
                    <ValidatedDisplay label={"Birth date"} value={stringifyDate(state.dob)}/>
                </div>
                <p className='reg-step-three-policy'>
                    By signing up you agree <span className='reg-step-three-link'>Terms of Services</span> and 
                    <span className='reg-step-three-link'>Privacy Policy</span>, includging <span className='reg-step-three-link'>Cookie
                    Use</span>. Fwitter may use your contact information, including your email address and phone number for purposes 
                    outline in out Privacy Policy, like keeping your account secure and personalizing our services including ads.
                    <span className='reg-step-three-link'>Learn more</span>. Others will be able to find you by email or phone 
                    number, when provided unless you choose otherwise <span className='reg-step-three-link'>here</span>.
                </p>
            </div>
                <StyledNextButton onClick={submitUser} color={"blue"} active={true}>Sign up</StyledNextButton>
        </div>
    )
}