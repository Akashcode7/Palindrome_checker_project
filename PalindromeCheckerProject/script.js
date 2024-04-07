const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const text = textInput.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!text) {
    alert("Please input a value");
    return;
  }
  const reversedText = text.split("").reverse().join("");
  const isPalindrome = text === reversedText;
  if (isPalindrome) {
    resultDiv.textContent = `${textInput.value} is a palindrome`;
  } else {
    resultDiv.textContent = `${textInput.value} is not a palindrome`;
  }
});
