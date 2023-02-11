import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "ineuron-app",
    initialState: {
        isLoggedIn: false,
        userDetails: {
            name: null,
            email: null,
            userId: null,
        },
       
        isDarkMode: true,
        authToken: null,
       
    },

    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
        toggleDarkMode(state) {
            state.isDarkMode = !state.isDarkMode;
        },
        updateUserDetails(state, action) {
            const email =  action.payload.email;
            const name = action.payload.name ;
            const userId =  action.payload.userId;

            state.userDetails = {
                userId,
                email,
                name,
            };
        },
      
        updateAuthToken(state, action) {
            state.authToken = action.payload;
        },
        toggleNewSignup(state) {
            state.newSignup = !state.newSignup;
        },
        
    },
});

const appActions = appSlice.actions;

export { appActions };
export default appSlice;
