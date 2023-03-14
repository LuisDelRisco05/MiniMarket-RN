import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./product-slice/productSlice";

export const storeTest = configureStore({
    reducer: {
        product: productSlice.reducer
    },
});


export const store = configureStore({
    reducer: {
        product: productSlice.reducer
    }
})