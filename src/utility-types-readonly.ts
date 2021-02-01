export{};

type Profile = {
  name: string;
  age: number;
};
const me: Profile = {
  name: 'ham',
  age: 43
};
me.age++;

console.log(me.age);

// const 宣言前にReadonly<>を使うとReadOnlyになる

type PersonalDataType = Readonly<Profile>;


const friend: PersonalDataType = {
  name: 'Shigrtu',
  age: 40,
};
// friend.age++;

type Yomitori<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriProfile = Yomitori<Profile>;