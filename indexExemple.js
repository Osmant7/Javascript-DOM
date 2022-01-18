// variables

let cours = "egregg";

console.log(cours + "// avant MAJ ");

cours = "thyytrh";
console.log(cours + " // après MAJ");

const prenom = "pato";

console.log(prenom);

// functions

// function simple
function faireQuelqueChose() {
  console.log("je fais un truc");
}

// function fléchée
const faireUneTache = (type) => {
  console.log("je fais : " + type);
};

faireQuelqueChose();
faireUneTache("la vaisselle");
faireUneTache("les courses");
