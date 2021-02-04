export{};
// Exclude 除外する
type MyExclude = DebugType;
//         |never//(string extends string | number ? never : string)
//         |never//(number extends string|number ? never : number)
//         |DebugType//(DebugType extends string|number ? never : DebugType);
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;
// Extract 引き抜く

type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;