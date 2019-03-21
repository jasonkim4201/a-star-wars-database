import React, {Component} from "react";
import charactersAPI from "../utils/charactersAPI";
import planetsAPI from "../utils/planetsAPI";
import starshipsAPI from "../utils/starshipsAPI";
import vehiclesAPI from "../utils/vehiclesAPI";

class Saved extends Component {
  state = {
    charactersList: [],
    planetsList: [],
    starshipsList: [],
    vehiclesList: [],
    everythingList: []
  }
  // on load get the saved material
  componentDidMount() {
    console.log(`hi im a component did mount`);
    this.getCharacters();
    this.getPlanets();
    this.getStarships();
    this.getVehicles();
  }
  // make functions to retrieve saved materials
  // once items are retrieved then we can set the state of the partcular field
  getCharacters = () => {
    charactersAPI.getSavedCharacters()
      .then(res => this.setState({ charactersList: res.data }))
      .catch(error => console.log(error));
  }
  getPlanets = () => {
    planetsAPI.getSavedPlanets()
      .then(res => this.setState({ planetsList: res.data }))
      .catch(error => console.log(error));
  }
  getStarships = () => {
    starshipsAPI.getSavedStarships()
      .then(res => this.setState({ starshipsList: res.data }))
      .catch(error => console.log(error));
  }
  getVehicles = () => {
    vehiclesAPI.getSavedVehicles()
      .then(res => this.setState({ vehiclesList: res.data }))
      .catch(error => console.log(error));
  }
  getAll = () => {
    // so contcat all lists into a variable and use that variable to setState
    console.log(`Fetching all other lists...`);
    let charactersList = this.state.charactersList;
    let planetsList = this.state.planetsList;
    let starshipsList = this.state.starshipsList;
    let vehiclesList = this.state.vehiclesList; 
    let allArray = [];
    console.log(`Combining all arrays...`)
    allArray = charactersList.concat(planetsList, starshipsList, vehiclesList);
    console.log(allArray);
    console.log(`Setting state...`);
    this.setState({ everythingList: allArray });
    console.log(`Completed! You now have an array of all saved items!`);
  }

  render() {
    return(
      <button className="btn btn-primary" onClick={this.getAll}>get all</button>

    )
  }
}

export default Saved;