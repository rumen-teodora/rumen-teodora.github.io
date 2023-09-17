function solve(operand1, operand2, result, solutions){
    if(solutions){
        return solutions.filter(s =>{
            calcComplex(s[0],s[1],s[2] == result);
        })
    }else{
        return initSolutions(operand1,operand2,result);
    }

}

function initSolutions(operand1, operand2,result){
    let solutions = [];
    for(let a = 1; a <=9; a++){
        for(let b = 1; b <=9; b++){
            for(let c = 1; c <=9; c++){
                if(a != b && a != c && b != c){
                    if(calcComplex(a,b,c,operand1,operand2) == result){
                        solutions.push([a,b,c])
                    }
                }
            }
        }
    }
    return solutions;
}

function calcComplex(a,b,c,operand1, operand2){
    return (operand1 == '+' || operand1 == '-') && (operand2 == '*' || operand2 == '/') ?
        calc(a,calc(b,c,operand2),operand1) :
        calc(calc(a,b,operand1),c,operand2)
}

function calc(a,b,operand){
    switch(operand){
        case '+' : return a + b;
        case '-' : return a - b;
        case '*' : return a * b;
        case '/' : return a / b;
    }
}


let test1 = solve('*','+',27);

function test2(arr){
    if(arr.length = 9){
        console.log(arr);
        return;
    }
    for(let i = 1; i <=9; i++){
        let arr = [];
        arr.push(i);
    }
}