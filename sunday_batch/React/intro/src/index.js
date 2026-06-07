import { createRoot } from 'react-dom/client';

import { App } from './App.jsx';

const root = document.getElementById('root');
console.log(`🚀 ~ root:`, root);

createRoot(root).render(<App />);
