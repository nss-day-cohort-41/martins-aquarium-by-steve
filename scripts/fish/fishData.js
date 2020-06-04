let fishCollection = []


const getFishData = () => {
    return fetch("http://localhost:8088/fish").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfFish) => {
                // 100 percent sure the data is back
                fishCollection = arrayOfFish
            }
        )
}


const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

const soldierFish = () => {
    const soliderFishArray = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soliderFishArray.push(fish)
        }
    }

    return soliderFishArray
}

const fishPlebs = () => {
    const plebs = []

    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            plebs.push(fish)
        }
    }

    return plebs
}



