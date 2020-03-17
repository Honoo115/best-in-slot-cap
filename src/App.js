import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from './mainPage/mainPage'
import Character from './charPage/charPage'
import CreateCharacter from './charForm/charForm'
import AssignSlot from './slotForm/slotForm'
import config from "./config";

class App extends Component {
  state = { characters: [], hasError: false, fetched: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/character`)
      .then(characters => {
        return characters.json()
      })

      .then(charactersJson => {
        this.setState({
          characters: charactersJson,
          fetched: true
        })
      });
  }
  render() {
    return (
      <div>
        <Router>
          <Route exact path={"/"}>
            <div> <Main
              character={this.state.characters}

            />
            </div>

          </Route>
          <Route exact path={"/character/:character_id/slots"}
            render={(routeProps) => {
              let character_id = routeProps.match.params.character_id;
              let character = this.state.characters.filter(character => {
                let id = character.id
                return (
                  id.toString() === character_id
                )
              })[0]

              return (
                <Character
                  character={character}

                />
              )
            }}
          >
          </Route>
          <Route exact path={"/charcreation"} >
            <CreateCharacter />
          </Route>
          <Route exact path={"/character/:character_id/slots/:slot_id"}
            render={(routeProps) => {
              let character_id = routeProps.match.params.character_id;
              let character = this.state.characters.filter(character => {
                let id = character.id
                return (
                  id.toString() === character_id
                )
              })[0];
              let slot = {};
              if (this.state.fetched) {
                slot = character.slots[routeProps.match.params.slot_id - 1]
              }
              return (
                <AssignSlot
                  slot={slot}
                />
              );
            }}
          />
        </Router>
      </div >
    )
  }
}
export default App;
