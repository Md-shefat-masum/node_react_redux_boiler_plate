import { createSlice } from "@reduxjs/toolkit";
import setup from "./setup"

const storeSlice = createSlice({
    name: `${setup.prefix}`,
    initialState: {
        value: 0,
        all: [],
        item: {},
    },
    reducers: {
        add: (state, {type, payload}) => {
            state.all = payload;
        },
    }
})

export default storeSlice;