// creating function getComputerChoice

function getComputerChoice(){
    const str = ['Rock','Paper','Scissors'];
    //random index
    const randomIndex = Math.floor(Math.random() * str.length);
    //random corresponding string
    return str[randomIndex];
}