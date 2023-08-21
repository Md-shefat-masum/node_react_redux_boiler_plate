import counterSlice from "../views/pages/counter/config/store";
import userSlice from "../views/pages/users/config/store";
import blogSlice from "../views/pages/blog/config/store";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer,
        blog: blogSlice.reducer,
    }
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}

export default store;