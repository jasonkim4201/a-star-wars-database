import React, { Component } from "react";
import queryAPI from "../utils/queryAPI";
import charactersAPI from "../utils/charactersAPI";
import SearchBar from "../components/Searchbar";
import SearchRandomBtn from "../components/SearchRandom";
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

  searchRandomPage = query => {
    queryAPI.queryRandomCharacters(query)
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
      })
  }
  
  handleShowRandom = () => {
    // I'm too dumb to get it the special way i wanted so we'll just go with random pages 😔
    const randomPage = Math.floor(Math.random() * 9) + 1;
    const urlLink = `https://swapi.co/api/people/?page=${randomPage}`;
    this.searchRandomPage(urlLink);
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
            <SearchRandomBtn word="character" onClick={this.handleShowRandom} />
          </div>
          {/* place results here with a fuild container */}
          <div className="container-fluid">
              {/* if there's something in characters list then search result stuff will appear */}
            {this.state.charactersList.length > 0 &&
            <React.Fragment>
            <h5>Your search results:</h5>
            <div className="row d-flex justify-content-center">
              {/* this is where i will map out my cards */}
              {this.state.charactersList.map(character => {
                return (
                  <Cards
                    key={character.name} name={character.name} prop1={`Birth year: ${character.birth_year}`} prop2={`Height: ${character.height}`} prop3={`Mass: ${character.mass}`} prop4={`Gender: ${character.gender}`} prop5={`Skin color: ${character.skin_color}`} prop6={`Hair color: ${character.hair_color}`} prop7={`Eye color: ${character.eye_color}`} onClick={this.saveCharacter}
                  />
                )
              })}
            </div>
            </React.Fragment>
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Characters;