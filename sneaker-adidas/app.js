// Moviemet Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const descrition = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Moving Animation Event
container.addEventListener("mousemove", (event) => {
    let xAxis = (window.innerWidth / 2 - event.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})


// Animation In
container.addEventListener("mouseenter", (event) => {
    card.style.transition = 'none';
    // Popout
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px)  rotate(-45deg)';
    descrition.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
})


// Animation Out
container.addEventListener("mouseleave", (event) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Popout
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px)  rotate(0deg)';
    descrition.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
})
