export{};

class VisualCard {
  constructor(public readonly owner:string) {
  }
}

let myVisaCard = new VisualCard('yuki');
console.log(myVisaCard.owner);