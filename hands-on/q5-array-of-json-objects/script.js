let btn = document.querySelector("#load-users-btn")




btn.addEventListener("click", async function(){

    

    let allUsers = document.querySelector("#all-users")
    allUsers.innerHTML = ""

    let users = await axios.get("users.json")
    users = users.data


    let divUser=document.createElement("div")

    for (let user of users["users"]){
        divUser.innerHTML=`<h2>${user.firstName} ${user.lastName}</h2>
        <p>${user.emailAddress}</p>`
        allUsers.innerHTML=allUsers.innerHTML+divUser.innerHTML
    }
   


})


let search_btn = document.querySelector("#btn")


search_btn.addEventListener("click", async function(){

    let search = document.querySelector("#search").value


    let allUsers = document.querySelector("#all-users")
    allUsers.innerHTML = ""

    let users = await axios.get("users.json")
    users = users.data


    let divUser=document.createElement("div")

    users["users"][0]["userID"]
    users.user[0]
    for (let user of users["users"]){
        if(user["userId"]===parseInt(search)){
        divUser.innerHTML=`<h2>${user.firstName} ${user.lastName}</h2>
        <p>${user.emailAddress}</p>`
        allUsers.innerHTML=allUsers.innerHTML+divUser.innerHTML}
    }




})

