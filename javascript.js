
 
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

function likePizza(){ 
    let likePizza = confirm('Do you like Pizza?');
    for (let times == 10) {
     while (!likePizza) {
        likePizza = confirm('Do you like pizza?');
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



