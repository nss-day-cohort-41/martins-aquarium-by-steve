/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/
const fishList = () => {
    displayTheHolyOnes()
    displaySoldier()
    displayPlebs()
}

const displayTheHolyOnes = () => {
    // Get holy fish array
    const holyFish = mostHolyFish()

    // Iterate the array of holy fish
    for (const holyFishObject of holyFish) {
        const holyFishHTMLRepresentation = fishConverter(holyFishObject)

        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += holyFishHTMLRepresentation
    }
}

const displaySoldier = () => {
    // Get soldier fish array
    const soldierFishArray = soldierFish()

    // Iterate the array of soldier fish
    for (const soldierFishObject of soldierFishArray) {
        const soldierFishHTMLRepresentation = fishConverter(soldierFishObject)

        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += soldierFishHTMLRepresentation
    }
}


const displayPlebs = () => {
    // Get plebs fish array
    const plebsFishArray = fishPlebs()

    // Iterate the array of plebs fish
    for (const plebsFishObject of plebsFishArray) {
        const plebsFishHTMLRepresentation = fishConverter(plebsFishObject)

        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += plebsFishHTMLRepresentation
    }
}

