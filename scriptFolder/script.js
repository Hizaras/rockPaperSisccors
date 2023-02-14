function getComputerChoice(){
    const rpsChoice = ['Rock', 'Ppeer', 'Scissors'] 
    const randomNumber = Math.floor(Math.random() *3)
    return rpsChoice[randomNumber]
}

