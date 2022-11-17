import {createSlice} from "@reduxjs/toolkit";
import {MoneyType} from "../../model/moneyType";

const initialState: MoneyType[] = [
    {id: 1, type: 'income', title: 'حقوق', price: '1300',month:'فروردین'},
    {id: 2, type: 'income', title: 'هدیه', price: '1500',month:'تیر'},
    {id: 3, type: 'expense', title: 'خرید گوشت', price: '1700',month:'مرداد'},
    {id: 4, type: 'expense', title: 'خرید کتاب', price: '1000',month:"آذر"},
    {id: 4, type: 'expense', title: 'خرید کتاب', price: '900',month:"مهر"},
    {id: 4, type: 'expense', title: 'خرید کتاب', price: '100',month:"آبان"},
    {id: 4, type: 'expense', title: 'خرید کتاب', price: '1200',month:"تیر"},
]

export const MoneySlice = createSlice({
    name: 'money',
    initialState,
    reducers: {
        addMoney: (state,action) => {
            //payload => {id:1,...}
            state.push(action.payload)
        },
        removeMoney: (state,action) => {
           const index=state.findIndex(item=>item.id===action.payload)
           state.splice(index,1)
        },
        updateMoney: (state,action) => {
           const index=state.findIndex(item=>item.id===action.payload.id)
           state[index]=action.payload
        },
    }
})

export const {addMoney,removeMoney,updateMoney} = MoneySlice.actions

export default MoneySlice.reducer