var React = require('react');
import { createRoot } from 'react-dom/client';
import {
    Route,
    Link,
    Routes,
    Outlet,
    HashRouter,
} from "react-router-dom";

import { Provider, useSelector, useDispatch } from 'react-redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

console.log(counterSlice);

const { incremented, decremented } = counterSlice.actions

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    }
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}

function Layout() {
    return <div>
        <ul>
            <li><Link to={'/'}>home</Link></li>
            <li><Link to={'/about'}>about</Link></li>
            <li><Link to={'/contact'}>contact</Link></li>
        </ul>
        <Outlet></Outlet>
    </div>
}
function About() {
    return <h1>About</h1>
}
function Contact() {
    return <h1>Contact</h1>
}
function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return <div>
        <button
            aria-label="Increment value"
            onClick={() => dispatch(counterSlice.actions.incremented())}
        >
            Increment
        </button>
        <span>{count}</span>
        <button
            aria-label="Decrement value"
            onClick={() => dispatch(counterSlice.actions.decremented())}
        >
            Decrement
        </button>
        <h1>Home</h1>
    </div>
}

function Component() {
    return <HashRouter >
        <Routes>
            <Route path='/' element={<Layout></Layout>}>
                <Route index element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Route>
        </Routes>
    </HashRouter>
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <Component />
    </Provider>
);