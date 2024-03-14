import React from "react";
import User from "../model/User";
import "../styles/cards.css"

type CardProps = {
  monsterData: User;
};

const Card: React.FC<CardProps> = ({ monsterData }) => {
  const { id, username, email } = monsterData;

  const url = "https://robohash.org/" + id + "?set=set2&size=180x180";
  return (
    <div className="card-container">
      <img src={url} alt="monster" />
      <h2> {username}</h2>
      <h3>{email}</h3>
    </div>
  );
};

export default Card;
