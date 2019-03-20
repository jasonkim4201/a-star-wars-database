import React, {Component} from "react";
import SearchBar from "../components/Searchbar";
import SearchRandomBtn from "../components/SearchRandom";
import queryAPI from "../utils/queryAPI";
import starshipsAPI from "../utils/starshipsAPI";
import Cards from "../components/Cards";

class Starships extends Component {
  state = {
    searchTerm: "",
    starshipsList: []
  }

  // make search starships
  searchStarships = query => {
    queryAPI.queryStarships(query)
      .then(res => {
        const starshipsList = res.data.results.map(starship => {
          // name, model, manufacturer, cost_in_credits, crew, passengers, cargo, starship_class
          return{
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            cost_in_credits: starship.cost_in_credits,
            crew: starship.crew.crew,
            passengers: starship.passengers,
            cargo_capacity: starship.cargo_capacity,
            starship_class: starship.starship_class
          };
        });
        console.log(starshipsList);
        this.setState({ starshipsList });
      })
      .catch(error => console.log(error));
  }
  // search random starships
  searchRandomStarshipPage = query => {
    queryAPI.queryRandomStarships(query)
      .then(res => {
        const starshipsList = res.data.results.map(starship => {
          return {
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            cost_in_credits: starship.cost_in_credits,
            crew: starship.crew,
            passengers: starship.passengers,
            cargo_capacity: starship.cargo_capacity,
            starship_class: starship.starship_class
          };
        });
        console.log(starshipsList);
        this.setState({ starshipsList });
      })
      .catch(error => console.log(error));
  }
  // handleinputchange
  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  // handleformsumbmit
  handleFormSubmit = event => {
    event.preventDefault();
    // prevent blank submissions...
    if (!this.state.searchTerm) {
      return false;
    }
    // reminder i only need the one search function as the random page search does not depend on a form
    this.searchStarships(this.state.searchTerm);
  }
  // handlesearch random
  handleSearchRandom = () => {
    // starships has a total count of 37 and remember to add +1 to prevent landing on a page 0 which will incur a 404 error
    const randomPage = Math.floor(Math.random() * 4) + 1;
    const urlLink = `https://swapi.co/api/starships/?page=${randomPage}`;
    this.searchRandomStarshipPage(urlLink);
  }
  // save starhsip
  saveStarship = starshipName => {
    // find starship by the names from state
    const starshipPicked = this.state.starshipsList.find(starship => starship.name === starshipName);
    starshipsAPI.saveStarship(starshipPicked)
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  }


  render() {
    return(
      <React.Fragment>
        <div className="text-light">
          <div className="my-5 container">
            <SearchBar placeholder="Search a starship..." name="searchTerm" value={this.state.searchTerm} onSubmit={this.handleFormSubmit} onChange={this.handleInputChange} onClick={this.handleFormSubmit}/>
            <br />
            <SearchRandomBtn word="starship" onClick={this.handleSearchRandom}/>
          </div>
          <div className="container-fluid">
            {/* again, make sure searched items content only appears if there's a valid search ie something in starshipsList */}
            {this.state.starshipsList.length > 0 &&
              <React.Fragment>
                <h5>Your search results:</h5>
                <div className="row d-flex justify-content-center"> 
                  {/* map each starship result into a card component */}
                  {this.state.starshipsList.map(starship => {
                    return (
                      <Cards key={starship.name} name={starship.name} prop1={`Model: ${starship.model}`} prop2={`Manufacturer: ${starship.manufacturer}`} prop3={`Cost in credits: ${starship.cost_in_credits}`} prop4={`Crew: ${starship.crew}`} prop5={`Passengers: ${starship.passengers}`} prop6={`Cargo capacity: ${starship.cargo_capacity}`} prop7={`Starship class: ${starship.starship_class}`} onClick={this.saveStarship}/>
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

export default Starships;