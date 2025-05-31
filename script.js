var keyword = document.getElementById("input_busqueda");
var contentGifs = document.getElementById("contentGifs");
var trending = document.getElementById("trending");
var boton = document.getElementById("boton");
var mp = document.getElementsByTagName("li");
boton.addEventListener("click", buscar, false);
let quees;

//console.log(mp);
/*
mp.forEach(element => {
    console.log(element);

});*/

trendingGIF();
console.log(quees);
keyword.value = "hasbulla";

function buscar() {
    event.preventDefault();
    buscarGIFs(keyword.value);
}

function buscarGIFs(keyword) {
    var apiKEY = "c3dRkVfm7C3lkMMFR3fF9vDO5ijYGCPB";
    var apiURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKEY + "&q=" + keyword + "&limit=24&offset=0&rating=g&lang=en";
    fetch(apiURL).then(res => res.json())
        .then(response => {
            var { data } = response;
            var gifs = data.map(item => ("<div class='item'><img  src='" + item.images.downsized_medium.url + "' /></div>")).join('');
            contentGifs.innerHTML = gifs;
        })
}

function trendingGIF() {
    var apiKEY = "c3dRkVfm7C3lkMMFR3fF9vDO5ijYGCPB";
    var apiURL = "https://api.giphy.com/v1/gifs/trending?api_key=" + apiKEY + "&limit=5&rating=r";
    fetch(apiURL).then(res => res.json())
        .then(response => {
            var { data } = response;
            var gifs = data.map(item => ("<div class='itemTrending'><img  src='" + item.images.downsized_medium.url + "' /></div>")).join('');
            //console.log(gifs);
            trending.innerHTML = gifs;
             quees = gifs;
        })
}