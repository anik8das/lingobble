let params = new URL(window.location.href).searchParams;
let url = params.get("q");
console.log("search term", url);
