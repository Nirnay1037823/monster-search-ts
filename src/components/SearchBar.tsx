import { TextField } from "@mui/material";
import React from "react";

type SearchBarProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ handleChange }) => {
  return (
    <TextField
      id="search-box"
      label="Search-Monsters"
      variant="outlined"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
