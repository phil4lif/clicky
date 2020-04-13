import React from "react";
import DogCard from "./components/DogCard";
import dogs from "./dogs.json";


function App() {
    return (
            <DogCard
            dogs={dogs}
            />

    )
}

export default App;