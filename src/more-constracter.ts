export { };

class Person{
  
  constructor(public name: string,protected age: number) {
  }
}

const me = new Person('yuki', 21);
console.log(me);