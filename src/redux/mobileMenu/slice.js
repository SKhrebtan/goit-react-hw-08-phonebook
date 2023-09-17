import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isShownMobileMenu: false,
};

const mobileMenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        showMenu(state) {
            state.isShownMobileMenu = true;
        },
        hideMenu(state) {
            state.isShownMobileMenu = false;
        }
    },
})

export const { showMenu, hideMenu } = mobileMenuSlice.actions;

export const mobileReducer = mobileMenuSlice.reducer;