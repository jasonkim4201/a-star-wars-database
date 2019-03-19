import React, { Component } from "react";
import queryAPI from "../utils/queryAPI";
import charactersAPI from "../utils/charactersAPI";
import SearchBar from "../components/Searchbar";
/* import Searchbar from "../components/Searchbar"; */ //commented out for now to stop getting warnings about not using it

class Characters extends Component {
  state = {
    searchTerm: "",
    charactersList: []
  }

  searchCharacters = query => {
    queryAPI.queryCharacters(query)
      .then(res => {
        const charactersList = res.data.results.map(character => {
          return {
            name: character.name,
            height: character.height,
            mass: character.mass,
            hair_color: character.hair_color,
            skin_color: character.skin_color,
            eye_color: character.eye_color,
            birth_year: character.birth_year,
            gender: character.gender
          };
        });
        console.log(charactersList);
        this.setState({ charactersList });
      })
      .catch(error => {
        console.log(error);
      });
  }

  searchAllCharacters = query => {
    queryAPI.queryAllCharacters(query)
      .then(res => {
        const charactersList = res.data.results.map(character => {
          return {
            name: character.name,
            height: character.height,
            mass: character.mass,
            hair_color: character.hair_color,
            skin_color: character.skin_color,
            eye_color: character.eye_color,
            birth_year: character.birth_year,
            gender: character.gender
          };
        });
        console.log(charactersList);
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // if there is no entry in seach bar do not allow a search to happen. I will add a button to allow to list all characters in the swapi character query

    if (!this.state.searchTerm) {
      return false;
    }
    // this will allow be to enter the search query
    this.searchCharacters(this.state.searchTerm);
  }

  /* okay so the api only returns a max of 10 items in a search or lets try a for in loop with all the links...and it works! */
  handleShowAll = () => {
    const charactersArray = [
      "https://swapi.co/api/people/",
      "https://swapi.co/api/people/?page=2",
      "https://swapi.co/api/people/?page=3",
      "https://swapi.co/api/people/?page=4",
      "https://swapi.co/api/people/?page=5",
      "https://swapi.co/api/people/?page=6",
      "https://swapi.co/api/people/?page=7",
      "https://swapi.co/api/people/?page=8",
      "https://swapi.co/api/people/?page=9"
    ];

    for (const charactersUrl of charactersArray) {
      this.searchAllCharacters(charactersUrl);
    }

  }

  saveCharacter = characterName => {
    // find character in this.state.characterList based on character name
    const characterPicked = this.state.charactersList.find(character => character.name === characterName);

    charactersAPI.saveCharacter(characterPicked)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <React.Fragment>
        <div className="text-light">
          <div className="my-5 container">
            <SearchBar
            onSubmit={this.handleFormSubmit}
            placeholder={"Search for characters...."}
            name="searchTerm"
            onChange={this.handleInputChange}
            value={this.state.searchTerm}
            onClick={this.handleFormSubmit}
            />

            <br />
            
            {/* Will probably do the same and make a component out of the show all button  */}
            <p className="text-center">Don't know what to search?</p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger" onClick={this.handleShowAll}>Show all</button>
            </div>


          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Characters;