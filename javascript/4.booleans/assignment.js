import bcrypt from "bcrypt";

const inputPassword = "rate6kik";
const saltRounds = 10; // Cost factor for hashing
const userEnteredCode = "123456";
const systemStoredCode = "123456";

// Hash the password and proceed with the withdrawal process
bcrypt.hash(inputPassword, saltRounds).then(async (storedHashedPassword) => {
  console.log("Hashed Password:", storedHashedPassword);

  // Define the user object
  const user = {
    balance: 7000,
    dailyLimit: 7000 / 2, // 50% of the total balance
    storedHash: storedHashedPassword,
    correctMfaCode: systemStoredCode,
  };

  // Example withdrawal attempt
  const withdrawalAmount = 2000;
  const result = await processWithdrawal(user, inputPassword, userEnteredCode, withdrawalAmount);
  console.log(result);
});

// Function to verify password
async function verifyPassword(inputPassword, storedHashedPassword) {
  return await bcrypt.compare(inputPassword, storedHashedPassword);
}

// Function to verify MFA
function verifyMFA(enteredCode, correctCode) {
  return enteredCode === correctCode;
}

// Function to check balance
function checkBalance(balance, withdrawalAmount) {
  return balance >= withdrawalAmount;
}

// Function to check daily limit
function checkDailyLimit(withdrawalAmount, dailyLimit) {
  return withdrawalAmount <= dailyLimit;
}

// Main function to process withdrawal
async function processWithdrawal(user, inputPassword, inputMfaCode, withdrawalAmount) {
  const isPasswordCorrect = await verifyPassword(inputPassword, user.storedHash);
  if (!isPasswordCorrect) {
    return "Transaction Failed: Incorrect password";
  }

  if (!verifyMFA(inputMfaCode, user.correctMfaCode)) {
    return "Transaction Failed: MFA failed";
  }

  if (!checkBalance(user.balance, withdrawalAmount)) {
    return "Transaction Failed: Insufficient balance";
  }

  if (!checkDailyLimit(withdrawalAmount, user.dailyLimit)) {
    return "Transaction Failed: Amount exceeds daily limit";
  }

  
  user.balance -= withdrawalAmount;
  return `Transaction Successful! New Balance: ${user.balance}`;
}


setTimeout(async () => {
  const user = {
    balance: 7000,
    dailyLimit: 7000 / 2,
    storedHash: await bcrypt.hash("rate6kik", saltRounds), // Hash password separately for example
    correctMfaCode: "123456",
  };

  const withdrawalAmount = 2000;
  const result = await processWithdrawal(user, "rate6kik", "123456", withdrawalAmount);
  console.log(result);
}, 1000); // Delay to allow hashing



