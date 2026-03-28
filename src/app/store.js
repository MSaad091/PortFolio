import { configureStore } from "@reduxjs/toolkit";
import ProjectDataReducer from '../features/projectdata'
import FullstackReducer from '../features/Fullstackdata'

export const store = configureStore({
    reducer:{
        projectdata:ProjectDataReducer,
         fullstackdata:FullstackReducer
    }
})