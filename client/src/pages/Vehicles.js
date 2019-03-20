import React, {Component} from "react";
import SearchBar from "../components/Searchbar";
import SearchRandomBtn from "../components/SearchRandom";


class Vehicles extends Component {
  state = {
    searchTerm: "",
    vehiclesList: []
  }

  // make search vehicles

  // search random vehicles

  // handleinputchange

  // handleformchange

  // handleformsumbmit

  // handlesearch random

  // save vehicles

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

export default Vehicles;