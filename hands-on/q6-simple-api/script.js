
let url = "https://programming-quotes-api.herokuapp.com/quotes/random"


let btn = document.querySelector("#btn")


btn.addEventListener("click",async function(){

    let quote=document.addEventListener("#click")
    let response = await axios.get(url)
    quote.innerHTML = response.data




})