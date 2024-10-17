import React from "react";

import "./App.css";
import AddMicrocontroller from "./components/AddMicrocontroller/AddMicrocontroller";
import SearchMicrocontroller from "./components/SearchMicrocontroller/SearchMicrocontroller";

function App() {
    return (
        <div className="App">
            <SearchMicrocontroller />
            {/* <AddMicrocontroller /> */}
        </div>
    );
}

export default App;
