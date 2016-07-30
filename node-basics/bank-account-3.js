var accounts = [];

function createAccount(account) {
  accounts.push(account);
  return account;
}

function getAccount(name) {
  var matchedAccount;

  // for loop or while loop
  // accounts.forEach(function (account) {
  //   if (account.username === name) {
  //     matchedAccount = account;
  //   }
  // });

  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].username === name) {
      matchedAccount = accounts[i];
    }
  }

  return matchedAccount;
}

function deposit(bankAccount, amount) {
  // only accept number, use typeof
  if (typeof amount === 'number') {
    return bankAccount.balance += amount;
  } else {
    console.log("Must enter a number for amount.");
  }
}

function withdraw(bankAccount, amount) {
  // only accept number, use typeof
  if (typeof amount === 'number') {
    return bankAccount.balance -= amount;
  } else {
    console.log("Must enter a number for amount.");
  }
}

function getBalance(bankAccount) {
  console.log('Your balance is ' + bankAccount.balance + '.');
}

function createBalanceGetter(bankAccount) {
  return function () {
    return bankAccount.balance;
  }
}











