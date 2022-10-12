import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecipeContext, RecipeProvider } from './context/RecipeContext';
import { ThemeContext, ThemeProvider } from './context/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecipeProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </RecipeProvider>

  </React.StrictMode>
);
