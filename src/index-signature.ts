export{};


interface Profile{
  name: string;
  underTwenty: boolean;
  [index: string]: string | number|boolean;
}


// let profile0: { name?: string } = {};
// let profile1: {[index:string]:string|number} = {};
let profile:Profile={name:'Ham',underTwenty:false}


// How to writte index signatures
// {[index: typeForIndex]:typeForValue}
profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';