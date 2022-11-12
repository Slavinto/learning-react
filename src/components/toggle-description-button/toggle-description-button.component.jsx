import { useState } from "react";

const ToggleDescription = ({ description }) => {
  const [showDesc, setShowDesc] = useState(false);
  const handleClick = () => {
    setShowDesc(!showDesc);
  };
  return (
    <div>
      <button onClick={handleClick}>{showDesc ? "Hide" : "Show More"}</button>
      <p style={{ width: "600px" }}>{showDesc ? description : ""}</p>
    </div>
  );
};

export default ToggleDescription;
