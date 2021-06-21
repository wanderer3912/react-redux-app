import React from "react";

const Check = ({ checked, onClick }) => {
  if (checked === true) {
    return (
      <span
        className="material-icons text-success my-3 mx-5"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        check_circle_outline
      </span>
    );
  } else {
    return (
      <span
        className="material-icons text-muted my-3  mx-5"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        check_circle_outline
      </span>
    );
  }
};

export default Check;
