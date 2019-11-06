function waysToReturnMemoize(amount, denominations) {
    // intialize an array of zeros with indices up to amount
    var waysOfDoingNcents = [];
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    // there is 1 way to renturn 0 cents
    waysOfDoingNcents[0] = 1;

    for (var j = 0; j < denominations.length; j++) {
        // we can only start returning change with coins in our denominations
        var coin = denominations[j];
        
        // we start bottom up, each time reducing change amout with curr coin.
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;
            // ways to create change is equivalent to reducing the problem to a known problem
            // and gaining all the ways to solve for smaller problems
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    }

    return waysOfDoingNcents[amount];
}

// console.log(waysToReturnMemoize(10,[2, 3, 4, 6]));
console.log(waysToReturnMemoize(20,[2, 3, 4, 6]));
// console.log(waysToReturnMemoize(50,[2, 3, 4, 6]));
// console.log(waysToReturnMemoize(200,[1, 2, 5, 10, 20, 50, 100]));

