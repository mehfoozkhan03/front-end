import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';

import { CounterProvider } from './Context/Counter.jsx';

createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <App />
  </CounterProvider>,
);
