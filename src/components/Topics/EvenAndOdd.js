import React, { Component } from 'react';
 
  class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray = [],
            oddArray =  [],
            userInput = ""
        }
    }
    
    handleChange(val) {
        this.setState({ userInput: val });
    }
    assignEvenAndOdds(userInput) {
        var sortArr = userInput.split(',');
        var evenArr = [];
        var oddArr = [];
    
        for(i=0;i < sortArr.length;i++){
            if(sortArr[i] % 2 == 1){
              oddArr.push(sortArr[i]);
            }
            if(sortArr[i] % 2 === 0){
              evenArr.push(sortArr[i]);
            }
        }
        this.setState({ evenArray: evens, oddArray: odds });
    }
    render() {
      return(
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
            <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
            <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
        </div>
      )
    }
  }
  
 export default EvenAndOdd;