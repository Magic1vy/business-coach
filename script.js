window.onload = function() {
    if (!getCookie('cookieConsent') && !getCookie('declineCookieConsent')) {
        document.getElementById('cookieConsentPopup').style.display = 'block';
    } else {
        document.getElementById('cookieConsentPopup').style.display = 'none';
        document.body.classList.remove('modal-open');
    }
};

function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(name) {
    let nameEQ = name + '=';
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function closePopupAndSetCookie() {
    document.getElementById('cookieConsentPopup').style.display = 'none';
    setCookie('cookieConsent', 'true', 365);
}

function declineAndSetCookie() {
    document.getElementById('cookieConsentPopup').style.display = 'none';
    setCookie('declineCookieConsent', 'true', 365);
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




