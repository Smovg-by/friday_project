import {combineReducers, createStore} from "redux";
import {appReducer} from "./appReducer";
import {authReducer} from "./authReducer";
import {formReducer} from "./formReducer";

let rootReducer = combineReducers(
    {
        app: appReducer,
        auth: authReducer,
        form: formReducer,
    }
)

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)

//@ts-ignore
window.store = store