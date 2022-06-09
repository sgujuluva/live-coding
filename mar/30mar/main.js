let sum = 0;
for ( let i = 0; i <= 10; i++){
    sum += i;
    console.log(sum);
}
console.log( " i is:", sum); // 55

let string = "";
for ( i = 0; i <= 5; i++){
    string += 'h';
    }
console.log(string); // hhhhh

// nested loops

for ( let i = 0; i <5; i++){
    for ( let j = 0; j < 5 ; j++){
        console.log(i,j); // 0 0 , 0 1, 02, 0 3, 0 4, ... 1 0, 1 1, 1 2, 1 3, 1 4...2 0............
    }
}

// digital clock  using nested loops

for ( let hour = 0; hour < 24; hour++){
    for ( let minute = 0; minute < 60 ; minute ++){
        for ( let second = 0; second < 60 ; second ++){
            if ( minute <= 9){
                console.log(0,minute);
            }
            if ( second <= 9){
                console.log(0,second);
            }
            console.log(`${hour}:${minute}:${second}`); // 
            
        }
    }
}