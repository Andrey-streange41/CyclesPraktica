 
// 1.1) вывести в консоль числа от 1 до 10 включительно
function printNumbers(start, stop)
{
   for (let start = 1; start <= stop; start++) {
    console.log(start);
} 
}
// printNumbers(1,10);

// 1.2) * вывести в консоль числа от -1 до -10 включительно
function printNegativeRange(start, stop)
{
   for (let start = -1; start >= stop; start--) {
    console.log(start);
} 
}
// printNegativeRange(-1,-10);
// 2) посчитать результат умножения чисел от 1 до 5
function factorial(number)
{
    if(number === 1)
        return number;
    return number * factorial(number - 1);
}
// console.log(factorial(5));
// 3) вывести в консоль таблицу умножения на 7
function multiplyNumber(number)
{
    for (let index = 0; index <= 9; index++) {
       console.log(index * number);
    }
}
// multiplyNumber(7);


// 4) посчитать сумму нечетных чисел от 1 до 15

function sumEvenRange(range)
{
    let summa=0;
    for (let index = 0; index <range; index++) {
        if(index % 2 !== 0)
            summa+=index;
    }
    return summa;
}
// console.log(sumEvenRange(15));
// 5.1) циклом добавить 7 звездочек в строку
function pushStarsInStr(amountStars, str, symbol)
{
    for (let index = 0; index < amountStars; index++) {
       str+=symbol;
    }
    return str;
}

// console.log(pushStarsInStr(7,'hello','*'));


// 6) * 2 цикла которые добавят звездочки и "\n" в переменную и составят квадрат из звездочек,

function getSquare(square)
{
    square='';
    for (let row = 0; row < 5; row++) 
    {
        for(let col = 0; col < 10; col++)
        {
          square += '*';
        }    
       square+='\n';   
    }
    return square;
}
let square = getSquare();
console.log(square);
// 7) спрашивать пользователя определенное число до тех пор пока он его не отгадает

function getUserInput()
{
    let result='';
    while(result !== 'Apple')
    {
        result = prompt("Enter secret word :) ");
        if(result != 'Apple')
        {
            console.log("Uncorrect ! (")
        }
        else{
            console.log('You win : )')
            break;
        }
    }
}

getUserInput(); 
