function menuShow() {
    let menu = document.querySelector(".mobile");

    
    if(menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
}