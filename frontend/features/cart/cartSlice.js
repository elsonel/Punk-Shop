import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
  }
  
export const cartSlice = createSlice({
    name: 'value',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existInd = state.value.map((x) =>x[0]["title"]).indexOf(action.payload["title"]);
            if (existInd === -1) state.value.push([action.payload, 1])
        },
        removeFromCart: (state, action) => {
            const removeInd = state.value.map((x) =>x[0]["title"]).indexOf(action.payload["title"]);
            if (removeInd !== -1) state.value.splice(removeInd, 1);
        },
        clearCart: (state) => {
            state.value.length = 0;
        },
        increaseQuantity: (state, action) => {
          const itemInd = state.value.map((x) =>x[0]["title"]).indexOf(action.payload["title"]);
          if ( itemInd  !== -1) state.value[itemInd][1] += 1
        },
        decreaseQuantity: (state, action) => {
            const itemInd = state.value.map((x) =>x[0]["title"]).indexOf(action.payload["title"]);
            if ( itemInd  !== -1 && state.value[itemInd][1] > 1) state.value[itemInd][1] -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity , clearCart} = cartSlice.actions

export default cartSlice.reducer