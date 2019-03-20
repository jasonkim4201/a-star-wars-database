import React, {Component} from "react";
import SearchBar from "../components/Searchbar";
import SearchRandomBtn from "../components/SearchRandom";
import queryAPI from "../utils/queryAPI";
import planetsAPI from "../utils/planetsAPI";
import Cards from "../components/Cards";

class Planets extends Component {
  state = {
    searchTerm: "",
    planetsList: []
  }

  searchPlanets = query => {
    queryAPI.queryPlanets(query)
      .then(res => {
        const planetsList = res.data.results.map(planet => {
          return {
            name: planet.name,
            rotation_period: planet.rotation_period,
            orbital_period: planet.orbital_period,
            diameter: planet.diameter,
            climate: planet.climate,
            gravity: planet.gravity,
            terrain: planet.terrain,
            surface_water: planet.surface_water,
            population: planet.population
          };
        });
        console.log(planetsList);
        this.setState({ planetsList });
      })
      .catch(error => console.log(error));
  }

  searchRandomPage = query => {
    queryAPI.queryRandomPlanets(query)
      .then(res => {
        const planetsList = res.data.results.map(planet => {
          return{
            name: planet.name,
            rotation_period: planet.rotation_period,
            orbital_period: planet.orbital_period,
            diameter: planet.diameter,
            climate: planet.climate,
            gravity: planet.gravity,
            terrain: planet.terrain,
            surface_water: planet.surface_water,
            population: planet.population
          };
        });
        console.log(planetsList);
        this.setState({ planetsList });
      })
      .catch(error => console.log(error));
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (!this.state.searchTerm) {
      return false;
    }
    this.searchPlanets(this.state.searchTerm);
  }
// now work on the random search stuff
  handleSearchRandom = () => {
    const randomPage = Math.floor(Math.random() * 7);
    const urlLink = `https://swapi.co/api/planets/?page=${randomPage}`;
    this.searchRandomPage(urlLink);
  }
// save planet
  savePlanet = planetName => {
    // find planet based on id and match it
    const planetPicked = this.state.planetsList.find(planet => planet.name === planetName);
    planetsAPI.savePlanet(planetPicked)
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  }

  render() {
    return(
      <React.Fragment>
        <div className="text-light">
          <div className="my-5 container">
            <SearchBar onSubmit={this.handleFormSubmit} placeholder="Search for a planet..." name="searchTerm" value={this.state.searchTerm} onChange={this.handleInputChange} onClick={this.handleFormSubmit}/>
            <br />
            <SearchRandomBtn />
          </div>
          <div className="container-fluid">
            {/* reminder to only show characters list if there is a valid search */}
            {this.state.planetsList.length > 0 && 
              <React.Fragment>
                <h5>Your search results:</h5>
                <div className="row d-flex justify-content-center">
                  {this.state.planetsList.map(planet => {
                    return (
                      <Cards />
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

export default Planets;