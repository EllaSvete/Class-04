
 
 function askQuestion() {
     let answer = prompt('Do you like food?');
     if (answer == 'yes') {
         askHungry();
     } else { alert('Liar!'); }
 } 

function askHungry() {
    let hungry = prompt('Feeling hungry?');
    if (hungry == 'yes') {
        alert('Take a look!');
    } else  {
        alert('come back soon!');
    }
}
    

function askCats() {
    let cats = prompt ('How many cats do you have?');
    for (let i = 0; i < cats; i++) {
       let image = document.createElement('img')
       image.src = 'http://placekitten.com/200/300';
       document.getElementById('cats').appendChild(image);
    }
}

 




askQuestion();
askCats();



