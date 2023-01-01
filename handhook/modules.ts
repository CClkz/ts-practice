/**
 * 模块
 * 内部模块：命名空间 namespace X{}
 * 外部模块：模块
 */

export interface StringValidator {
  isAcceptable(s: string): boolean; 
}
