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
  }
  // on load get the saved material
  componentDidMount() {
    this.getCharacters();
    this.getPlanets();
    this.getStarships();
    this.getVehicles();
  }
  // make functions to retrieve saved materials
  // once items are retrieved then we can set the state of the partcular field
  getCharacters = () => {
    charactersAPI.getSavedCharacters()
      .then(res => {
        console.log(res.data)
        this.setState({ charactersList: res.data })
      })
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
   
  // make functions to delete entries. 
  deleteItem = (deleteKey, deleteId) => {
    
    // make a switch case where param1 will determine which delete route to go to. param2 will be the itemId needed for deletion
    switch (deleteKey) {
      case "character":
      charactersAPI.deleteCharacter(deleteId)
        .then(res => this.getCharacters())
        .catch(error => console.log(error));    
        break;
      
      case "planet":
      planetsAPI.deletePlanet(deleteId)
        .then(res => this.getPlanets())
        .catch(error => console.log(error));
        break;
      
      case "starship":
      starshipsAPI.deleteStarship(deleteId)
      .then(res => this.getStarships())
      .catch(error => console.log(error));
        break;

      case "vehicle":
      vehiclesAPI.deleteVehichle(deleteId)
        .then(res => this.getVehicles())
        .catch(error => console.log(error));
        break;

      default:
      console.log(`Error!`)
        break;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid text-light">
          <div className="row d-flex justify-content-center">
          {/* stop judging me */}
            {this.state.charactersList.map(characters => {
              return(
                <ViewSavedCards
                  key={characters._id} name={characters.name} birth_year={`Birth year: ${characters.birth_year}`} 
                  height={`Height: ${characters.height}`} mass={`Mass: ${characters.mass}`} gender={`Gender: ${characters.gender}`} skin_color={`Skin color: ${characters.skin_color}`} hair_color={`Hair color: ${characters.hair_color}`} 
                  eye_color={`Eye color: ${characters.eye_color}`} onClick={this.deleteItem} deleteKey="character" 
                  deleteId={characters._id} 
                />
              )
            })}
            {this.state.planetsList.map(planets => {
              return(
                <ViewSavedCards key={planets._id} name={planets.name} rotation_period={`Rotation period: ${planets.rotation_period}`}
                  orbital_period={`Orbital  Period: ${planets.orbital_period}`} diameter={`Diameter: ${planets.diameter}`} 
                  climate={`Climate: ${planets.climate}`} gravity={`Gravity: ${planets.gravity}`} 
                  terrain={`Terrain: ${planets.terrain}`} surface_water={`Surface water: ${planets.surface_water}`}
                  population={`Population: ${planets.population}`} onClick={this.deleteItem} deleteKey="planet" deleteId={planets._id} 
               />  
              )
            })}
            {this.state.starshipsList.map(starships => {
              return(
                // name, model, manufacturer, cost_in_credits, crew, passengers, cargo_capacity, starship_class
                <ViewSavedCards key={starships._id} name={starships.name} model={`Model: ${starships.model}`} 
                  manufacturer={`Manufacturer: ${starships.manufacturer}`} 
                  cost_in_credits={`Cost in credits: ${starships.cost_in_credits}`} crew={`Crew: ${starships.crew}`} 
                  passengers={`Passengers: ${starships.passengers}`} cargo_capacity={`Cargo capacity: ${starships.cargo_capacity}`} starship_class={`Starship class: ${starships.starship_class}`} onClick={this.deleteItem} deleteKey="starship" deleteId={starships._id}
                />
              )
            })}
            {this.state.vehiclesList.map(vehicles => {
              return(
              // name, model, manufacturer, cost_in_credits, crew, passengers, cargo_capacity, vehicle_class
                <ViewSavedCards key={vehicles._id} name={vehicles.name} model={`Model: ${vehicles.model}`}
                  manufacturer={`Manufacturer: ${vehicles.manufacturer}`} 
                  cost_in_credits={`Cost in credits: ${vehicles.cost_in_credits}`} crew={`Crew: ${vehicles.crew}`} 
                  passengers={`Passengers: ${vehicles.passengers}`} cargo_capacity={`Cargo capacity: ${vehicles.cargo_capacity}`} starship_class={`Vehicle class: ${vehicles.vehicle_class}`} onClick={this.deleteItem} deleteKey="vehicle" 
                  deleteId={vehicles._id}
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