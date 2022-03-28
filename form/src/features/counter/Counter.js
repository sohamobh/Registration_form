import react from "react"
import { useSelector, useDispatch } from "react-redux"
import { display } from "./counterSlice"

export function Counter() {
    const count = useSelector((state) => state.display.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <h1>The count is: {count}</h1>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>

                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
