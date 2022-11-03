import { createSlice } from "@reduxjs/toolkit";

const summarySlice = createSlice({
    name: "summary",
    initialState: {
        taskSammary:[],
    },
    reducers: {
        setSamary(state, action) {
            state.taskSammary = action.payload;
        },
    },
});
export const { setSamary } = summarySlice.actions;
export default summarySlice.reducer;
