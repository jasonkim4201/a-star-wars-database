import React from "react";

const Cards = (props) => {
  const styles = {
    width: "23rem",
    backgroundColor: "#4B515D"
  }
  return (
    <div style={styles} className="card m-3">
      <div className="card-body">
        <h5>{props.name}</h5>
        <div>{props.prop1}</div>
        <div>{props.prop2}</div>
        <div>{props.prop3}</div>
        <div>{props.prop4}</div>
        <div>{props.prop5}</div>
        <div>{props.prop6}</div>
        <div>{props.prop7}</div>
        <div>{props.prop8}</div>
        <button onClick={() => props.onClick(props.name)} className="mt-3 btn btn-sm btn-primary">Save</button>
      </div>
    </div>
  )
}

export default Cards;