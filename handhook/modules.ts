/**
 * 模块
 * 内部模块：命名空间 namespace X{}
 * 外部模块：模块
 */
// export interface StringValidator {
//   isAcceptable(s: string): boolean;
// }

import * as m from "SomeModule";

console.log('m.fn()', m.fn());


const moduleFn: typeof m.fn = () => {
  return ''
}