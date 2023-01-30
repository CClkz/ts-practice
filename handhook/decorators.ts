// 装饰器
// 装饰器工厂
function f() {
  console.log("f(): evaluated");
  // 方法装饰器
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("f(): called");
  }
}

function g() {
  console.log("g(): evaluated");
  /**
   * 方法装饰器
   * target: 静态成员-类的构造函数，势力成员-类的对象
   * propertyKey: 成员名称
   * descriptor: 成员的属性描述符,如descriptor.enumerable = true
   */
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("g(): called");
  }
}

// 类装饰器
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

function format(formatString: string) {
  // 属性装饰器
  return function (target: any, propertyKey: string) {
    console.log("format(): called");
  }
}

function required() {
  return function (target: any, propertyKey: string | symbol, parameterIndex: number) {
    console.log("required(): called");
  }
}

@sealed
class Greeter {
  @format("Hello, %s")
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @f()
  @g()
  greet(@required() name: string) {
    return "Hello, " + name + this.greeting;
  }
}
