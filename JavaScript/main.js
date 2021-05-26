// Navbar Menu

const openNavbar = document.querySelector('.menu');

openNavbar.addEventListener('click', function() {
    const navbarResponsive = document.querySelector('.navbar-responsive .container');
    navbarResponsive.classList.toggle('active');
});


const closeNavbar = document.querySelector('.close');

closeNavbar.addEventListener('click', function() {
    const navbarResponsive = document.querySelector('.navbar-responsive .container');
    navbarResponsive.classList.toggle('active');
})


// Modal mobile

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


const boxModal = document.querySelector('#sect-modal .container .box-modal');
const backgroundResponsive = document.querySelector('#home-page .container');

function responsiveWindow() {
    if (isMobile.any()) {
        boxModal.classList.add('responsiveBox');
        backgroundResponsive.classList.add('opacity');
    }
}
responsiveWindow();

const btnDownload = document.querySelector('.btn-download');
btnDownload.addEventListener('click', function() {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.ubercab&hl=pt_BR&gl=US';
});

const btnClose = document.querySelector('.close-modal');
btnClose.addEventListener('click', function() {
    boxModal.classList.remove('responsiveBox');
    backgroundResponsive.classList.remove('opacity');
});