let url = new URLSearchParams(window.location.search);
if (url.get("keyword")) {
    fetch(`.././data.json${url.get("keyword")}`)
    .then(res =>res.json())
    .then(function(data) {

    });
}