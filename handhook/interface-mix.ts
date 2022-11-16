/*
 * @Name: interface进阶
 * @Author: smj
 * @Date: 2022-11-14 18:10:04
 * @LastEditors: smj
 * @LastEditTime: 2022-11-15 11:21:10
 * @FilePath: \ts-practice\handhook\interface-mix.ts
 */

/**
 * 混合类型
 */
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

/**
 * 接口继承类
 */
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {
  select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
  select() { }
}

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  draw() {
    console.log('X: ' + this.x + '; Y: ' + this.y);
  }

  getDistance() {
    // ...
  }
}

let point: Point = new Point(0, 1);

point.draw();

export {}