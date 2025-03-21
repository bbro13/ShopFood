window.onscroll = () =>{
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
        
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut();

document.addEventListener("DOMContentLoaded", function() {
    let orderSection = document.querySelector("#order");
    let orderButton = document.querySelector(".btn0");

    if (orderButton && orderSection) {
        orderButton.addEventListener("click", function(event) {
            event.preventDefault();
            orderSection.style.display = "block";
            orderSection.scrollIntoView({ behavior: "smooth" })
        });
    }
});
