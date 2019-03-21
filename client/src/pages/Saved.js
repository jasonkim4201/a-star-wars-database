import React, { Component } from "react";
import charactersAPI from "../utils/charactersAPI";
import planetsAPI from "../utils/planetsAPI";
import starshipsAPI from "../utils/starshipsAPI";
import vehiclesAPI from "../utils/vehiclesAPI";
import ViewSavedCards from "../components/ViewSavedCards";

class Saved extends Component {
  state = {
    charactersList: [],
    planetsList: [],
    starshipsList: [],
    vehiclesList: [],
    /* everythingList: [] */
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
  /* getAll = () => {
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
  } */
  
  // make functions to delete entries. 


  render() {
    return (
      <React.Fragment>

        {/* <div className="my-3 container-fluid">
          <h5 className="d-flex justify-content-center text-white">Select saved category:</h5>
          <div className="d-flex justify-content-center">
            <div className="btn-group" role="group">
              <button className="btn btn-dark" onClick={this.getAll}>All</button>
              <button className="btn btn-dark">Characters</button>
              <button className="btn btn-dark">Planets</button>
              <button className="btn btn-dark">Starships</button>
              <button className="btn btn-dark">Vehicles</button>
            </div>
          </div>
        </div> */}
        
        <div className="container-fluid text-light">
          <div className="row d-flex justify-content-center">
          {/* stop judging me */}
            {this.state.charactersList.map(characters => {
              return(
                <ViewSavedCards
                  key={characters.name} name={characters.name} birth_year={`Birth year: ${characters.birth_year}`} 
                  height={`Height: ${characters.height}`} mass={`Mass: ${characters.mass}`} gender={`Gender: ${characters.gender}`} skin_color={`Skin color: ${characters.skin_color}`} hair_color={`Hair color: ${characters.hair_color}`} 
                  eye_color={`Eye color: ${characters.eye_color}`} 
                />
              )
            })}
            {this.state.planetsList.map(planets => {
              return(
                <ViewSavedCards key={planets.name} name={planets.name} rotation_period={`Rotation period: ${planets.rotation_period}`}
                  orbital_period={`Orbital  Period: ${planets.orbital_period}`} diameter={`Diameter: ${planets.diameter}`} 
                  climate={`Climate: ${planets.climate}`} gravity={`Gravity: ${planets.gravity}`} 
                  terrain={`Terrain: ${planets.terrain}`} surface_water={`Surface water: ${planets.surface_water}`}
                  population={`Population: ${planets.population}`}
               />  
              )
            })}
            {this.state.starshipsList.map(starships => {
              return(
                // name, model, manufacturer, cost_in_credits, crew, passengers, cargo_capacity, starship_class
                <ViewSavedCards key={starships.name} name={starships.name} model={`Model: ${starships.model}`} 
                  manufacturer={`Manufacturer: ${starships.manufacturer}`} 
                  cost_in_credits={`Cost in credits: ${starships.cost_in_credits}`} crew={`Crew: ${starships.crew}`} 
                  passengers={`Passengers: ${starships.passengers}`} cargo_capacity={`Cargo capacity: ${starships.cargo_capacity}`} starship_class={`Starship class: ${starships.starship_class}`}
                />
              )
            })}
            {this.state.vehiclesList.map(vehicles => {
              return(
              // name, model, manufacturer, cost_in_credits, crew, passengers, cargo_capacity, vehicle_class
                <ViewSavedCards key={vehicles.name} name={vehicles.name} model={`Model: ${vehicles.model}`}
                  manufacturer={`Manufacturer: ${vehicles.manufacturer}`} 
                  cost_in_credits={`Cost in credits: ${vehicles.cost_in_credits}`} crew={`Crew: ${vehicles.crew}`} 
                  passengers={`Passengers: ${vehicles.passengers}`} cargo_capacity={`Cargo capacity: ${vehicles.cargo_capacity}`} starship_class={`Vehicle class: ${vehicles.vehicle_class}`}
                />  
              )
            })}
          </div>
        </div>
      </React.Fragment>

    )
  }
}

export default Saved;