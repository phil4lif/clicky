import React from "react";
import DogCard from "./components/DogCard";
import dogs from "./dogs.json";
import Header from "./components/Header"

function App() {
    return (<div>
            <Header />
            <DogCard
            dogs={dogs}
            />
            </div>

    )
}

export default App;