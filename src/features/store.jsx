import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categotySlice";
import food_Slice from "./foodSlice";
import usersSlice from "./usersSlice";

const restaurantReduser = {

    reducer :{
        categorySlice,
        food_Slice,
        usersSlice
    }
}
export const store=configureStore(restaurantReduser)