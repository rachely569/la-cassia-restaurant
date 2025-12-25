import { configureStore } from "@reduxjs/toolkit";
import food_Slice from "./foodSlice";
import usersSlice from "./usersSlice";

const restaurantReduser = {

    reducer :{
        food_Slice,
        usersSlice
    }
}
export const store=configureStore(restaurantReduser)