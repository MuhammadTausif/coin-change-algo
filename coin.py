cache = {}

def howmany(amount, coins):
    prob = tuple([amount] + coins) # Problem signature
    if prob in cache:
        return cache[prob] # We computed this before
    if amount == 0:
        return 1 # It's always possible to give an exact change of 0 cents
    if len(coins) == 1:
        if amount % coins[0] == 0:
            return 1 # We can match prescribed amount with this coin
        else:
            return 0 # It's impossible
    total = 0
    n = 0
    while n * coins[0] <= amount:
        total += howmany(amount - n * coins[0], coins[1:])
        n += 1
    cache[prob] = total # Store in cache to avoid repeating this computation
    return total

print(howmany(200, [2, 5, 10, 20, 50, 100]))