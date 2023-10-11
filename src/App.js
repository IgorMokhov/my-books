import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectTheme } from './features/theme/theme-slice';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { Controls } from './features/controls/Controls';
import { FavouriteBooks } from './features/favourites/FavouriteBooks';

import { HomePage } from './pages/HomePage';
import { DetailsPage } from './pages/DetailsPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


import { getDesignTokens } from './themeConfig';
import './App.css';


function App() {
  const mode = useSelector(selectTheme);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />

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
      </ThemeProvider>
    </div>
  );
}

export default App;
