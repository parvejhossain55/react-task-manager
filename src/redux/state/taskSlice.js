import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        newTask: [],
        progressTask: [],
        completeTask: [],
        canceledTask: [],
    },
    reducers: {
        setNewTask(state, action) {
            state.newTask = action.payload;
        },
        setProgressTask(state, action) {
            state.progressTask = action.payload;
        },
        setCompleteTask(state, action) {
            state.completeTask = action.payload;
        },
        setCanceledTask(state, action) {
            state.canceledTask = action.payload;
        },
    },
});

export const { setNewTask, setProgressTask, setCompleteTask, setCanceledTask } =
    taskSlice.actions;
export default taskSlice.reducer;
