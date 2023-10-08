import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Controls } from './features/controls/Controls';
import { Main } from './components/Main';
import { FavouriteBooks } from './features/favourites/FavouriteBooks';

import { HomePage } from './pages/HomePage';
import { DetailsPage } from './pages/DetailsPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Controls />

      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:id" element={<DetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>

      <FavouriteBooks />
    </div>
  );
}

export default App;
