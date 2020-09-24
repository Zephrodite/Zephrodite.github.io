let input = prompt('Enter a positive integer:', '');

for (; ;) {

    if (input > 0 && input.indexOf('.') == -1) {

        break;

    } else {

        input = prompt('Enter a positive integer:', '');

    }
}

let numofBook = parseInt(input);

alert("You would like to order " + numofBook + " books");

