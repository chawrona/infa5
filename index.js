const mitibtn = document.querySelector("#miti")
const asibtn = document.querySelector("#asi")


mitibtn.addEventListener("click", () => {
    document.body.classList.remove("body_hid")
    document.querySelector("div").style.display = "none";
    document.querySelectorAll(".kurs_asi").forEach(el => el.classList.add("hide"))
})

asibtn.addEventListener("click", () => {
    document.body.classList.remove("body_hid")
    document.querySelector("div").style.display = "none";
    [...document.querySelectorAll(".kurs_miti")].forEach(el => el.classList.add("hide"));
    
});


[...document.querySelectorAll("tr")].forEach(el => {
    const tds = [...el.querySelectorAll("td")]

    if (tds[3] && tds[3].innerText === "2") {
        el.classList.add("color2")
    } 
});


[...document.querySelectorAll(".syl")].forEach(el => {

    el.addEventListener("click", () => {

        if (el.classList[0] === "E") {
            const id = el.classList[2]
            document.querySelector(`#${id}`).classList.add("pokaz")
            document.body.classList.add("body_hid")
    
        } else {
            const id = el.classList[1]
            document.querySelector(`#${id}`).classList.add("pokaz")
            document.body.classList.add("body_hid")
        }
    })

});

[...document.querySelectorAll(".wyjdz")].forEach(el => {

    el.addEventListener("click", () => {
        document.querySelector(".pokaz").classList.remove("pokaz")
        document.body.classList.remove("body_hid")
    })

})