console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

// account.name Facebook
// account.username User12!
// account.password Password123!

function createAccount (account) {
  var accounts = storage.getItemSync('accounts');

  if (typeof accounts === "undefined") {
    accounts = [];
  }

  accounts.push(account);

  storage.setItemSync('accounts', accounts);

  return account;
}

function getAccount(accountName) {

  var accounts = storage.getItemSync('accounts');
  var matchingAccount;

  accounts.forEach(function (account) {
    if (account.name === accountName) {
      matchingAccount = account;
    }
  });

  return matchingAccount;
}

createAccount({
  name: "Facebook",
  username: "facebook_ninja",
  password: "password123!"
});

var myAccount = getAccount('Facebook');
console.log(myAccount);

















