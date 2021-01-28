export{};

namespace Japanese{
  export class Person {
    constructor(public name: string) {
    }
  }
}
namespace English {
  export class Person {
    constructor(public firstName: string,
      public middleName: string,
      public lastName: string) {
    }
  }
}
const me = new Japanese.Person('ham');
console.log(me.name);

const michael = new English.Person('Michael', 'Joseph', 'Jacson');
console.log(michael);