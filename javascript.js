
 
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

 




askQuestion();



