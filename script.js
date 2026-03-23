// const openArrow = document.querySelector('.first-arrow');
// const closeArrow = document.querySelector('.second-arrow');
// const recette = document.querySelector('.deroulant')


//     openArrow.addEventListener('click', () => {
//        recette.classList.toggle('deroulant');
//        if (recette.classList.contains('deroulant')){
//         openArrow.setAttribute(closeArrow);
//        } else {
//         openArrow;
//        }
// });

const cartes = document.querySelectorAll('.carte-recette');

cartes.forEach(carte => {
    const openArrow = carte.querySelector('.first-arrow');
    const closeArrow = carte.querySelector('.second-arrow');
    const recette = carte.querySelector('.deroulant');

    // On crée une fonction commune pour gérer l'affichage
    const toggleRecette = () => {
        // Ta structure de condition
        recette.classList.toggle('active');

        if (recette.classList.contains('active')) {
            // État : Recette OUVERTE
            recette.style.display = "block";
            openArrow.style.display = "none";
            closeArrow.style.display = "block";
        } else {
            // État : Recette FERMÉE
            recette.style.display = "none";
            openArrow.style.display = "block";
            closeArrow.style.display = "none";
        }
    };

    // On écoute le clic sur les deux flèches
    openArrow.addEventListener('click', toggleRecette);
    closeArrow.addEventListener('click', toggleRecette);
});