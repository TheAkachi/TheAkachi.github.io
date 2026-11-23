import React from 'react';
import { createRoot } from 'react-dom/client';

// Fontes locais pelos pacotes Fontsource (subconjuntos latinos com acentos do português).
import '@fontsource/rajdhani/latin-700.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-700.css';
import '@fontsource/silkscreen/latin-400.css';
import App from './App.jsx';
import './styles.css';

// O HTML fornece um único ponto de montagem; os componentes organizam a interface.
// StrictMode ajuda a detectar problemas em desenvolvimento, sem adicionar elementos à página.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
