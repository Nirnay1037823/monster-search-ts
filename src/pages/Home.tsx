import React, { useState } from "react";
import "../styles/home.css";
import User from "../model/User";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";

type homeProps = {
  users: User[];
};

const Home: React.FC<homeProps> = ({ users }) => {
  const [searchField, setSearchField] = useState("");
  const monsters = users;
  const filterMonsters = monsters.filter((monster) =>
    monster.username.toLowerCase().includes(searchField.toLowerCase())
  );
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  }
  return (
    <div className="App">
      <h1>Monster Rollodex Tarun Commit</h1>
      <SearchBar handleChange={handleChange}/>
      <CardList monsters={filterMonsters} />
    </div>
  );
};

export default Home;
