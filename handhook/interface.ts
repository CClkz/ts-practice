/*
 * @Name: interface
 * @Author: smj
 * @Date: 2022-11-14 17:08:53
 * @LastEditors: smj
 * @LastEditTime: 2022-11-14 18:06:20
 * @FilePath: \ts-practice\handhook\interface.ts
 */
interface StringArray {
  // 支持两种索引签名
  [index: number]: string
  [propName: string]: string
}

interface StudentFunc {
  (): boolean
}

interface Student {
  readonly id: string
  name: string
  favor: StringArray
  countScore: StudentFunc
  [propName: string]: any
  // [propName: string]: string
}

interface LittleStudent extends Student {
  milkType: string
}

let s1: Student = {
  id: "00010",
  name: "ps",
  favor: {},
  countScore() {
    return true
  }
}
let s2: Student = <Student>{}

class StudentClass implements Student {
  readonly id: string
  name: string
  favor: StringArray

  constructor() { }

  countScore() {
    return true
  }
}
