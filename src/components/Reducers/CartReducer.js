import React from 'react'
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

const initialState = {
    items:[],
    totalAmount:0,
}

function CartReducer(state=initialState,action) {
  switch(action.type){
    case "ADD": 
        console.log("Item added");
        // console.log(state);
         console.log("amount:"+action.item.amount);
         const existingCartItemIndex = state.items.findIndex((item)=> item.id === action.item.id);
         console.log("item index "+existingCartItemIndex);
         const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        //  if(existingItem)
        //     {
        //        console.log("existing already "+existingItem.name);
        //         const updatedItem = {...existingItem,amount:existingItem.amount+action.item.amount};
        //         console.log(updatedItem.amount);
        //         updatedItems = [...state.items];
        //         console.log("-------");
        //         console.log(updatedItems);                

        //     }
           
        //         updatedItems = state.items.concat(action.item);
            
        // state.totalAmount+=action.item.price;
        // console.log(state.totalAmount);
        // console.log(state.items);

    if(existingCartItem)
    {
     const updatedItem = {
        ...existingCartItem,
        amount:existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items];
      console.log("updated "+updatedItems);
      console.log(updatedItems);
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    state.totalAmount+=action.item.price;
        return {items:updatedItems,totalAmount:state.totalAmount};
    case "REMOVE":
      const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
      const existingItem = state.items[existingItemIndex];
      let updatedCartItems;
      if(existingItem.amount===1)
      {
        updatedCartItems = state.items.filter((item) => item.id!==action.item.id);
      }
      else{
        const updatedItem = {...existingItem,amount:existingItem.amount-1};
        updatedCartItems = [...state.items];
        updatedCartItems[existingItemIndex] = updatedItem;
      }
      
      return {items:updatedCartItems,totalAmount:state.totalAmount-action.item.price};
      case "CLEAR":
        return initialState;
    default:
        return state;
  }
}

export default CartReducer;