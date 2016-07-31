var account = {
  balance: 0
};

// deposit(account, amount)
function deposit(bankAccount, amount) {
  return bankAccount.balance += amount;
}

// withdraw(account, amount)
function withdraw(bankAccount, amount) {
  return bankAccount.balance -= amount;
}

// getBalance(account)
function getBalance(bankAccount) {
  console.log('Your balance is ' + bankAccount.balance + '.');
}

// Testing
// Should see 'Your balance is 0.'
getBalance(account);

// Should see 'Your balance is 40.'
deposit(account, 40);
getBalance(account);

// Should see 'Your balance is 5.'
withdraw(account, 35);
getBalance(account);

// Should see 'Your balance is 255.'
deposit(account, 250);
getBalance(account);

// Should see 'Your balance is -45.'
withdraw(account, 300);
getBalance(account);





