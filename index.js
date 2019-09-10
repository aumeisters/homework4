// ф-ия вызывающая функциональный аргумент
const executor = x => x(); 
// справа нет вызова круглыми скобками, вместо () слева ф-ия обратного вызова
executor(() => console.log('Меня вызвали!')); 


//BONUS BONUS BONUS

const curryPow = x => y => x ** y;
const partiPow = x => y => y ** x;

// const partiPow = ... // аналогично предыдущей функции
console.log(curryPow(2)(10)); // 1024

const qv = partiPow(2);
const cb = partiPow(3);

console.log(qv(5)); // 25
console.log(cb(5)); // 125

// Автор: Аумеистерс Андрейс
