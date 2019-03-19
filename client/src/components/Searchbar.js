import React from "react";

const SearchBar = (props) => {
  return (
    <form onSubmit={(event) => props.onSubmit(event)}>
      <div className="input-group">
        <input
          type="input"
          className="form-control"
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-info text-light"
            onClick={(event) => props.onClick(event)}
          >
            Search
                  </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar;