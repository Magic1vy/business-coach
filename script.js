function closePopupAndSetCookie() {
    document.getElementById('cookieConsentPopup').style.display = 'none';

    let date = new Date();
    date.setFullYear(date.getFullYear() + 1); // Cookie expiration - 1 year
    document.cookie = "cookieConsent=true; expires=" + date.toUTCString() + "; path=/";
}

function declineAndSetCookie() {
    document.getElementById('cookieConsentPopup').style.display = 'none';

    let date = new Date();
    date.setFullYear(date.getFullYear() + 1); // Cookie expiration - 1 year
    document.cookie = "declineCookieConsent=true; expires=" + date.toUTCString() + "; path=/";
}

function showCookiePolicy() {
    document.getElementById('cookieConsentPopup').style.display = 'none';
    document.getElementById('cookiePolicyModal').style.display = 'block';
    document.getElementById('cookiePolicyModalContent').style.display = 'block';
    document.body.classList.add('modal-open');
}

function closeCookiePolicyModal() {
    document.getElementById('cookiePolicyModal').style.display = 'none';
    document.body.classList.remove('modal-open');
}

window.onload = function() {
    if (document.cookie.indexOf('cookieConsent=true') === -1 && document.cookie.indexOf('declineCookieConsent=true') === -1) {
        document.getElementById('cookieConsentPopup').style.display = 'block';
    }
};



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

if (window.innerWidth > 768) {
    AOS.init({
        duration: 2000,
        easing: 'ease-in-out',
    });
}




