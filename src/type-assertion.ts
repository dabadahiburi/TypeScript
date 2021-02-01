export{};

let name: any = 'Ham';
// 型assertion
let length:number = name.length;
let length1 = name.length as number;
let length2 = (name as string).length;
let length3 = (<string>name).length;


// length = 'foo';