// using techniques from lecture

function factorial(n) {
    if(n === 0)
    {
        return 1;
    }

    return n * factorial(n - 1);
}

function e(n) {
    var result = 0;

    if(n === 0)
    {
        return 1;
    }

    for (var i = 0; i <= n; i++)
    {
        result = result + (1.0 / factorial(i));
    }

    // repeated work:
    // else return 1.0 / factorial(n) + e(n - 1);

    return result;
}