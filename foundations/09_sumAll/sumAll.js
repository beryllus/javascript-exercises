const sumAll = function(from, to) {

    if (typeof from !== 'number' || typeof to !== 'number'){
        return 'ERROR';
    }

    if (!Number.isInteger(from) || !Number.isInteger(to)){
        return 'ERROR';
    }

    if (from < 0 || to < 0){
        return 'ERROR';
    } 

    if (from > to){
        let temp = from;
        from = to;
        to = temp;
    }
    
    let result = 0;
    for (; from <= to; from++){
        result += from;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
