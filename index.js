const share = document.querySelector('.share-container')
const container = document.querySelector(".active")
let iconShow = false;
// container.style.display = "none"

share.addEventListener("click", ()=>{
    console.log("click")
    if(iconShow){
        container.style.display = "block"
        iconShow = false
    }else{
        container.style.display = "none"
        iconShow = true
    }
})