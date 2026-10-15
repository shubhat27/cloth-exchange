import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import ItemDetails from "./pages/ItemDetails";
import SwapRequest from "./pages/SwapRequest";
import ListItem from "./pages/Listings";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/listings"
          element={<Listings />}
        />

        <Route
          path="/item/:id"
          element={<ItemDetails />}
        />

        <Route
          path="/swap-request/:id"
          element={<SwapRequest />}
        />

        <Route 
        path="/list-item" 
        element={<ListItem />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;