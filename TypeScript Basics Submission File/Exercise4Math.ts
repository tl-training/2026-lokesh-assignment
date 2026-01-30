export enum Operation {
  Add,
  Multiply,
}

type Op = {
  op: Operation;
}

type execute = {
  execute(a:number, b:number):number;
}

type Calculator = Op & execute;


export default function createCalc(op:Operation):Calculator {
  // TODO: Return an object that stores the operation
  // TODO: Implement execute method that adds or multiplies based on op
  return {
    op,
    execute(a, b):number {
      if(op===Operation.Add)
        return a+b;
      if(op==Operation.Multiply)
        return a*b;
      return 0; // placeholder
    },
  };
}
