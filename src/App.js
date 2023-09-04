import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { DetailsBookPage } from './pages/DetailsBookPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FavouriteBooks } from './components/FavouriteBooks';
import './App.css';
import { Controls } from './components/Controls';

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
        <Route path=":id" element={<DetailsBookPage />} />
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
