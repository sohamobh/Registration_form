import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider } from "@chakra-ui/react"
import InputField from "./components/InputField"
import { store } from "./app/store"
import { Provider } from "react-redux"

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider>
            <InputField>
                <App />
            </InputField>
        </ChakraProvider>
    </Provider>,

    document.getElementById("root")
)

reportWebVitals()
