export{};

class Me{
  static isProgrammer: boolean = true;
  static firstname: string = 'yuki';
  static lastname: string = 'hiragi';

  static work() {
  return `Hey, guys! This is ${Me.firstname} are you innterested in TypeScript?`
  }
}
console.log(Me.isProgrammer);
console.log(Me.work());