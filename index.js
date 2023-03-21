function writeCards(names, eventName){
    const cards = []; 
    for(let i=0; i<names.length ; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return cards;
}

function countDown(number){
    let ind = number;
    while(!ind==0){
        console.log(ind);
        ind--;
    }
    console.log(0);
}