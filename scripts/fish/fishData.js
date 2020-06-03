const fishCollection = [
    {
        species: "Trigger Fish",
        length: 12,
        location: "Bay of Bengal",
        picture: "./images/triggerfish.jpg",
        food: "Baby squid",
        name: "Bubbles"
    },
    {
        species: "Parrot Fish",
        length: 8,
        location: "Sea of Google",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg",
        food: "Popcorn",
        name: "Angus"
    },
    {
        species: "Swordfish",
        length: 323,
        location: "Atlantic Ocean",
        picture: "./images/chester.jpeg",
        food: "Herring",
        name: "Chester"
    },
    {
        species: "Angel Fish",
        length: 8,
        location: "Pacific Ocean",
        picture: "./images/angelfish.jpg",
        food: "Plankton",
        name: "Michael"
    },
    {
        species: "Elegant Corydoras",
        length: 3,
        location: "Caribbean Sea",
        food: "Algae",
        name: "Sweet",
        picture: "./images/pink.jpg"
    },
    {
        species: "Orange Roughy",
        length: 10,
        location: "Southern Ocean",
        picture: "./images/roughy.jpeg",
        food: "Anchovies",
        name: "Michael"
    },
    {
        species: "Trigger Fish",
        length: 12,
        location: "Bay of Bengal",
        picture: "./images/triggerfish.jpg",
        food: "Baby squid",
        name: "Bubbles"
    },
    {
        species: "Parrot Fish",
        length: 8,
        location: "Sea of Google",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg",
        food: "Popcorn",
        name: "Angus"
    },
    {
        species: "Swordfish",
        length: 217,
        location: "Atlantic Ocean",
        picture: "./images/chester.jpeg",
        food: "Herring",
        name: "Chester"
    },
    {
        species: "Angel Fish",
        length: 8,
        location: "Pacific Ocean",
        picture: "./images/angelfish.jpg",
        food: "Plankton",
        name: "Michael"
    },
    {
        species: "Elegant Corydoras",
        length: 5,
        location: "Caribbean Sea",
        food: "Algae",
        name: "Sweet",
        picture: "./images/pink.jpg"
    },
    {
        species: "Orange Roughy",
        length: 20,
        location: "Southern Ocean",
        picture: "./images/roughy.jpeg",
        food: "Anchovies",
        name: "Michael"
    }
]

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



