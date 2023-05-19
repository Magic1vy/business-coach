const menuBtn = document.getElementById('menuBtn');
const sidenav = document.getElementById('mySidenav');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
    sidenav.style.width = '350px';
    sidenav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sidenav.style.width = '0';
    sidenav.classList.remove('open');
});

const links = sidenav.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        sidenav.style.width = '0';
        sidenav.classList.remove('open');
    });
}

const accordion = document.getElementsByClassName("accordion");

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    });
}



