// __dirname  - path to current dir
// __filename - file name
//require     - function to use modules (CommonJs)
//module      - info about current module (file)
//process     - info about env where the program is executed


const places = ["germany", "usa", "dubia"];

setInterval(() => {
    places.map((place) => {
        console.log(place);
    });
}, 1000);