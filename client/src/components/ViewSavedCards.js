import React from "react";

const ViewSavedCards = (props) => {
  const styles = {
    width: "22rem",
    backgroundColor: "#4B515D"
  }
  return(
    /* lmao this is probably a stupid way to go about it. whatever it works */
    <div style={styles} className="card m-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5>{props.name}</h5>
          {/* why does react freak out over emojis? whatever pressing backspace once makes it stop yelling at me */}
          <button onClick={() => props.onClick(props.deleteKey, props.deleteId)} className="btn btn-sm">🗑</button>
        </div>
        <div>{props.birth_year}</div>
        <div>{props.height}</div>
        <div>{props.mass}</div>
        <div>{props.gender}</div>
        <div>{props.skin_color}</div>
        <div>{props.hair_color}</div>
        <div>{props.eye_color}</div>
        <div>{props.rotation_period}</div>
        <div>{props.orbital_period}</div>
        <div>{props.diameter}</div>
        <div>{props.climate}</div>
        <div>{props.gravity}</div>
        <div>{props.terrain}</div>
        <div>{props.surface_water}</div>
        <div>{props.population}</div>
        <div>{props.model}</div>
        <div>{props.manufacturer}</div>
        <div>{props.cost_in_credits}</div>
        <div>{props.crew}</div>
        <div>{props.passengers}</div>
        <div>{props.cargo_capacity}</div>
        <div>{props.starship_class}</div>
        <div>{props.vehicle_class}</div>
      </div>
    </div>
  )
}

export default ViewSavedCards;