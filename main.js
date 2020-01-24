const pets = [
{image:"https://www.dogbreedinfo.com/images32/LhasaApsoPurebredRescueDogAndy1.jpg",
name:'Chai',
color:'White and Tan',
specialSkill:'Running fast in hallways',
typeOfPet:'Dog'},

{image:"https://www.thehappycatsite.com/wp-content/uploads/2017/10/Orange-Tabby-Cat-Fascinating-Facts-About-Orange-Cats-HC-long.jpg",
name:"Kiki",
color:'Orange',
specialSkill:'Scratches furniture',
typeOfPet:'Cat'},

{image:"https://hamstersportal.com/wp-content/uploads/2019/12/Black-Bear-Hamster.jpg",
name:'Genny',
color:'black',
specialSkill:'Transforming into hamsters',
typeOfPet:'Dog'},

{image:"https://i.pinimg.com/originals/67/ef/9e/67ef9ee912cca4053c1dad6351dbf994.jpg",
name:'Barney',
color:'purple',
specialSkill:'master of imagination',
typeOfPet:'Dinosaur'},

{image:"https://le-www-live-s.legocdn.com/sc/media/lessons/wedo-2/wedo-projects/images/frogs-metamorphosis-project-image-feb9db40c70bcda57e12f5671d4bc278.jpg?fit=inside|1400:1013",
name:'Kimmy',
color:'lime green',
specialSkill:'Transforming into Frogs',
typeOfPet:'Cat'},

{image:"https://en.es-static.us/upl/2018/06/Screen-Shot-2018-06-27-at-2.30.15-PM.png",
name:'Timmy',
color:'Dinosaur colors',
specialSkill:'Knitting blankets',
typeOfPet:'Dinosaur'}
];

const printToDom = (divId, textToPrint) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = textToPrint;
};

const buildPetCards = () => {
    let domString = '';
    for(let i= 0; i <pets.length; i++) {
        domString += `<div class="cards">`;
        domString += `<h2 class="name">${pets[i].name}</h2>`;
        domString += `<img src="${pets[i].image}" alt="A picture of a ${pets[i].typeOfPet}" class="center">`;
        domString += `<p class="color">${pets[i].color}</p>`;
        domString += `<p class="specialskills">${pets[i].specialSkill}</p>`;
        domString += `<footer class"typeofpet">${pets[i].typeOfPet}</footer>`;
        domString += `</div>`;
    }
printToDom('pet-adoption', domString);
};

buildPetCards();