var accounts = [];

// Account Object
// balance
// username

// createAccount(account)
// push onto accounts array
// return account
function createAccount(account) {
  accounts.push(account);
  return account;
}

// getAccount(username)
// find matching account using forEach
function getAccount(name) {
  var matchedAccount;

  accounts.forEach(function (account) {
    if (account.username === name) {
      matchedAccount = account;
    }
  });

  return matchedAccount;
}

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

var nicksAccount = createAccount({
  username: 'Nick',
  balance: 0
});

console.log('--- DEPOSIT ---');
deposit(nicksAccount, 100);
console.log(nicksAccount);

console.log('--- WITHDRAW ---');
withdraw(nicksAccount, 11);
console.log(nicksAccount);

console.log('--- EXISTING ACCOUNT ---');
var existingAccount = getAccount('Nick');
console.log(existingAccount);




