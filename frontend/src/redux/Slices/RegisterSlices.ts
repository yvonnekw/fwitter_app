import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dob } from "../../features/register/utils/GlobalInterfaces";
import axios from "axios";

//stare info about the register user

interface RegisterSliceState {
    loading: boolean;
    error: boolean;
    firstName: string;
    firstNameValid: boolean;
    lastName: string;
    lastNameValid: boolean
    email: string;
    emailValid: boolean;
    dob: Dob;
    dobValid: boolean;
    step: number;
}

interface UpdatePayload {
    name: string;
    value: string | number | boolean;
}

interface RegisterUser {
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
}

//before we validate everything should be false
const initialState:RegisterSliceState = {
    loading: false,
    error: false,
    firstName: '',
    firstNameValid: false,
    lastName: '',
    lastNameValid: false,
    email: '',
    emailValid: true,
    dob: {
        month: 0,
        day: 0,
        year: 0 
    },
    dobValid: false,
    step: 1
}

export const registerUser = createAsyncThunk(
    'register/register',
    async (user:RegisterUser, thunkAPI) => {
        try {
            const req = await axios.post('http://localhost:8000/auth/register', user);
            return await req.data;
        } catch(e) {
            return thunkAPI.rejectWithValue(e);
        }

    }
)

export const RegisterSlice = createSlice ({
   name: "register",
   initialState,
   reducers: {
        updateRegister(state, action:PayloadAction<UpdatePayload>){
            let {name, value} = action.payload;

            if(name === 'month' || name === 'day' || name === 'year'){
                let dob = state.dob;
                dob ={
                    ...dob,
                    [name]:value
                }
                state = {
                    ...state,
                    dob
                }; 
            } else {
                state = {
                    ...state,
                    [name]: value
                }
            }
            console.log("updating global register state: ", state)
            return state;
        },
        incrementStep(state){
            state.step++;
            return state;
        },

        decrementStep(state){
            if(state.step === 1 || state.step === 4 || state.step >= 6){
            return state;
            } else{
                state.step--;
                return state;
            }
        }
   },
   extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action)=> {
            state.loading =  true;
            return state; 
        });

        builder.addCase(registerUser.fulfilled, (state, action)=> {
            state.loading = false;
            state.error = false;
            state.step++;
            return state; 
        });

        builder.addCase(registerUser.rejected, (state, action)=> {
            state.error = true;
            state.loading = false;
            return state; 
        });

   } 
})

export const {updateRegister, incrementStep, decrementStep} = RegisterSlice.actions;

export default RegisterSlice.reducer;
