let myHW = new Map([
    [33, 'property1'],
    ['key', 'property2'],
    [true, 'property3']
  ]);
  
  for (let keyProp of myHW){
    console.log(`Ключ - ${keyProp[0]}, Значение - ${keyProp[1]}`);
  }
  