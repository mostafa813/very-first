import React from "react";
import SearchAppBar from "./components/searchbar";
import { Stack } from "@mui/material";
import FilterForm from "./components/filter-form";

function App() {
  return (
    <div className="App">
      <Stack>
          <SearchAppBar />
          <FilterForm/>
      </Stack>
    </div>
  );
}

export default App;
