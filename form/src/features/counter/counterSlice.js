import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    regFormSubmissionValue: {
        fname: "",
        lname: "",
        email: "",
        dob: "",
        pass: "",
        chk_pass: "",
    },
}
export const counterSlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        display: (state, action) => {
            console.log({ state, Ac: action.payload })
            state.regFormSubmissionValue = action.payload
        },
    },
})
export const { display } = counterSlice.actions
export default counterSlice.reducer
