import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';

import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <Router>
      <App />
    </Router>
  </AuthContext>,
);
