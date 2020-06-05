/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/
const locationVisibilityButton = document.querySelector(".toggleLocations")

locationVisibilityButton.addEventListener("click", (clickEvent) => {
    // const locationListArticle = document.querySelector(".locationList")
    // locationListArticle.classList.toggle("hidden")

    document.querySelector(".locationList").classList.toggle("hidden")
})


const locationList = () => {
    for (const location of locationCollection) {
        const html = locationConverter(location)

        const locationArticleElement = document.querySelector(".locationList")
        locationArticleElement.innerHTML += html
    }
}

