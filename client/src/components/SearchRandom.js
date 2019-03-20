import React from "react";

const SearchRandomBtn = (props) => {
  return (
    <React.Fragment>
      <p className="text-center">Don't know which {props.word} to search?</p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger" onClick={() => props.onClick()}>Show random</button>
      </div>
    </React.Fragment>
  )
}

export default SearchRandomBtn;