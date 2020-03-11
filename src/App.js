import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from './mainPage/mainPage'
import Character from './charPage/charPage'
import CreateCharacter from './charForm/charForm'
import AssignSlot from './slotForm/slotForm'
// import { Link } from "react-router-dom";
// import config from "./config";

class App extends Component {
  state = { characters: [], classes: [], slots: [], hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    return (
      <div>
        <Router>
          <Route exact path={"/"}>
            <div> <Main
              chars={this.state.characters}
              class={this.state.classes}
            />
            </div>

          </Route>
          <Route exact path={"/character"} >
            <Character />
          </Route>
          <Route exact path={"/charcreation"} >
            <CreateCharacter />
          </Route>
          <Route exact path={"/additem"}>
            <AssignSlot />
          </Route>
        </Router>
      </div>
    )
  }
}






export default App;
