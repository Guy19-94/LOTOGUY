
// Fonction pour générer un tirage aléatoire
function generateLotoDraw() {
    let mainNumbers = [];
    while (mainNumbers.length < 5) {
        let num = Math.floor(Math.random() * 49) + 1;
        if (!mainNumbers.includes(num)) {
            mainNumbers.push(num);
        }
    }
    let luckyNumber = Math.floor(Math.random() * 10) + 1;
    mainNumbers.sort((a, b) => a - b);

    displayResults("Tirage Aléatoire", mainNumbers, luckyNumber);
}

// Fonction pour générer un tirage basé sur la date
function generateDateBasedDraw() {
    const dateInput = document.getElementById("drawDate").value;
    if (!dateInput) {
        alert("Veuillez sélectionner une date !");
        return;
    }

    const seed = new Date(dateInput).getTime();
    let mainNumbers = [];
    let luckyNumber = Math.floor(seed % 10) + 1;

    while (mainNumbers.length < 5) {
        let num = Math.floor((seed * (mainNumbers.length + 1)) % 49) + 1;
        if (!mainNumbers.includes(num)) {
            mainNumbers.push(num);
        }
    }
    mainNumbers.sort((a, b) => a - b);

    displayResults(`Tirage du ${dateInput}`, mainNumbers, luckyNumber);
}

// Fonction pour afficher les résultats
function displayResults(title, mainNumbers, luckyNumber) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h2>${title}</h2>
        <p>Numéros principaux : <strong>${mainNumbers.join(", ")}</strong></p>
        <p>Numéro chance : <strong>${luckyNumber}</strong></p>
    `;
}
