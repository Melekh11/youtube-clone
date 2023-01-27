import { Stack } from "@mui/system";
import React from "react";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: selectedCategory === category.name && "#FC1503",
          }}
          onClick={ () => {setSelectedCategory(category.name)} }
        >
          <span
            style={{
              color: selectedCategory === category.name ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span style={{
            color: selectedCategory === category.name && 'white'
          }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
