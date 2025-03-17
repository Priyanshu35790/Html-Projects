const photo = document.querySelectorAll(".headerImage ul img");
const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let n=0;

function switchPhoto() {
    for (let i = 0; i < photo.length; i++) {
       photo[i].style.display = 'none';
    }
    photo[n].style.display = 'block';

}
switchPhoto();

prevButton.addEventListener('click', (e)=>{
    if(n > 0){
        n--
    }else{
        n = photo.length -1;
    }
    switchPhoto();
})

nextButton.addEventListener('click',(e)=>{
    if (n < photo.length-1) {
        n++
    }else{
        n = 0
    }
    switchPhoto();
} )

const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
    
}