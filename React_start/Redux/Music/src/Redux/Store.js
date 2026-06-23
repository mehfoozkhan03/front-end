import { configureStore } from "@reduxjs/toolkit";

import { musicSlicer } from "./Features/musicSlicer";
import { authSlicer } from "./Features/AuthSlicer";

const Store = configureStore({
  reducer: {
    auth: authSlicer,
    music: musicSlicer,
  },
});

export {Store}