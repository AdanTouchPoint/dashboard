import React, {useEffect, useState} from "react";
import Frame from './components/Frame'
import Management from "./views/Management";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Profile from "./views/Profile";
import Stats from "./views/Stats"

function App() {
    const [showChanges, setShowChanges] = useState(true)
    const [showForm, setShowForm] = useState(true)

    return (
        <BrowserRouter>
            <div className="App">
                <Frame
                    showForm={showForm}
                    setShowForm={setShowForm}
                    showChanges={showChanges}
                    setShowChanges={setShowChanges}/>
                <Switch>
                    <React.Fragment>
                        <Route path="/management" component={Management} exact/>
                        <Route path="/profile" component={Profile} exact/>
                        <Route path="/stats" component={Stats} exact/>
                    </React.Fragment>
                </Switch>
            </div>
        </BrowserRouter>


    );
}

export default App;
