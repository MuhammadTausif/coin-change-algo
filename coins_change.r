
coins <- c(1, 2, 5, 10, 20, 50, 100)
amount <- 200

# Using itterative Approch

waysToCount <- function(amount, coins){
  
  ways <- rep(0, amount + 1)
  ways[1] <- 1
  #browser()
  for (j in 1: length(coins) ) {
    coin <- coins[j]
    for (higherAmount in coin: amount) {
      higherAmountRemainder <- higherAmount - coin 
      
      ways[higherAmount + 1] <-  ways[higherAmount + 1] + ways[higherAmountRemainder + 1]
    }
  }
  
  print(ways[amount + 1])
}

waysToCount(amount, coins)
