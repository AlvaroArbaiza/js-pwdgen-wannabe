// Problema:
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

const nome = prompt("Inserisci il tuo nome");

const cognome = prompt("Inserisci il tuo cognome");

const colorePreferito = prompt("Inserisci il tuo colore preferito");

const password = nome + cognome + colorePreferito + 21;

document.getElementById("password").innerHTML = `
    <p>La tua Password è: ${password}</p>
`;