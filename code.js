// using techniques from lecture

/*
repeated work:
    else return 1.0 / factorial(n) + e(n - 1);

    and
function factorial(n) {
    if(n === 0)
    {
        return 1;
    }

    return n * factorial(n - 1);
}
*/

function e(n) {
    var result = 1, tmp = 1;

    if(n === 0)
    {
        return 1;
    }

    for (var i = 1; i <= n; i++)
    {
        tmp = tmp * i;
        result = result + (1.0 / tmp);
    }

    return result;
}