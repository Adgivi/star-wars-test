import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryStatus } from "@reduxjs/toolkit/query";

import theme from "./app/theme";
import List from "./features/characters/List/List";
import Bio from "./features/characters/Bio/Bio";
import ViewContainer from "./app/components/ViewContainer/ViewContainer";
import Starship from "./features/characters/Starship/Starship";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/character/:id" element={<Bio />} />
          <Route path="/starship/:id" element={<Starship />} />
          <Route
            path="*"
            element={<ViewContainer status={QueryStatus.rejected} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
