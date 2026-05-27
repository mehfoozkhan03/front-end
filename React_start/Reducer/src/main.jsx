import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';

import { AppReducer } from './Context/AppReducer.jsx';

createRoot(document.getElementById('root')).render(
  <AppReducer>
    <App />
  </AppReducer>,
);
