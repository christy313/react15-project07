import React from "react";
import { FiChevronRight } from "react-icons/fi";

const ButtonRight = ({ index, setIndex }) => (
  <button className="next" onClick={() => setIndex(index + 1)}>
    <FiChevronRight />
  </button>
);

export default ButtonRight;
