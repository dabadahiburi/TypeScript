export{};

export{};
class Person{
  // this.(name, age)の型を決める
  name: string;
  age: number;
  // のちの宣言変数の型を決める
  constructor(name:string,age:number) {
    this.name = name;
    this.age = age;
  }

  profile(): string{
    return `name: ${this.name}, age: ${this.age} `;
  }
}
let taro = new Person('Taro',30);
// let hanako = new Person();