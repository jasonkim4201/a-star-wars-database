import React from "react";

const Cards = (props) => {
  return (
    <div className="card m-3">
      <div className="card-body">
        <h5>{props.name}</h5>
        <div>Birth year: {props.birth}</div>
        <div>Height: {props.height}</div>
        <div>Mass: {props.mass}</div>
        <div>Gender: {props.gender}</div>
        <div>Skin color: {props.skin}</div>
        <div>Hair color: {props.hair}</div>
        <div>Eye color: {props.eye}</div>
      </div>
    </div>
  )
}

export default Cards;