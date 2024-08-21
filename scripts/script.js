function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "site-jogos-eletronicos/images/menu_white_36dp.svg";
    } 
    else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "site-jogos-eletronicos/images/close_white_36dp.svg";
    }
}