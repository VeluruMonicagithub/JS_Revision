function createBankAccount(initialBalance = 0){
    let balance = initialBalance;
    let transactionHistory = [`Initial deposit: ${initialBalance}`];
    return{
        deposit(amount){
            if (amount<= 0){
               return "Deposit amount must be positive"
            }
            balance += amount;
            transactionHistory.push(`Deposit: ${amount}`);
            return `Deposited: ${amount}. Current balance: ${balance}`;
        },
        withdraw(amount){
            if(amount <=0){
                return "Withdrawal amount must be positive"
            }
            if(amount > balance){
                return "Insufficient funds"
            }
            balance -= amount;
            transactionHistory.push(`Withdrawal: ${amount}`);
            return `Withdrew: ${amount}. Current balance: ${balance}`;
        },
        getBalance(){
            return `Current balance: ${balance}`;
        },
        getTransactionHistory(){
            return [...transactionHistory];
        }
        };
        }
    const myAccount = createBankAccount(100);
    console.log(myAccount.deposit(50));
    console.log(myAccount.withdraw(30));
    console.log(myAccount.getBalance());
    console.log(myAccount.getTransactionHistory());
          
