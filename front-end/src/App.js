import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Show from "./pages/Show";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Book from "./pages/Book";


// import React Hooks
import { useState, useEffect } from "react";

// import axios
import axios from "axios";


export default function App() {
  const [isSearched, setIsSearched] = useState(false);
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching API for artists");
      const res = await axios.get(
        !search==="" ? `${API}/artists` : `${API}/artists/?type=${search}`
      );
      setArtists(res.data.payload);
    };
    fetchData();
  }, [search]);

  console.log(artists);
  console.log(search);

  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline/>
        <NavBar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  artists={artists}
                  search={search}
                  isSearched={isSearched}
                  setSearch={setSearch}
                />
              }
            />
            <Route
              path="/artists"
              element={<Show artists={artists} search={search} />}
            />
            <Route path="/post" element={<Create />} />

            <Route path="/artists/:id" element={<Detail open={open} setOpen={setOpen} />} />
            <Route path="/artists/:id/edit" element={<Edit setOpen={setOpen}  />} />
            <Route path="/artists/:id/book" element={<Book/>} />

          </Routes>
        </main>
      </React.Fragment>
    </BrowserRouter>
  );
}
