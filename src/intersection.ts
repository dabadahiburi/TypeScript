export{};

type pitcher1 = {
  // 投球スピード
  throwingSpeed: number;
};
type Batter1 = {
  // 打率
  battingAverage: number;
};
const Sasaki: pitcher1 = {
  throwingSpeed: 154
};

const Ochiau: Batter1 = {
  // throwingSpeed:154,
  battingAverage: 0.367
};

type TwowayPlayer = pitcher1 & Batter1;

const ootani: TwowayPlayer = {
  battingAverage: 165,
  throwingSpeed: 0.286
};