interface Box {
  height: number;
  width: number;
  fn(s: number): number
}

interface Box {
  width: number;
  scale: number;
  fn(s: string): string
}

const box: Box = {
  height: 10,
  width: 2,
  scale: 2,
  fn: (s: any) => {
    return s
  }
}


function fn1(s: number): number
function fn1(s: string): string
function fn1(s: any): any {
}