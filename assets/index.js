// Récupération des travaux de la bdd api
const reponse = await fetch('http://localhost:5678/api/works');
const works = await reponse.json();
// Récupération des categories des travaux de la bdd api
const reponseCategorie = await fetch('http://localhost:5678/api/categories');
const categorieWorks = await reponseCategorie.json();


// Ajout du listener pour trier les pièces par objet
const boutontrierObjets = document.querySelector(".btn-objets");
boutontrierObjets.addEventListener("click", function (event) {
    // On empêche le comportement par défaut
    event.preventDefault()
    effacerWorks()

    for (let i = 0; i < works.length; i++) {

        // Récupération des categoriesId
        let work = works[i];
        let categoryId = work.categoryId

        if (work.categoryId === 1) {
            genererWorks(i);
            changerActive("btn-objets");
        }

    }
});

// Ajout du listener pour trier les pièces par appartements
const boutontrierAppartements = document.querySelector(".btn-appartements");
boutontrierAppartements.addEventListener("click", function (event) {
    // On empêche le comportement par défaut
    event.preventDefault()
    effacerWorks()

    for (let i = 0; i < works.length; i++) {

        // Récupération des categoriesId
        let work = works[i];
        let categoryId = work.categoryId

        if (work.categoryId === 2) {
            genererWorks(i);
            changerActive("btn-appartements");
        }

    }
});

function changerActive(classmodif) {

    let baliseBtnactive = document.querySelector(".btn-active");
    baliseBtnactive.classList.remove("btn-active")

    let baliseBtnremove = document.querySelector(`.${classmodif}`);
    baliseBtnremove.classList.add("btn-active")

}


// Ajout du listener pour trier les pièces par hotels
const boutontrierHotels = document.querySelector(".btn-hotels");
boutontrierHotels.addEventListener("click", function (event) {
    // On empêche le comportement par défaut
    event.preventDefault()
    effacerWorks()

    for (let i = 0; i < works.length; i++) {

        // Récupération des categoriesId
        let work = works[i];
        let categoryId = work.categoryId

        if (work.categoryId === 3) {
            genererWorks(i);
            changerActive("btn-hotels");
        }

    }
});


// Ajout du listener pour trier les pièces par defaut
const boutontrierDefaut = document.querySelector(".btn-defaut");
boutontrierDefaut.addEventListener("click", function (event) {
    // On empêche le comportement par défaut
    event.preventDefault()
    effacerWorks()

    for (let i = 0; i < works.length; i++) {

        // Récupération des categoriesId
        let work = works[i];
        let categoryId = work.categoryId

        genererWorks(i);
        changerActive("btn-defaut");

    }
});


// On génère la page de base
for (let i = 0; i < works.length; i++) {
    genererWorks(i)
}

// Fonction pour ajouter les projets
function genererWorks(i) {

    const article = works[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionGallery = document.querySelector(".gallery");
    // Création d’une balise dédiée à un travail
    const worksElement = document.createElement("figure");
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = article.imageUrl;
    imageElement.alt = article.title;

    const nomElement = document.createElement("figcaption");
    nomElement.innerText = article.title;

    // On rattache la balise article a la section Fiches
    sectionGallery.appendChild(worksElement);
    worksElement.appendChild(imageElement);
    worksElement.appendChild(nomElement);


}
function effacerWorks() {

    // Efface le contenu de la balise gallery
    document.querySelector(".gallery").innerHTML = '';

}
