import React, { Component } from "react";
import DogCard from "./components/DogCard";
import dogs from "./dogs.json";
import Header from "./components/Header"
import Footer from "./components/Footer"
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            dogs,
            highScore: 0
        }
    }
    clickHandle = (id) => {
        console.log("clicked", id)
        let newDogs = this.state.dogs.map(dog => {

            if (dog.id === id) {
                if (dog.clicked === false) {
                    this.updateScore()
                    if(this.state.score >= this.state.highScore){
                        this.updateHighScore()
                        if(this.state.highScore === this.state.dogs.length){
                            this.winGame()
                        }
                    }
                    dog.clicked = true
                    //this.setState({ dogs: })
                }else{
                    this.restartGame()
                }
            }
            return dog
        })
        this.shuffleCards(newDogs)
        console.log(newDogs)
        this.setState({ dogs: newDogs})
    }

    shuffleCards =(newDogs) => {
        newDogs.sort( () => Math.random() - 0.5);
    }

    updateScore = () => {
        this.setState({ score: this.state.score + 1 });
    }

    updateHighScore = () => {
        this.setState({ highScore: this.state.highScore + 1})
    }
    
    winGame = () => {
        alert("You've won")
        this.setState({ highScore: 0})
        this.restartGame()
    }
    restartGame = () => {
        this.setState({ score: 0})
        let resetDogs = this.state.dogs.map(dog => {
            dog.clicked=false
            return dog
        })
        this.setState({ dogs: resetDogs})
    }
    render() {
        return (<div>
            <Header 
            score={this.state.score}
            highScore={this.state.highScore}
                />

            <DogCard
                dogs={this.state.dogs}
                onClick={this.clickHandle}
            />
            <Footer />
        </div>

        )
    }
}

export default App;