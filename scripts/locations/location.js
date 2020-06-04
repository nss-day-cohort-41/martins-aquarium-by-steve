/*
    This function will convert a single fish object to an
    HTML representation and return it
*/
const locationConverter = (location) => {

    const locationHTML = `<section class="location">
        <div>
            <img class="location__picture" src="${location.picture}" alt="${location.name}" />
        </div>
        <div class="location__details">
                <li>Location: ${location.description}</li>
        </div>
    </section>`

    return locationHTML

}