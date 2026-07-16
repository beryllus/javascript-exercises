const fibonacci = function (n) {

    if (typeof n === "string") {
        n = Number(n);
    }

    if (n < 0) {
        return "OOPS";
    }

    if (n === 0) {
        return 0;
    }

    let prev = 1;
    let current = 1;

    for (let i = 3; i <= n; i++) {
        let temp = current;
        current = prev + current;
        prev = temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
