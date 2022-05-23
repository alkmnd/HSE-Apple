import React from "react";
import ".././styles.css";

function Activity({ header, creator, description, group, dateCreate }) {
  return (
    <div className="activity">
      <div>
        <h1 className="activity-header">{header}</h1>
        <span className="activity-creator">Автор: {creator}</span>
        <span className="reciever-group"> Кому: {group}</span>
        <span className="description">{description}</span>
      
      </div>
      <span className="date">{dateCreate}</span>
      
    </div>
  );
}
export default Activity;
