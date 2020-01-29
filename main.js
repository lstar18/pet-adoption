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

{image:"https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1558372159000/photosp/1ae76d0e-4f4d-496f-9262-2c898ebff2a5/stock-photo-dog-sleeping-labrador-puppy-cute-pet-puppies-dogs-sleep-1ae76d0e-4f4d-496f-9262-2c898ebff2a5.jpg",
name:'Genny',
color:'Black',
specialSkill:'Sleeping like a baby',
typeOfPet:'Dog'},

{image:"https://i.pinimg.com/originals/67/ef/9e/67ef9ee912cca4053c1dad6351dbf994.jpg",
name:'Barney',
color:'Purple',
specialSkill:'Master of imagination',
typeOfPet:'Dinosaur'},

{image:"https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png",
name:'Kimmy',
color:'Tan, Black, and White',
specialSkill:'Stealing hearts',
typeOfPet:'Cat'},

{image:"https://en.es-static.us/upl/2018/06/Screen-Shot-2018-06-27-at-2.30.15-PM.png",
name:'Timmy',
color:'Green and Tan',
specialSkill:'Knitting blankets',
typeOfPet:'Dinosaur'}
];

const printToDom = (divId, textToPrint) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = textToPrint;
};

const buildPetCards = (anyArray) => {
    let domString = '';
    for(let i= 0; i < anyArray.length; i++) {
        domString += `<div class="cards">`;
        domString += `<h2 class="name"> ${anyArray[i].name}</h2>`;
        domString += `<img src="${anyArray[i].image}" alt="A picture of a ${anyArray[i].typeOfPet}" class="center">`;
        domString += `<p class="color"> <strong>Color</strong>:    ${anyArray[i].color}</p>`;
        domString += `<p class="specialskills"><strong>Skills</strong>:     ${anyArray[i].specialSkill}</p>`;
    
    switch (anyArray[i].typeOfPet) {
            case "Dog":  
                domString += `<footer class="dog">${anyArray[i].typeOfPet}</footer>`;
            break;
            case "Cat":
                domString += `<footer class="cat">${anyArray[i].typeOfPet}</footer>`;
            break;
            case "Dinosaur": 
                domString += `<footer class="dinosaur">${anyArray[i].typeOfPet}</footer>`;
            break;
        }
    domString += `</div>`;
    
printToDom('pet-adoption', domString);
    };
};


const findMyPets = (e) => {
    const buttonId = e.target.id
    if(buttonId === 'All') {
        buildPetCards(pets);
    } else {
    const myPets = [];
    for(let i= 0; i <pets.length; i++) {
     if (pets[i].typeOfPet === buttonId) {
        myPets.push(pets[i]);
    
}
    }
    buildPetCards(myPets); 
    }
};
const events = () => {
    document.getElementById('Dog').addEventListener('click', findMyPets);
    document.getElementById('Cat').addEventListener('click', findMyPets);
    document.getElementById('Dinosaur').addEventListener('click', findMyPets);
    document.getElementById('All').addEventListener('click', findMyPets);    
    }
const init = () => {
buildPetCards(pets);
events();
}
init ();
