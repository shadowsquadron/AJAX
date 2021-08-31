let btn=document.querySelector("#load-image-btn")


btn.addEventListener("click", async function(){

    let artwork = document.querySelector("#artwork")
    artwork.innerHTML=""

    let art = await axios.get("artwork.json")
    art = art.data


    let h1 = document.createElement("h1")
    h1.innerHTML=art["title"]
    h1.className=art["class"]


    let img = document.createElement("img")
    img.src = art["image_url"]

    h1.appendChild(img)

    
    artwork.appendChild(h1)


})

