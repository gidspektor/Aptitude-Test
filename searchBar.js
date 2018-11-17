
document.getElementById("searchReset").addEventListener("click",function () {
    let currentResult = document.querySelectorAll(".scoreEntry")
    currentResult.forEach(function (element) {
        element.style.display = "block"
    })
})

document.getElementById("searchSubmit").addEventListener("click", function () {//adds a click event to the button
    let search = document.getElementById("search")//puts the search box into a variable
    let currentResult = document.querySelectorAll(".scoreEntry")//this is the class on the hbs template and contains all the users results in this object
    currentResult.forEach(function (element) {//for each the object to be able to select only one of the objects on the page as element (console log element for clarity)
        element.style.display = "block"
        let searched = search.value//this is the value of whatever is put into the search box
        if (!element.dataset.name.match(searched) && !element.dataset.email.match(searched)){
             element.style.display = "none"
        }
    })
})