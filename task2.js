let x;
let a = typeof x;

switch(a){
  case 'string':
    console.log('x-строка');
      break;
    case 'number':
    console.log('x-число');
      break;
    case 'boolean':
    console.log('x-логический');
      break;
  default:
    console.log('Тип x не определён');
};
