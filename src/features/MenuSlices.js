import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';


export const getMenu = createAsyncThunk("menu/getMenu", async() => {
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    const getCategory = res.data.categories;
    const filterCategory = getCategory.filter((c) => {
        return (c.strCategory === "Beef" || c.strCategory === 'Pasta'
        || c.strCategory === 'Lamb' || c.strCategory === 'Miscellaneous' ||
        c.strCategory === 'Side' || c.strCategory === 'Vegetarian');
    })
    return filterCategory;
})

const initialState = {
    value: []
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: {
        [getMenu.fulfilled] : (state, action) => {
            const baru = action.payload;
            const baru1 = baru.slice(0,6);
            state.value = [...baru1];
            
        },
    }
});


export const valMenu = (state => state.menu.value);
export default menuSlice.reducer;