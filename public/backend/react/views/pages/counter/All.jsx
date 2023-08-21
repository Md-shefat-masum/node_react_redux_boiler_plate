import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice  from './config/store'

function All() {
    const count = useSelector((state) => state.counter?.value)
    const dispatch = useDispatch()
    return (
        <>
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

            All
        </>
    )
}

export default All