import { Provider } from "react-redux"
import "./App.css"
import { store } from "./app/store"
import InputField from "./components/InputField"

function App() {
    return (
        <Provider store={store}>
            <InputField />
        </Provider>
    )
}

export default App
