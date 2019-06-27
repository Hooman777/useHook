import React, { useState } from "react";

const Test = () => {
  const [element1, setElement1] = useState("Type something here please.");
  const [element2, setElement2] = useState("");
  const handleChange = ({ target }) => {
    setElement1(target.value);
    setElement2("Type here then...");
  };
  return (
    <React.Fragment>
      <h1>{element1}</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={handleChange}
        name="testName"
      />
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text m-8">{element2}</span>
        </div>
        <textarea
          className="form-control form-lg m-6"
          aria-label="With textarea"
          onChange={handleChange}
          name="testName"
          placeholder={element2}
        />
      </div>
    </React.Fragment>
  );
};

export default Test;
