/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

const fishList = () => {
    // Iterate the collection of fish objects
    for (const currentFishObject of fishCollection) {

        // Convert the current fish to its HTML representation
        const fishHTML = fishConverter(currentFishObject)

        // Find the <article> element in index.html
        const fishArticleElement = document.querySelector(".fishList")

        // Put the fish HTML representation inside the <article> element
        fishArticleElement.innerHTML += fishHTML
    }
}
