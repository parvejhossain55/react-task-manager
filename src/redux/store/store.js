import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "../state/settingSlice";
import taskSlice from "../state/taskSlice";
import summarySlice from "../state/summarySlice";
import userSlice from "../state/userSlice";

export default configureStore({
    reducer: {
        setting: settingSlice,
        task: taskSlice,
        summary: summarySlice,
        user: userSlice
    },
});
