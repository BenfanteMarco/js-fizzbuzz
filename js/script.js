// CALCOLO ALGORITMO:

// multiplo di 3 = 'Fizz';
// multiplo di 5 = 'Buzz';
// multiplo di 15 = 'FizzBuzz' // multiplo sia di 3 che di 5;

for(let i=1; i<=100; i++){

    // resto3 = i % 3;
    // resto5 = i % 5;
    // resto15 = i % 15 // multiplo sia di 3 che di 5;

    if(i%3 == 0 && i%5 == 0){
        // multiplo di 3 e 5 = 'FizzBuzz';
        console.log('FizzBuzz');
    }
    else if(i%5 == 0){
        // multiplo di 5 = 'Buzz';
        console.log('Buzz');
    }
    else if(i%3 == 0){
        // multiplo di 3 = 'Fizz';
        console.log('Fizz');
    }
    else{
        // nessun multiplo = 'numero';
        console.log(i);
    }

}