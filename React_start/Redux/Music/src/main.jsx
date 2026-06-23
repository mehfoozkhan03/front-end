import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";

import { BrowserRouter as Router } from "react-router-dom";
import { Store } from "./Redux/Store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
