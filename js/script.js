var k = prompt("Enter the Your name:");
if(k != null)
{
    document.querySelector(".card-title").innerHTML = "This is for you "+k+"! ❤";
}
else{
    document.querySelector(".card-title").innerHTML = "This is for you! ❤";
}

let text = document.querySelector('.card-text');
let btn = document.querySelector('.btn');
const texts = ['“I wish I knew how to quit you.”',
'"My whole life changed the day I met you."',
'"You\'re my dream girl."',
'"I love the way you smell."',
'"You know you\'re the hottest woman in the room right now, right?"',
'"<em>Baby</em>, you\'re stunning."',
'"You make my dreams come true."',
'"I\'ll follow you into the dark."',
'"The power you\'re supplying is electrifying."',
'"I can\'t keep my hands off of you."',
'"I want to bury my face in your boobs."'];
let i = 0;
btn.addEventListener("click",function(){
    if(i<texts.length)
    {
        text.innerHTML = texts[i];
        i++;
    }
    else{
        i=0;
        text.innerHTML = texts[i];
    }
});
