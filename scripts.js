


let container = document.querySelector(".scrollingContainer");

let containerWidth = 0;
let clones = [];
let disableScroll = false;
let scrollPos;

let arrowBtns = [...document.querySelectorAll('#projectPage i')];

let items = [...document.querySelectorAll(".scrollingContent")];
items.forEach(item => {
    containerWidth += item.offsetWidth;
    console.log(containerWidth);
})

let firstItem = items[0];
let lastItem = items[(items.length) - 1];

let clone = lastItem.cloneNode(true);
clone.classList.add('clone');
container.prepend(clone);
clone = items[(items.length) - 2].cloneNode(true);
clone.classList.add('clone');
container.prepend(clone);
clone = firstItem.cloneNode(true);
clone.classList.add('clone');
container.append(clone);
clone = items[1].cloneNode(true);
clone.classList.add('clone');
container.append(clone);


container.scrollLeft = 2 * firstItem.offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id == "left") {
            if (container.scrollLeft <= firstItem.offsetWidth) {
                console.log("LEFTTTTT");
                container.classList.add("no-transition");
                container.scrollLeft += (items.length * firstItem.offsetWidth);
                container.classList.remove("no-transition");
            }
            container.scrollLeft -= firstItem.offsetWidth;




        } else if (btn.id == "right") {
            if (container.scrollLeft >= items.length * firstItem.offsetWidth) {
                container.classList.add("no-transition");
                container.scrollLeft -= items.length * firstItem.offsetWidth;
                container.classList.remove("no-transition");
            }
            container.scrollLeft += firstItem.offsetWidth;
        }
    });

})

function goToResume() {
    window.open("/TEST.pdf");
}

function sendMail() {
    console.log("TRY SEND")
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dateString = (month + 1) + "/" + day + "/" + year;
    var params = {
        name: document.getElementById("formName").value,
        email: document.getElementById("formEmail").value,
        date: dateString,
        subject: document.getElementById("formSubject").value,
        message: document.getElementById("formMessage").value
    };

    const serviceID = "service_sit058e";
    const templateID = "template_3wys8cn";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("formName").value = "";
                document.getElementById("formEmail").value = "";
                document.getElementById("formSubject").value = "";
                document.getElementById("formMessage").value = "";
            }

        )
        .catch(error => {
            console.log(error)
        })
        alert("Your message has been sent successfully.");

}
