let btn = document.querySelector("#btn")
btn.addEventListener("click", async function(){


    let response = await axios.get("https://anapioficeandfire.com/api/books/")
    let books =response.data

    let bookList = document.querySelector("#bookList")
    bookList.innerHTML=""

    for (let book of books){

        let bookName = book.name
        let bookPages = book.numberOfPages

        


        let pName = document.createElement("p")
        pName.innerHTML = bookName

        let pPages = document.createElement("p")
        pPages.innerHTML = bookPages



        
        let povs = book.povCharacters
        console.log(povs)


        let ul = document.createElement("ul")
        
        for(let pov of povs){

            console.log(pov)

            let response = await axios.get(pov)
            let character =response.data

            
            ul.innerHTML+=`<li>${character.name}</li>`

        }

        let li = document.createElement("li")
        li.appendChild(pName)
        li.appendChild(pPages)
        li.appendChild(ul)

        bookList.appendChild(li)
        bookList.innerHTML+="<hr>"



     }



})