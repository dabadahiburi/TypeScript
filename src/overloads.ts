export{};
// 数値を受け取って二倍で返す変数
// function double(value: number): number;
// function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);
   if(typeof value=== 'number') {
    return value * 2;
  } else if (typeof value === 'string') {
     return value + value;
  } else {
    throw 'number,stringでないので確認してください';
  }
}
console.log(double(6));
console.log(double('fuck off'));