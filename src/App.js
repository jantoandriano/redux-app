import React from "react";
import { BrowserRouter, Route} from "react-router-dom";

import Post from "./components/Post";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

        <Route path="/" component={Post} />
        <Route path="/home" component={Post}/>
  
    </BrowserRouter>
  );
}

export default App;
