import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Home } from './Pages/Home/index';
import { GlobalStyle } from './globalstyle';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>
)
