export{};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};
//抜き出す
type SimpleProfile = Pick<DetailedProfile, 'name' | 'height'>;
//除外する
type SmallProfile = Omit<DetailedProfile, 'height'>;

type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;