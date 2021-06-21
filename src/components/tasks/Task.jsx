import React from "react";
import moment from "moment";
import { removeTask } from "../../actions/taskActions";
import { connect } from "react-redux";
import Check from "./Check";
import { toggleChecked } from "../../actions/taskActions";

const Task = ({ task, removeTask, toggleChecked }) => {
  const handleRemove = (task) => {
    removeTask(task);
  };

  const handleCheck = (task) => {
    toggleChecked(task);
  };

  return (
    <>
      <div
        class="card"
        style={{
          width: "25rem",
          margin: "10px auto",
          border: "3px solid lightgrey",
        }}
      >
        <div class="card-body">
          <h5 class="card-title">{task.task}</h5>
          <h6 class="card-subtitle mb-2 text-muted my-3">
            TimeStamp:{moment(task.date.toDate()).calendar()}{" "}
          </h6>
          <Check onClick={() => handleCheck(task)} checked={task.checked} />
          <span
            className="material-icons text-danger mx-5 my-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(task)}
          >
            delete
          </span>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (task) => dispatch(removeTask(task)),
    toggleChecked: (task) => dispatch(toggleChecked(task)),
  };
};

export default connect(null, mapDispatchToProps)(Task);
