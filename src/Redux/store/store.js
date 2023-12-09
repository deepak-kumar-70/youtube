import { configureStore } from "@reduxjs/toolkit";
import ShortSlice from "../Slices/ShortIndexSlice/ShortSlice";
export const store=configureStore({
    reducer:ShortSlice
})