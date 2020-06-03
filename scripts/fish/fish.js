/*
    This function will convert a single fish object to an
    HTML representation and return it
*/
const fishConverter = (fishObject) => {

    const fishHTMLRepresentation = `<section class="fish">
        <div class="">
            <img class="fish__picture" src="${fishObject.pictures}"
                alt="${fishObject.name} the ${fishObject.species}" />
        </div>
        <div class="fish__details">
            <ul>
                <li>Species: ${fishObject}</li>
                <li>Length: ${fshObject.length}</li>
                <li>Name: ${fishObject.name}</li>
                <li>Location: ${fishObject.location}</li>
                <li>Food: ${fishObject.food}</li>
            </ul>
        </div>
    </section>`

}