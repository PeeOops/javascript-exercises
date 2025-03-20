const sumAll = function(num1,num2) {
    let temp = []
    if(num1 > num2){
        let start = num2;
        let end = num1;

        if(start > 0 && end > 0 && Number.isInteger(start) && Number.isInteger(end)){
            for(let i = start; i <= end; i++){
                temp.push(i);
            }
    
            const result = temp.reduce((acc,value) => acc + value);
            return result;
        }else{
            return "ERROR";
        }
    }else{
        if(num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)){
            for(let i = num1; i <= num2; i++){
                temp.push(i);
            }
    
            const result = temp.reduce((acc,value) => acc + value);
            return result;
        }else{
            return "ERROR";
        }
    }

};




// Do not edit below this line
module.exports = sumAll;
