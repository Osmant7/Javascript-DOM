// SELECTEURS
// document.querySelector('h4').style.background = "yellow";
// const baliseHTML = document.querySelector("h4");


// CLICK EVENT

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');



questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener('click', () => {
    response.classList.add('show-response');
    response.style.background = "green";
})

btn2.addEventListener("click", () => {
    response.classList.add('show-response');
    response.style.background = "red";
});





//              <div> > #id > .class > baliseHTML


// le (e) récupère les données de l'événement réalisé

// ****************
// Mouse Events

const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";

});

window.addEventListener('mousedown', () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
})

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});


questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
})

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener('mouseover', () => {
    response.style.transform = "rotate(2deg)";
});

// ******************
// KeyPress event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
//   audio.src = "./cours_z.mp3";   <--- ici cest pour toute les touches le meme fichier son qui sera lu (enlever le "key" de la fonction si on veut que cela fonctionne)
    audio.src = key + ".mp3";   // ici via le key et les lignes en dessous, la lettre tapé sur le clavier sera joué si le nom du fichier porte le meme nom , ex : si je tape  sur o alors le fichier o.mp3 jouera. faudrait donc que ring() possède e.key 
    audio.play();
};

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;

    if(e.key === "j"){
        keypressContainer.style.background = "red";
    } else if (e.key === "y"){
        keypressContainer.style.background = "blue";
    } else {
        keypressContainer.style.background = "yellow";
    }

    if (e.key === 'b') {
        ring(e.key)
    };
});


//**************** ****/

// Scroll Event

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 246) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
})

// **********************

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = "";
let language = "";

console.log(select);

inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
    language = e.target.value;
});


// pas besoin de déclarer une variable pour les checkbox et les bouttons
// donc l'id cgv    le reconnait quand on fait cgv.checked
// ici on utilise innerHTML pour injecter du texte et données et balises, si on utilise textContent on verra les balises aussi

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
            <h3> Pseudo : ${pseudo} </h3>
            <h4>Langage préféré : ${language}</h4>
        `;
    } else {
        alert('Veuillez accepter les CGV')
    }
})

//*********************** */

// Load Event
// permet de mettre des choses que lorsque la page est chargée

window.addEventListener('load', () => {
    console.log("document chargé");
})

//**************** */

// getElementsByClassName permet de sélectionner les élements qui possède "box" dans leur class
// const boxes = document.getElementsByClassName('box');
const boxes = document.querySelectorAll('.box')
console.log(boxes);

// ici mes boxes je vais les appeller chacune d'elle (box)
boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        e.target.style.transform = "scale(0.7)";
    })
})

//********************* */


// addEventListener VS onclick

// document.body.onclick = () => {
//     console.log("Cliccckk !");
// };

// document.body.onclick = () => {
//     console.log("scroll !");
// };

// un des défaut de la méthode onclick, lorsqu'on met 2 evenements sur la meme balises ,elle écrase la premiere
// on peut également utiliser onclick directement sur une balise html exemple : <body onclick="ring('b')">
// mais ce n'est pas recommandé 
// pour addEventListener on peut faire le meme evenement pour la meme balises


// Bubbling => fin (de base l'evenetListener est paramétré en mode Bubbling)
// de base le 3eme argument (donc le 1er cest click) est en false
document.body.addEventListener('click', () => {
    console.log("click 1 !");
});


// Usecapture
// en mettant en 3eme argument -> true bas l'evenement  ce déclenche avant
document.body.addEventListener("click", () => {
  console.log("click 2 !");
}, true);

// https://gomakethings.com


//********************** */

// Stop propagation

questionContainer.addEventListener('click', (e) => {
    // alert('test !!! ');
    // e.stopPropagation();
})

// en faisant ca l'alerte ce déclanche + le click 2 ! aussi car 3eme argument true, alors que le click 1 ! ce déclanche une fois l'alerte fermé
// en utilisant e.stopPropagation() permet de dire l'evenement du click ne l'utilise pas ailleurs
// le click 2 a quand meme  marché car le stopPropagation ne l'as pa encore lu (via le 3eme argument true)
// le click 1 na pas marché car le stopPropagation a stopé la propagation


// removeEventListener permet de retirer un addEventListener --- cest une info juste


//******************** */

// BOM --- Browser Object Model  --- le cours est dans le github de from scratch

// console.log(window.innerHeight);
// console.log(window.scrollY);


// ici cela permet d'ouvrir un pop up
// window.open('http://google.com', "Cours js", "height=600, width=800");

// window.close()      ---> permet de fermer la fenetre (pour tester on peut lécrire dans la console)


// Evenements adossés à Window
// alert("hello");
// confirm      ---> super utile pour par exemple quand lutilisateur veut supprimer ou valider qqlchose, de pop up une alerte (possibilité de dire ok ou annuler)
btn2.addEventListener('click', () => {
    confirm("Voulez vous vraiment vous tromper ?");
})

// prompt    -- une alerte ou on peut écrire qqlchose (puis faudrait le récup si on veut lutiliser évidemment)
btn1.addEventListener('click', () => {
    let answer = prompt('Entrez votre nom !');

    questionContainer.innerHTML += "<h3> Bravo" + answer + "</h3>"
});


// setTimeout    (Timer, compte à rebours)

// setTimeout(() => {
//     // logique a éxecuter
// }, 'temps en millisecondes avant de le déclencher')

// ca veut dire que ce bout de code tu me l'éxecute dans 2 seconde
// setTimeout(() => {
//     questionContainer.style.borderRadius = "300px";
// }, 2000);



// setInterval
// en gros on va injecter ce innerHTML toute les 1 seconde au body
// pour stopper cet evenement faut le mettre dans une variable
// via le e.target.remove on supprime les élements cliqué

// let interval = setInterval(() => {
//     document.body.innerHTML +=
//         `
//         <div class='box'>
//             <h2>Nouvelle boite ! </h2>
//         </div>
//         `
// }, 1000)

document.body.addEventListener("click", (e) => {
    // e.target.remove();
    clearInterval(interval);
});


// Location    ---> savoir le lien exacte où nous somme
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

// location.replace("http://lequipe.fr");      --- permet de rediriger sur une autre page

// window.onload = () => {
//     location.href = "http://youtube.fr";
// }

// Navigator

// console.log(navigator.userAgent);      --- avoir bcp d'infos sur nos données de navigation...


// permettre de se géo localiser : https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);


// History

// console.log(history);     ---- voir l'historique de ce qu'on a fait sur la page
// window.history.back();    --- permettre de revenir en arrière
// history.go(-2);    ---- permet de revenir en arrière 2 fois 


// ****************************

// setProperty
// le nav::after dans le css est pas récupérable en tant que variable (const = doc....), alors dans le css on rajoute une variable var(--x) / var (--y) dans des attributs que
// l'on veut récuperer (left, top) et via la propriété setProperty, on accède à ses variables dans le CSS
// et on ajoute en loccurence le positionnement de la souris comme valeurs en px.
window.addEventListener('mousemove', (e) => {
    nav.style.setProperty('--x', e.layerX + "px");
    nav.style.setProperty('--y', e.layerY + "px");
});