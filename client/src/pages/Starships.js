import React, {Component} from "react";
import SearchBar from "../components/Searchbar";
import SearchRandomBtn from "../components/SearchRandom";
import queryAPI from "../utils/queryAPI";
import starshipsAPI from "../utils/starshipsAPI";

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
            cargo: starship.cargo,
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
            cargo: starship.cargo,
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
            <SearchBar />
            <br />
            <SearchRandomBtn />
          </div>
          <div className="container-fluid">
            
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Starships;