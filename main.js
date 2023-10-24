const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "Cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
      id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "Dino",
      imageUrl: "https://images.unsplash.com/photo-1697545698598-abd72c46627c?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVubm55JTIwZGlub3NhdXJzfGVufDB8fDB8fHww",
    },
    {     
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "Dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "Dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "Cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "Dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "Cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "Dino",
      imageUrl: "https://images.unsplash.com/photo-1627874458566-20503b954fde?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1bm5ueSUyMGRpbm9zYXVyc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "Cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "Cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "Dino",
      imageUrl: "https://images.unsplash.com/photo-1649486116200-e5d1780657f5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bm5ueSUyMGRpbm9zYXVyc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "Dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "Dog",
      imageUrl: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVubnklMjBkb2d8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "Cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "Cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "Dino",
      imageUrl: "https://images.unsplash.com/photo-1669490868884-f66ebca4feab?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1bm5ueSUyMGRpbm9zYXVyc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "Cat",
      imageUrl: "https://images.unsplash.com/photo-1586042091284-bd35c8c1d917?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1bm55JTIwY2F0c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "Dino",
      imageUrl: "https://images.unsplash.com/photo-1627874458536-1ab04485398e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1bm5ueSUyMGRpbm9zYXVyc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "Dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "Cat",
      imageUrl: "https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1bm55JTIwY2F0c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "Dino",
      imageUrl: "https://images.unsplash.com/photo-1620073119058-711a3240980f?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRpbm9zYXVyZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "Cat",
      imageUrl: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1bm55JTIwY2F0c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "Dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "Dog",
      imageUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVubnklMjBkb2d8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "Cat",
      imageUrl: "https://images.unsplash.com/photo-1566752357183-3afb93dd4d7a?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1bm55JTIwY2F0c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "Dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "Dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "Cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "Cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "Dino",
      imageUrl: "https://images.unsplash.com/photo-1552337125-8cb858777cdf?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRpbm9zYXVyZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];


const app = document.querySelector("#app")

  
const renderToDom = (array) => {

    let domString = ""

    for(object of array){
      domString += `<div class="card" style="width: 18rem;">
        <div class="card-header">${object.name}
        </div>
        <img src=${object.imageUrl} class="card-img-top" alt="..."> 
        <div class="card-body"> 
          <h5 class="card-title">${object.color}</h5>
          <p class="card-text">${object.specialSkill}</p>
        </div> 
        <div class=${object.type} class="card-footer" >${object.type}
        </div>
        <a href="#" class="btn btn-outline-danger" id="delete--${object.id}">Delete</a>
      </div>`
    }
    app.innerHTML = domString
}
renderToDom(pets)


const dogButton = document.querySelector("#dog")
const catButton = document.querySelector("#cat")
const dinoButton = document.querySelector('#dino') 
const petsButton = document.querySelector("#pets")
const form = document.querySelector('form')


const filter1 = () => {
    let dogArray = []

    for (pet of pets){
      if(pet.type === "Dog"){
        dogArray.push(pet)
      }
    }
    renderToDom(dogArray)
  }


const filter2 = () => {
    let catArray = []

    for(pet of pets){
      if (pet.type === "Cat"){
        catArray.push(pet)
      }
    }
    renderToDom(catArray)
  }


const filter3 = () => {
  let dinoArray = []

  for(pet of pets){
    if (pet.type === "Dino"){
      dinoArray.push(pet)
    }
  }
  renderToDom(dinoArray)
}

const filter4 = () => {
   let petArray = []

   for(pet of pets){
     if (pet.type === "Dog" || "Cat" || "Dino"){
      petArray.push(pet)
    }
  }
  renderToDom(petArray)
}


const createPet = (e) => {
    e.preventDefault()

  const newPetObject ={
     id: pets.length + 1,
     name: document.querySelector('#petName').value,
     color: document.querySelector('#petColor').value,
     specialSkill: document.querySelector('#petSpecialSkill').value,
     type: document.querySelector('#petType').value,
    imageUrl: document.querySelector('#petImageUrl').value
   }
   pets.push(newPetObject)
   renderToDom(pets)
   form.reset()
}

const deletePet = (event) => {

  if (event.target.id.includes("delete")){
    
    const [, id] = event.target.id.split("--")

    const index = pets.findIndex(object => object.id === Number(id))

    pets.splice(index, 1)

    renderToDom(pets)
  }
}

dogButton.addEventListener ('click', filter1)
catButton.addEventListener ('click', filter2)
dinoButton.addEventListener ('click', filter3)
petsButton.addEventListener ('click', filter4)
form.addEventListener ('submit', createPet)
app.addEventListener("click", deletePet)



// *Multi-button single filter function attempt

// const filter1 = () => {
//   let petArray = []

//   for(pet of pets){
//     if (pet.type === "Dog"){
//       petArray.push(pet)
//     } else if (pet.type === "Cat"){
//       petArray.push(pet)
//     } else (pet.type === "Dino")
//       petArray.push(pet)
//     }
//   renderToDom(petArray)
//   }


// const filter2 = () => {
//   let allArray = []
 
//   for (pet of pets){
//   (pet.type === "Dog" ||"Cat" || "Dino")
//       allArray.push(pet)
//     }
//     renderToDom(allArray)
//   }
