"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = void 0;
exports.default = createCalc;
var Operation;
(function (Operation) {
    Operation[Operation["Add"] = 0] = "Add";
    Operation[Operation["Multiply"] = 1] = "Multiply";
})(Operation || (exports.Operation = Operation = {}));
function createCalc(op) {
    // TODO: Return an object that stores the operation
    // TODO: Implement execute method that adds or multiplies based on op
    return {
        op,
        execute(a, b) {
            if (op === Operation.Add)
                return a + b;
            if (op == Operation.Multiply)
                return a * b;
            return 0; // placeholder
        },
    };
}
