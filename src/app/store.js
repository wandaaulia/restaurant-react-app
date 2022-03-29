import { configureStore } from '@reduxjs/toolkit';
import  menuReducer  from '../features/MenuSlices';


export const store = configureStore({
    reducer: {
        menu: menuReducer,
    },
})