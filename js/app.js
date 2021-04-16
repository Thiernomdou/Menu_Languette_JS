const menuSlider = document.querySelector('.menuSlider');
const btn = document.querySelector('.btn');
const itemListe = document.querySelectorAll('.menuItem');
const imgChange = document.getElementById('imgChange');
let toogle = 0;
let imageDejaMiseEnplace = 0;

btn.addEventListener('click', () => {

    
    if(toogle === 0) {
        toogle++;
        TweenMax.to(menuSlider,1.75,{transform: 'translate(0px)', ease: Expo.easeOut})
    } else {
        toogle--;
        TweenMax.to(menuSlider,1.75,{transform: 'translate(2000px)'})
    }

})

/* Changer l'image à chaque fois qu'on survole
sur un lien*/
itemListe.forEach(element => element.addEventListener('mouseenter', () => {

    if(element.getAttribute('data-id') === imageDejaMiseEnplace) {
        return;
    } else {
        imgChange.src = "/img/pic" + element.getAttribute('data-id') + ".jpg";
        TweenMax.to(imgChange,0.1,{opacity: 0.4})
        TweenMax.to(imgChange,0.2,{delay: 0.1, opacity: 1})
        imageDejaMiseEnplace = element.getAttribute('data-id');
    }

}))

// la fenetre disparait aussi quand on clique sur un lien
itemListe.forEach(element => element.addEventListener('click', () => {
    toogle--;
    TweenMax.to(menuSlider,1.75,{transform: 'translate(2000px)'})

}))