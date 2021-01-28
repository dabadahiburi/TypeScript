export{};
class Mahoutsukai {}

class Souryo { }

class Taro extends Mahoutsukai{ }

interface Kenjya{
  ionazun(): void;
}

interface Senshi{
  kougeki(): void;
}

class Jiro implements Kenjya,Senshi{
  ionazun(): void{
    console.log('ionazun');
  }
  kougeki(): void{
    console.log('kougeki');
  }
}
const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();