export{};

// owner

// 所有者
// 初期化時に設定
// 途中で変更不可能
// 参照できる

// secretnumber

// 個人番号
// 初期化時に設定
// 途中変更可
// 参照不可能
class mynubercard {
  constructor(protected _owner:string,private _secretNumber:number) {
    this._owner = _owner;
    this._secretNumber = _secretNumber;
  }
  get owner() {
    return this._owner;
  }
  set secretNumber(secretNumber:number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}
let card = new mynubercard('yuki',3435985464864325);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
card.secretNumber;
console.log(card.owner, card.secretNumber);