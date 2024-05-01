// Etape 1
// console.log('test 1...2...1...2');


// Etape 2
const hercule = {
    name: 'Hercule',
    job: 'Demi-dieu',
    age: parseInt(35),
    department: parseInt(75),
    arm: parseFloat(60.5) ,
    inRelationship: true,
}
base.fillProfil(hercule);


// Etape 3
const herculeFriends = ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'];
// console.table(herculeFriends);
// 1er test
base.printFriends(herculeFriends);
// 2e test
base.setBestFriend(herculeFriends[0])


// Etape 4
// Crée une balise h1
const h1 = document.createElement('h1');
// donne lui la classe banner__title
h1.classList.add('banner__title');
// écris dedans Vous consultez le profil de Hercule,
h1.textContent = 'Vous consultez le profil de Hercule';
// insère la dans l'élement possédant l'id header-banner
const titlePage = document.getElementById('header-banner');
titlePage.appendChild(h1);


// Etape 5
for (let i = 0; i <= 11; i++) {
    base.displayWork(i);
  }


// Etape 6
base.getHour();
const availability = document.getElementById('availability');

if (base.getHour() >= 8 && base.getHour() < 20) {
    availability.textContent = 'Disponible';
} else {
    availability.classList.add('off');
}


// Etape 7
function pseudoFn(name,department) {
    const pseudo = `${hercule.name}-du-${hercule.department}`;
    const profilName = document.getElementById('profil-name');
    profilName.textContent = pseudo;
    return pseudo;
}
pseudoFn();


// Étape 8
const menu = document.getElementById(`menu-toggler`);
menu.addEventListener('click', function(event) {
    document.getElementById(`header-banner`).classList.toggle(`banner--open`);  
});


// Étape 9
const validateForm = document.querySelector(`.contact__button`);
validateForm.addEventListener('click', function(event) {
    event.preventDefault();
alert('Hercule ne souhaite pas être dérangé !!! Il fait la sieste.');
});