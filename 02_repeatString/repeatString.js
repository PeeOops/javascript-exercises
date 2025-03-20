const repeatString = function(string, num) {
    let temp = [];
    for(let i = 0; i < num; i++){
        temp.push(string);
    }
    if (num < 0){
        return "ERROR";
    }else{
        return temp.join("");
    }
};

// repeatString("hello", 0)

// Do not edit below this line
module.exports = repeatString;
