import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';

import { CartContextComponents } from './Context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <CartContextComponents>
    <App />
  </CartContextComponents>,
);
