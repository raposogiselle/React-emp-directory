import React from "react";
import "./style.css";

function EmployeeCard(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name: </strong> 
            {props.firstName} {props.lastName}
          </li>
          <li>
            <strong>Location: </strong> 
            {props.city}, {props.state}
          </li>
          <li>
            <strong>Age: </strong> 
            {props.age}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;