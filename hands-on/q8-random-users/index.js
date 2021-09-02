let url = "https://randomuser.me/api/?results=10"


let btn = document.querySelector("#btn")

btn.addEventListener("click", async function(){


    let users = await axios.get(url)
    users = users.data


    
    let usersList = document.querySelector("#usersList")
    usersList.innerHTML=""

    for(let user of users["results"]){

        let userName=`${user.name.first} ${user.name.last}`
        let userCity= `${user.location.city}`
        let userImage = `${user.picture.medium}`

        let pName = document.createElement("p")
        pName.innerHTML=userName

        let pCity = document.createElement("p")
        pCity.innerHTML=userCity

        let pImage = document.createElement("img")
        pImage.src=userImage

        
        usersList.appendChild(pName)
        usersList.appendChild(pCity)
        usersList.appendChild(pImage)
        usersList.innerHTML+="<hr>"


    }





})