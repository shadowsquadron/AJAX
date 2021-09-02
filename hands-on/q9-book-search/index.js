API_BASE_URL="http://openlibrary.org/search.json?"

let btn = document.querySelector("#load-book-btn")
btn.addEventListener("click",async function(){

    let bookTitle = document.querySelector("#book-title").value

  
    let books  = await axios.get("http://openlibrary.org/search.json?title=the+lord+of+the+rings")
    books = books.data
    console.log(books)



})