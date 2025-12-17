import { createSlice } from "@reduxjs/toolkit"

const initValue = {
    categories: [
        { id: 1, name: 'ארוחת בוקר' },// Breakfast
        { id: 2, name: 'צהריים ערב' },//lunchAndEvening,
        { id: 3, name: 'יין וקקטיילים' }//eveningWineAndCocktails

    ],
}
const categorySlice = createSlice({
    name: "category",
    initialState: initValue,
    reducers: {
       

    }

})

export const {filterByCategory} = categorySlice.actions

export default categorySlice.reducer 