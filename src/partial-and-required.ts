export{};

type Profile = {
  name: string;
  age: number;
  zipcode: number;
};

// type Profile2 = {
//   name?: string;
//   age?: number;
// };
// 短縮
type PartialType = Partial<Profile>;



type Profile0 = {
  name: string;
  age?: number;
  zipcode: number;
};

type RequiredType = Required<Profile0>