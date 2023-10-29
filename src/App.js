import React from "react";
import {Provider} from "react-redux"
import { configStore } from "./state/configStore";
import { Landing } from "./components/Landing";

function App() {
  const myStore = configStore()
  return (
    <Provider store={myStore}>
  <Landing/>
  </Provider>
  );
}

export default App;
