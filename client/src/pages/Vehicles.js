import React, {Component} from "react";
import SearchBar from "../components/Searchbar";
import SearchRandomBtn from "../components/SearchRandom";
import queryAPI from "../utils/queryAPI";
import vehicleAPI from "../utils/vehiclesAPI";
import Cards from "../components/Cards";

class Vehicles extends Component {
  state = {
    searchTerm: "",
    vehiclesList: []
  }

  // make search vehicles
  searchVehicles = query => {
    queryAPI.queryVehicles(query)
      .then(res => {
        // build the vehicles from res.data list for state and map it over
        const vehiclesList = res.data.results.map(vehicle => {
          return {
            //name, model, manufacturer, cost_in_credits, crew, passengers, cargo_capacity, vehicle_class
            name: vehicle.name,
            model: vehicle.model,
            manufacturer: vehicle.manufacturer,
            cost_in_credits: vehicle.cost_in_credits,
            crew: vehicle.crew,
            passengers: vehicle.passengers,
            cargo_capacity: vehicle.cargo_capacity,
            vehicle_class: vehicle.vehicle_class
          };
        });
        this.setState({ vehiclesList });
      })
      .catch(error => console.log(error));
  }
  // search random vehicles
  searchRandomPage = query => {
    queryAPI.queryRandomVehicles(query)
      .then(res => {
        const vehiclesList = res.data.results.map(vehicle => {
          return {
            name: vehicle.name,
            model: vehicle.model,
            manufacturer: vehicle.manufacturer,
            cost_in_credits: vehicle.cost_in_credits,
            crew: vehicle.crew,
            passengers: vehicle.passengers,
            cargo_capacity: vehicle.cargo_capacity,
            vehicle_class: vehicle.vehicle_class
          };
        });
        this.setState({ vehiclesList });
      })
      .catch(error => console.log(error));
  }
  // handleinputchange
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }
  // handleformsubmit
  handleFormSubmit = event => {
    event.preventDefault();

    if (!this.state.searchTerm) {
      return false;
    }

    this.searchVehicles(this.state.searchTerm);
  }

  // handlesearch random
  handleSearchRandom = () => {
    // 39 total vehicles so a total of 4 random pages add +1 to prevent getting a page 0
    const randomPage = Math.floor(Math.random() * 4) + 1;
    const urlLink = `https://swapi.co/api/vehicles/?page=${randomPage}`;
    this.searchRandomPage(urlLink);
  }
  // save vehicles
  saveVehicle = vehicleName => {
    // find vehicle by name and match it within the state
    const vehiclePicked = this.state.vehiclesList.find(vehicle => vehicle.name === vehicleName);
    vehicleAPI.saveVehicle(vehiclePicked)
      .then(res => res.data)
      .catch(error => console.log(error));
  }

  render() {
    return(
      <React.Fragment>
        <div className="text-light">
          <div className="my-5 container">
            <SearchBar placeholder="Search a vehicle..." name="searchTerm" value={this.state.searchTerm} onSubmit={this.handleFormSubmit} onChange={this.handleInputChange} onClick={this.handleFormSubmit} />
            <br />
            <SearchRandomBtn word="vehicle" onClick={this.handleSearchRandom}/>
          </div>
          <div className="container-fluid">
            {this.state.vehiclesList.length > 0 &&
              <React.Fragment>
                <h5>Your search results:</h5>
                <div className="row d-flex justify-content-center">
                {/* make map of cards */}
                {this.state.vehiclesList.map(vehicle => {
                  return (
                    //name, model, manufacturer, cost_in_credits, crew, passengers, cargo_capacity, vehicle_class
                    <Cards key={vehicle.name} name={vehicle.name} prop1={`Model: ${vehicle.model}`} prop2={`Manufacturer: ${vehicle.manufacturer}`} prop3={`Cost in credits: ${vehicle.cost_in_credits}`} prop4={`Crew: ${vehicle.crew}`} prop5={`Passengers: ${vehicle.passengers}`} prop6={`Cargo capacity: ${vehicle.cargo_capacity}`} prop7={`Vehicle class: ${vehicle.vehicle_class}`} onClick={this.saveVehicle}/>
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

export default Vehicles;