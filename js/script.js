let $ = document;
let counterEl = $.querySelector(".counter")
let inpUserEl = $.querySelector("#inpUser")


// way 1
inpUserEl.addEventListener("keyup",()=>{
    counterEl.textContent = (inpUserEl.maxLength)-(inpUserEl.value.length)
})
