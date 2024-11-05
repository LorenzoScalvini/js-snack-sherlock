// Aggiungi un ascoltatore per l'evento submit del form
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Impedisce il comportamento predefinito del form (evitare il refresh della pagina)

  // Prendi i valori dalla form
  const string = document.getElementById("stringa").value;
  const num = document.getElementById("numero").value;

  // Stampa i valori nella console
  if (num % 2 === 0) {
    const newString = string.split("").reverse().join("");
    document.getElementById("output").innerHTML = `Il numero é pari quindi  inverto la stringa: ${newString} `;
  } else if (num % 2 !== 0) {
    document.getElementById("output").innerHTML = `Il numero é dispari quindi non inverto la stringa: ${string} `;
  }
});
