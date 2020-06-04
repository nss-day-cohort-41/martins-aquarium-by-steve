
getFishData().then(
    () => {
        console.log("inside", fishCollection)
        fishList()
    }
)
console.log("outside", fishCollection)
