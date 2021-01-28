export{};
class Person{
  // this.(name, age)の型を決める
  public name: string;
  protected age: number;
  protected nationality: string;
  // のちの宣言変数の型を決める
  constructor(name:string,age:number,nationality:string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string{
    return `name: ${this.name}, age: ${this.age} `;
  }
}

class Android extends Person{
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string{
    return `name: ${this.name}, age: ${this.age} , nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'japan');
console.log(taro.name);
console.log(taro.profile());
// let hanako = new Person('hanako', 62);
// console.log(hanako.profile);