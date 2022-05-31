balanceParens = (str) =>
{
    let stack = []
    str = str.split('')
    for(let i = 0; i<str.length;i++){
       
        if(str[i] === '(' || str[i] === ')'){
            if(str[i] === '(')
                stack.push(i)
            else if(str[i] === ')' && (stack.length>0))
                stack.pop()
            else if(str[i] === ')' && (stack.length<=0)){
                str.splice(i,1)
                i -=1
            }
        }
    }
  
    while(stack.length>0){
        str.splice((stack[stack.length-1]),1)
        stack.pop()
    }

    return str.join('')
}



module.exports = { balanceParens }