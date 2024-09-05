const btns = document.querySelectorAll(".btn")
const header = document.querySelector("header")

btns.forEach(btn => btn.addEventListener("click", ()=> {
    header.style.display = "none"
}))


document.querySelector(".asi").addEventListener("click", ()=> {
    document.querySelectorAll(".kurs_miti").forEach(el => el.style.display = "none")
})

document.querySelector(".miti").addEventListener("click", ()=> {
    document.querySelectorAll(".kurs_asi").forEach(el => el.style.display = "none")
})

const wyjdz = document.querySelectorAll(".wyjdz")


wyjdz.forEach(btn => btn.addEventListener("click", ()=> {
    const c = document.querySelectorAll(".info")
    c.forEach(xd => {
        xd.classList.remove("show"); 
        // document.querySelector("main").style = "overflow: auto";
    })
}))



const sylElements = document.querySelectorAll('.syl');

sylElements.forEach(element => {
    element.addEventListener('click', () => {
    

     
    
            document.querySelector(`.info#${element.classList[2]}`).classList.add('show');
    });
});
