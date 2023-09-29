import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Controls } from './features/controls/Controls';
import { FavouriteBooks } from './components/FavouriteBooks';

import { HomePage } from './pages/HomePage';
import { DetailsPage } from './pages/DetailsPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

import './App.css';

function App() {
  const [openFavourites, setOpenFavourites] = useState(false);

  return (
    <div className="App">
      <Header
        openFavourites={openFavourites}
        setOpenFavourites={setOpenFavourites}
      />

      <Controls />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:id" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <FavouriteBooks
        openFavourites={openFavourites}
        setOpenFavourites={setOpenFavourites}
      />
    </div>
  );
}

export default App;
