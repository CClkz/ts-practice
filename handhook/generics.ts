/*
 * @Name: 泛型
 * @Author: smj
 * @Date: 2022-11-17 00:42:29
 * @LastEditors: smj
 * @LastEditTime: 2022-11-17 10:00:26
 * @FilePath: \ts-practice\handhook\generics.ts
 */

// 泛型函数变量
function identity<T>(arg: T): T {
  return arg
}

identity<string>("isString")

// 泛型接口
let myIdentity1: <T>(arg: T) => T = identity;
let myIdentity2: { <T>(arg: T): T } = identity;

interface GenericIdentityFn<T> {
  (arg: T): T
}
let myIdentity: GenericIdentityFn<number> = identity;

// 泛型类
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T

  constructor(_val: T, _add: (x: T, y: T) => T) {
    this.zeroValue = _val
    this.add = _add
  }
}
