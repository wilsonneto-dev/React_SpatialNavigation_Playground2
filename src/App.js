import React from "react";
import Home from "./pages/home";

import {
  initNavigation,
  setKeyMap,
} from "@noriginmedia/react-spatial-navigation";

initNavigation({
  /* debug: true,
  visualDebug: true, */
  nativeMode: false,
});

setKeyMap({
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  enter: 13,
});

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
