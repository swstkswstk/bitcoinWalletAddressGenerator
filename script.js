document.addEventListener('DOMContentLoaded', function () {
  const result = document.getElementById("result");
  const generateBtn = document.getElementById("generateBtn");

  generateBtn.addEventListener('click', generate);

  function generate() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const minLength = 26;
    const maxLength = 62;
    const stringLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
    console.log(stringLength);
    let randomString = '';
    for (let i = 0; i < stringLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
    result.textContent = randomString;
  }
});
