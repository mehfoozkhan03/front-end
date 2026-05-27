import { createRoot } from 'react-dom/client';

import { CounterProvider } from './Context/CounterContext.jsx';
import { App } from './App.jsx';

createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <App />
  </CounterProvider>,
);
