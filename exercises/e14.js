
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let incorrectClientsBalance = [];
  
  for (let i of array) {
    
    
    let deposits = i.deposits;
    let withdrawals = i.withdrawals;
    
    let sumOfDeposits = 0;
    let sumOfWithdrawls = 0;
    
    if (deposits) {
      for (let deposit of deposits) {
        sumOfDeposits += deposit;
      }
    }
    
    if (withdrawals) {
      for (let withdrawal of withdrawals) {
        sumOfWithdrawls += withdrawal;
      }
    }
    
    if (Math.abs(sumOfDeposits - sumOfWithdrawls) !== i.balance) {
      incorrectClientsBalance.push(i);
    }
  }
  
  return incorrectClientsBalance
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
