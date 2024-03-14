import React from "react";
import User from "../model/User";
import Card from "./Card";
import "../styles/cards.css"

type CardListProps = {
  monsters: User[];
};

const CardList: React.FC<CardListProps> = ({monsters}) => {
  return (
    <>
      <div className="card-list">
        {monsters.map((monster) => (
          <Card key={monster?.id} monsterData={monster} />
        ))}
      </div>
    </>
  );
};

export default CardList;
