


let container = document.querySelector(".scrollingContainer");

let containerWidth=0;
let clones =[];
let disableScroll=false;
let scrollPos;

let arrowBtns = [...document.querySelectorAll('.scrollScreen h2')]

let items = [...document.querySelectorAll(".scrollingContent")];
items.forEach(item =>{
    containerWidth += item.offsetWidth;
    console.log(containerWidth)
})

let firstItem = items[0];
let lastItem = items[(items.length)-1]

let clone = lastItem.cloneNode(true);
clone.classList.add('clone');
container.prepend(clone);
clone = items[(items.length)-2].cloneNode(true);
clone.classList.add('clone');
container.prepend(clone);
clone = firstItem.cloneNode(true);
clone.classList.add('clone');
container.append(clone);
clone = items[1].cloneNode(true);
clone.classList.add('clone');
container.append(clone);


container.scrollLeft=2* firstItem.offsetWidth

arrowBtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        if(btn.id == "left"){
            if(container.scrollLeft<= 2*firstItem.offsetWidth){
                container.classList.add("no-transition");
                container.scrollLeft += 10*firstItem.offsetWidth
                container.classList.remove("no-transition");
            }
            container.scrollLeft -= firstItem.offsetWidth
            
        }else if(btn.id == "right"){
            if(container.scrollLeft>= 8*firstItem.offsetWidth){
                container.classList.add("no-transition");
                container.scrollLeft -= 9*firstItem.offsetWidth
                container.classList.remove("no-transition");
            }
            container.scrollLeft += firstItem.offsetWidth
        }
    });

})

function goToResume(){
    window.open("/TEST.pdf");
}