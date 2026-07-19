import { createRoot } from 'react-dom/client';

import { App } from './App.jsx';
import { TodoComponentsContext } from './Context/todoContext.jsx';

createRoot(document.getElementById('root')).render(
  <TodoComponentsContext>
    <App />
  </TodoComponentsContext>,
);
