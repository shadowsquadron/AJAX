let btn = document.querySelector("#load-btn")


btn.addEventListener("click", async function(){

    //method1: serial loading

    // let file_1 = await axios.get("file1.txt")
    // let string_1 = file_1.data

    // let file_2 = await axios.get("file2.txt")
    // let string_2 = file_2.data

    // console.log(string_1)
    // console.log(string_2)

    // let content = document.querySelector("#content")
    // content.value=`${string_1}\n${string_2}`

    //method 2: parallel loading

    let request_1 = axios.get("file1.txt")
    let request_2 = axios.get("file2.txt")

    let response_1 = await request_1
    let response_2 = await request_2

    string_1 = response_1.data
    string_2 = response_2.data

    let content = document.querySelector("#content")
    content.value=`${string_1}\n${string_2}`
    


})