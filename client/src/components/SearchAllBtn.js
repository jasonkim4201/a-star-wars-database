import React from "react";

const SearchAllBtn = (props) => {
  return (
    <React.Fragment>
      <p className="text-center">Don't know what {props.word} to search?</p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger" onClick={() => props.onClick()}>Show all</button>
      </div>
    </React.Fragment>
  )
}

export default SearchAllBtn;