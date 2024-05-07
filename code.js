// using techniques from lecture

function factorial(n) {
    if(n === 0)
    {
        return 1;
    }

    return n * factorial(n - 1);
}

function e(n) {
    var result = 1, tmp = 1;

    if(n === 0)
    {
        return 1;
    }

    for (var i = 1; i <= n; i++)
    {
        // can do it without another function call
        // based on testing code I am not sure if that is what you want
        tmp = tmp * i;
        result = result + (1.0 / tmp);

        // another option would be to push values of the previous factorial to an array
        // which is basically memoization, hence why I didnt use it
    }

    return result;
}