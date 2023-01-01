/*
 * @Name: class
 * @Author: smj
 * @Date: 2022-11-15 11:20:17
 * @LastEditors: smj
 * @LastEditTime: 2022-11-15 11:35:06
 * @FilePath: \ts-practice\handhook\class.ts
 */
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Rhino extends Animal {
  constructor() {
    super("Rhino");
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

rhino = animal;
// private
employee = animal; // private name来自不同声明

// peotected

export {};
