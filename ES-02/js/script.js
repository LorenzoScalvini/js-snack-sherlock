document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const string = document.getElementById("stringa").value;
  const num = document.getElementById("numero").value;

  if (num % 2 === 0) {
    const newString = string.split("").reverse().join("");
    document.getElementById("output").innerHTML = `Il numero é pari quindi  inverto la stringa: ${newString} `;
  } else if (num % 2 !== 0) {
    document.getElementById("output").innerHTML = `Il numero é dispari quindi non inverto la stringa: ${string} `;
  }
});
