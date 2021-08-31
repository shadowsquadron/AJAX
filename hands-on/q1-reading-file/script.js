let btn = document.querySelector("#load-btn")

function display(contact_detail){

    let content = document.querySelector("#content")
    content.innerHTML = contact_detail




}

btn.addEventListener("click", async function(){ //can put async here

    let response = await axios.get("contact.txt")
    console.log(response.data)
    display(response.data)



})