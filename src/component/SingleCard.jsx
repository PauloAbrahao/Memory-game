import React from "react";

import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {

  const handleClick = () => { 
    if (!disabled) {
      handleChoice(card);
    }
  }
  
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ''}>
        <img src={card.src} alt="card" className="front" />
        <img
          src={`${process.env.PUBLIC_URL}/img/cover.png`}
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
