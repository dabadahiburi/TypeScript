export{};
// as const を書くことでreadonlyになり変更できない値となる
let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;
// nickname = 'Hamtaro';
nickname = 'Ham';

let profile = {
  name: 'Atsush',
  height: 178
}as const;

// profile.name = 'Ham';
// profile.height = 180;

let profile2 = {
  name: 'Atsush',
  height: 178
};

profile2.name = 'Ham';
profile2.height = 180;