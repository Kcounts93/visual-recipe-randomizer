import React from "react";

const ShuffleButton = ({ onShuffle }) => {
  return (
    <button onClick={onShuffle} className='shuffle-btn'>
      Shuffle Recipe
    </button>
  );
};

export default ShuffleButton;
