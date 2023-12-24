//mostly deals with configurations 

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//types
type InitialState={
    value: AuthState ;

}
type AuthState = {
    isAuth : boolean;
    fullname : string;
    email : string;
    password:string;
    isLoggedIn: boolean;
};

// object for initial state
const initialState = {
    value: {
        isAuth:false,
        fullname:"",
        email:"",
        password: "",
        isLoggedIn: false,

    } as AuthState ,
} as InitialState;

//create auth slice

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers : {
        //reducer for logout
        logOut : () => {
            return initialState;

        },
        logIn : (state, action : PayloadAction<string>) => {
            return {
                value: {
                    isAuth : true,
                    fullname:action.payload,
                    email :action.payload,
                    password:action.payload,
                    isLoggedIn : false,
                },
            };

        },

        toggleLoginLogout : (state) =>{
            state.value.isLoggedIn = !state.value.isLoggedIn;
        },
    },
});

// export functions and reducer
export const {logIn, logOut, toggleLoginLogout} = auth.actions;
export default auth.reducer;

