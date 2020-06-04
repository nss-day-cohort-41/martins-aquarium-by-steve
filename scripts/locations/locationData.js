let locationCollection = []


const getLocations = () => {
    return fetch("http://localhost:8088/locations")
        .then( httpResponse => httpResponse.json() )
        .then(locations => locationCollection = locations )
}

