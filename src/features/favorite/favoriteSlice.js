import { createSlice } from "@reduxjs/toolkit";


const initialState=[

]
const favoriteSlice=createSlice({
    name:'favorite',
    initialState,
    reducers:{
        toggleFavorite:(state,action)=>{
            const favoriteItemIndex=state.findIndex(product=>product.productId===action.payload.productId);
            if(favoriteItemIndex>-1){
                state.splice(favoriteItemIndex,1)
            }else{
                state.push(action.payload);
            }
        }
    }
})


export default favoriteSlice.reducer;
export const {toggleFavorite}=favoriteSlice.actions;