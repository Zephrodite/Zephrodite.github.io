let input = prompt('Enter a positive integer', '');

for(;;) {

    if ( input > 0 && input.indexOf('.') == -1 ) {

        break;

    } else {

        input = prompt('Enter a positive integer', '');

    }
}

let num = parseInt(input) ;

if (num == 1) {

    alert('1 is not a prime number'   );

} else if (num == 2) {

    alert('For n = ' + input + ' prime numbers are ' + '2');

} else {

    let setofprimeMessage = 'For n = ' + input + ' prime numbers are 2,' ;

    for (i=3; i<num; i++) {
        
        var flag = true ;

        for(j=2; j<i; j++){

            if ( i%j == 0 ) {

                flag = false;
               
            }

            
        } 
        
        if (flag == true) {

            setofprimeMessage = setofprimeMessage + i.toString() + ',';

        } else {

            setofprimeMessage = setofprimeMessage;
        }
      
    }

    setofprimeMessage = setofprimeMessage.slice(0, setofprimeMessage.length-1);

    alert(setofprimeMessage) 
}

    

