import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
    name: "setting",
    initialState: {
        loader: "d-none",
    },
    reducers: {
        showLoader(state) {
            state.loader = "d-block";
        },
        hideLoader(state) {
            state.loader = "d-none";
        }
    },
});
export const { showLoader, hideLoader } = settingSlice.actions;
export default settingSlice.reducer;
