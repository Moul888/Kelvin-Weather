const kelvin = 0;
// The goal is to transform the const in Kelvin to celsius
let celsius = kelvin - 273;
// We sub the value between celsius and Kelvin
let fahrenheit = celsius * (9 / 5) + 32;
/*const fahrenheitRound = Math.round(fahrenheit);
// We surch the value in fahrenheit and round the answer */
fahrenheit = Math.floor(fahrenheit);
// we surch the round down
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
