let btn = document.querySelector("#btn")

let beenClicked=false //double click blocker
btn.addEventListener("click", async function(){

    if(beenClicked==true){                       //double click blocker

        return

    }
    
    beenClicked =true                            

    // document.querySelector("#btn").disable = true   //double click blocker

    let ul = document.querySelector("#fruits")

    ul.innerHTML=""

    let string = await axios.get("items.txt")

    let string_list = string.data.split(",")

    console.log(string_list)

    

    for (let fruit of string_list){

        // let li  = document.createElement("li")
        // li.innerHTML=fruit

        // ul.appendChild(li)

        // or

        ul.innerHTML += `<li>${fruit}</li>`


    }


    beenClicked == false                         //double click blocker

    // document.querySelector("#btn").disable = false   //double click blocker

})

