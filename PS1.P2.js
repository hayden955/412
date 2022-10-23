const expression = '8-3'
function op(expression){
    const left = expression[0];
    const p = expression[1];
    const right = expression[2];
    if (p == '+') {
        return left + right;
    } else if (p == '-') {
        return left - right;
    } else if (p == '*') {
        return left * right;
    } else if (p == '/') {
        return left / right;
    } else {
        return left ^ right;
    }
}

const operator = expression => op(expression);
console.log(`${expression} = ${operator(expression)}`)
