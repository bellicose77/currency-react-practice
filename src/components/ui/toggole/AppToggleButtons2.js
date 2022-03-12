import React from "react";

const AppToggleButtons2 = ({
  data,
  toggleState,
  setToggleState,
  handleClick,
  id = "",
}) => {
  const uniqueId = () => `_${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div
      className="btn-group"
      role="button"
      tabIndex="0"
      onClick={handleClick ? () => handleClick(id) : handleClick}
    >
      {data.map((item) => (
        <button
          type="button"
          key={uniqueId()}
          className={`btn ${item === toggleState ? "active" : ""}`}
          onClick={() => setToggleState(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default AppToggleButtons2;
