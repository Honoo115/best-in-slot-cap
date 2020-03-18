import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from './mainPage/mainPage'
import CharPage from './charPage/charPage'
import CharForm from './charForm/charForm'
import SlotForm from './slotForm/slotForm'
import config from "./config";

class App extends Component {
  state = { characters: [], hasError: false, fetched: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  getCharacters = () => {
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

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    return (
      <div>
        <h1>BEST IN SLOT MANAGER</h1>
        <Router>
          <Route exact path={"/"}>
            <div> <MainPage
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
                <CharPage
                  character={character}
                  history={routeProps.history}

                />
              )
            }}
          >
          </Route>
          <Route exact path={"/charcreation"}
            render={(routeProps) => {
              let character_id = routeProps.match.params.character_id;
              let character = this.state.characters.filter(character => {
                let id = character.id
                return (
                  id.toString() === character_id
                )
              })[0]

              return (
                <CharForm
                  character={character}
                  history={routeProps.history}
                  getCharacters={this.getCharacters}
                />
              )
            }}
          />


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
                <SlotForm
                  history={routeProps.history}
                  slot={slot}
                  getCharacters={this.getCharacters}
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
