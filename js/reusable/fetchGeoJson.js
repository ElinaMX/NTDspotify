
fetch("data/BDG_test.geojson")
    .then(response => response.json())
    .then(BDG => {
        console.log(BDG)
    })
