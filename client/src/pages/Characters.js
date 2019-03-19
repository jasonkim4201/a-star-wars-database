import React, { Component } from "react";
import queryAPI from "../utils/queryAPI";
import charactersAPI from "../utils/charactersAPI";
import SearchBar from "../components/Searchbar";
import SearchAllBtn from "../components/SearchAllBtn";
import Cards from "../components/Cards";

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
        
        // remember to set the state so search appears lol
        // uh oh all other results get over ridden in state. time to concat all arrays together and set the whole thing as state
        // since the for in loop repeats x amount of times i cannot set state here
        // so for each characters list i should try making a another function which will
      })
      .catch(error => {
        console.log(error);
      })
  }
  /* okay so the api only returns a max of 10 items in a search or lets try a for in loop with all the links...and it works! */
  /* have another idea with paginations and using res.data.next(and .previous) combined with a generator funciton will come back to it later */

  handleShowAll = () => {
    /* const charactersArray = [
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
 */
    /* for (const charactersUrl of charactersArray) {
      this.searchAllCharacters(charactersUrl);
    } */
    console.log(`removed button function until further notice`)    
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

  saveCharacter = characterName => {
    // find character in this.state.characterList based on character name
    const characterPicked = this.state.charactersList.find(character => character.name === characterName);

    charactersAPI.saveCharacter(characterPicked)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
        console.log(`oops`)
      })
  }

  render() {
    return (
      <React.Fragment>
        <div className="text-light">
          <div className="my-5 container">
            <SearchBar onSubmit={this.handleFormSubmit} placeholder={"Search for characters...."} name="searchTerm"
              onChange={this.handleInputChange} value={this.state.searchTerm} onClick={this.handleFormSubmit}
            />
            <br />
            <SearchAllBtn word="character" onClick={this.handleShowAll} />
          </div>

          {/* place results here with a fuild container */}
          <div className="container-fluid">
            <h5>Your search results:</h5>
            <div className="row d-flex justify-content-center">
              {/* this is where i will map out my cards */}
              {this.state.charactersList.map(character => {
                return (
                  <Cards
                    key={character.name} name={character.name} birth={character.birth_year} height={character.height} mass={character.mass} gender={character.gender} skin={character.skin_color} hair={character.hair_color} eye={character.eye_color} onClick={this.saveCharacter}
                  />
                )
              })}
            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Characters;