let firstCard = 5
let secondCard=2 
let sum=0
let hasBlackJack=false 
let isAlive=true;
let message=""

messageEl=document.getElementById("message-el")
//sumEl=document.getElementById("sum-el")
sumEl=document.querySelector("#sum-el")
//cardEl=document.getElementById("card-el")
cardEl=document.querySelector("#card-el")
function startGame()
{
    cardEl.textContent+=" "+firstCard+" "+secondCard
    sum+=firstCard + secondCard
    sumEl.textContent+=" "+sum;
    if(sum<=20)
    {
        message="Do you want to draw a new card?"
    }
    else if(sum === 21)
    {
        message="Congratulations! You've got BlackJack"
        hasBlackJack=true;
    }
    else
    {
        message="You're out of the game"
        isAlive=false;
    }
    messageEl.textContent=message
}