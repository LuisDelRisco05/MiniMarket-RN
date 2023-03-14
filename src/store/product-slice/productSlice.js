import { createSlice } from '@reduxjs/toolkit';
import { data } from "../../helpers/data";


export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: data,
        product: {},
        cart:[],
        total: 0,
        shoppingCart: false,
        counter: 1
    },
    reducers: {
        onAddProduct: (state, { payload } ) => {
          state.product = payload
        },      
        onCancelProduct: ( state ) => {
            state.product = {}
        },
        onAddToCart: ( state, { payload }) => {
            state.cart = [...state.cart, payload]
        },
        onDeleteItem: ( state, { payload }) => {
            state.cart = payload.newCart;
            state.total = state.total - payload.newTotal
        },
        onTotal: ( state, { payload }) => {
            state.total = state.total + payload
        },
        onActiveShoppingCart: ( state ) => {
            state.shoppingCart = true
        },
        onDesactiveShoppingCart: ( state ) => {
            state.shoppingCart = false
        },
        onUpdateStorage: ( state, { payload }) => {
            state.cart = payload.cartStorage;
            state.total = payload.totalStorage;
        },
        onCounter: ( state, { payload }) => {
            state.counter = payload;
        }

    }
});


export const { 
    onAddProduct,  
    onCancelProduct, 
    onAddToCart,
    onDeleteItem, 
    onTotal,
    onActiveShoppingCart,
    onDesactiveShoppingCart,
    onUpdateStorage,
    onCounter 
} = productSlice.actions;