/**
 * 高级类型
 */

// 交叉类型
interface Fruit {
  name: string;
  height: number;
}

interface Animal {
  name: number;
  age: number;
}

// name never型
let four: Fruit & Animal = {
  name: "four",
  height: 180,
  age: 7,
};

// 联合类型
let five: Fruit | Animal = {
  name: "1",
  height: 20,
};

// 别名
type newName = string;
let str: newName = "string";

export {};
