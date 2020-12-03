import React from "react";
import "./actorFilterControls.css";

const ActorFilter = props => {

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };

  return (
    <div className="row bg-warning">
      <div className="col-md-12">
        <h4>
          <span>Search for Actor:</span>
          <input
            type="text"
            placeholder="Actor Name"
            onChange={handleTextChange}
          />
        </h4>
      </div>
    </div>
  );
};

export default ActorFilter;