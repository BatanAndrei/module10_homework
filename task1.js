let val = prompt();
let num = +val;

if(typeof num !== "string"){
  console.log((parseInt(num)%2==0)?'Число чётное':'Число нечётное');
}else if(typeof num !== "number"){
  console.log('Упс, кажется, вы ошиблись');
};

let notNum = isNaN(num) ? 'Число NaN' : 'Число не NaN';

console.log(notNum);