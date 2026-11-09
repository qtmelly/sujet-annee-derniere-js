function isUsernameValid(username) {
  if (
    username.length >= 4 &&
    !username.startsWith(" ") &&
    username !== "root"
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isUsernameValid(""));
console.log(isUsernameValid("Matsara"));
console.log(isUsernameValid("root"));
console.log(isUsernameValid("Dan"));
console.log(isUsernameValid("John"));
console.log(isUsernameValid(" Wiliam"));
