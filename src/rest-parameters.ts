export { };

const reducer = (accumulator: number, currentValue: number) => {
  accumulator + currentValue;
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};



const sum : (...values: number[]) =>
  number = (...value: number[]): number => {
    return value.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));