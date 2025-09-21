import './index.css';
import './helpers/fontawesome.library.js';
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { createRoot } from 'react-dom/client';
import App from './App.js';

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <App />
      </MantineProvider>
    </BrowserRouter>,
  </StrictMode>,
);
