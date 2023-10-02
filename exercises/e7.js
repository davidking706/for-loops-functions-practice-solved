// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  let lowestBalance = 0;
  let lowestBalanceClient = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 0) {
      if (lowestBalance === 0) {
        lowestBalance = array[i].balance;
        lowestBalanceClient = array[i];
      } else if (array[i].balance < lowestBalance) {
        lowestBalance = array[i].balance;
        lowestBalanceClient = array[i];
      }
    }
  }

  if (lowestBalance > 0) {
    return [lowestBalanceClient];
  } else {
    return [];
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function