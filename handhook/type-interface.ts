/**
 * 类型推断
 * 推断-x是数组，元素类型为number或string
 * 推断-没推断成长度为3的元组
 */
let x = [1, 2, ""];

type yuanArr = [string, number];
let yuan1: yuanArr = ["1", 1];

/**
 * 上下文推断
 */
// 当前表达式处于上下文中，根据window.onmousedown函数的类型推断出mouseEvent的类型MouseEvent
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button); //<- Error
};

/**
 * 类型兼容性
 */
interface Fruit {
  name: string;
}

class Animal {
  name: string;
  age: number;

  constructor(_name: string, _age: number) {
    this.name = _name;
    this.age = _age;
  }
}

let banana: Fruit;

banana = {
  name: "banana",
  from: "Affraic",
};

banana = new Animal("dog", 7);

let dog = new Animal("dog", 7);
banana = dog;

export {};
