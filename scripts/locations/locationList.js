/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/
const locationList = () => {
    for (const location of locationCollection) {
        const html = locationConverter(location)

        const locationArticleElement = document.querySelector(".locationList")
        locationArticleElement.innerHTML += html
    }
}

