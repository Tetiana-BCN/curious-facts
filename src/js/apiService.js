export function apiService() {
  document.getElementById("root").innerHTML = ("#title");
}

fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
  .then(res => res.json())
  .then(response => {
    console.log(response)
  })