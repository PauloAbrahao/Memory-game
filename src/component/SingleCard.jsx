import React from "react";

import "./SingleCard.css";

const SingleCard = ({ card, handleChoice }) => {

  const handleClick = () => { 
    handleChoice(card);
  }
  
  return (
    <div className="card">
      <div>
        <img src={card.src} alt="card" className="front" />
        <img
          src="/img/cover.png"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
