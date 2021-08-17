import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Profile} from "./components/Profile";
import {Page404} from "./components/Page404";
import {Recovery} from "./components/Recovery";
import {NewPassword} from "./components/NewPassword";
import {Test} from "./components/Test";
import {InputComponent} from "./components/Common/inputComponent/InputComponent";
import {CheckboxComponent} from "./components/Common/checkboxComponent/CheckboxComponent";
import {ButtonComponent} from "./components/Common/buttonComponent/ButtonComponent";

export const App = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="App">
                    <InputComponent/>
                    <CheckboxComponent/>
                    <ButtonComponent title={"Submit"}/>
                    <Route path='/login' component={ Login } />
                    <Route path='/register' component={ Register } />
                    <Route path='/profile' component={ Profile } />
                    <Route path='/404' component={ Page404 } />
                    <Route path='/recovery' component={ Recovery } />
                    <Route path='/newPassword' component={ NewPassword } />
                    <Route path='/test' component={ Test } />
                </div>
            </HashRouter>
        </Provider>
    )
}