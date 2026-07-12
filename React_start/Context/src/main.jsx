import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { CounterComponentContext } from './Context/CounterContext.jsx';

createRoot(document.getElementById('root')).render(
  <CounterComponentContext>
    <App />
  </CounterComponentContext>,
);
