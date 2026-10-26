const food = []


const btnAjoute = document.getElementById('btn-ajoute');
const folumlaire = document.getElementById('folmulaire');
const btnSubmit = document.getElementById('btn-submit');
const btnAnnuler = document.getElementById('btn-annuler');
const bgFolmulaire = document.getElementById('bg-folmulaire')

//   fuction d'affichage

const lmkla = document.querySelector('#lmakla');
let counte = 1;
// const btnSupprime = document.createElement('button');
// btnSupprime.classList.add('btn-supprime');
// btnSupprime.textContent ='Supprimer'
function afficherFood (){
    
    const categorie1 = document.getElementById('categorie').value;
    
    const badge1 = document.getElementById('badge').value;
    const prix1 = document.getElementById('prix').value;

    const nomPlat = document.querySelector('#nom-plat').value;
    
    food.push({
        id: counte,
        nom: nomPlat,
        categorie: categorie1,
        badge: badge1,
        prix: prix1
    },)
    

    const divFood = document.createElement('div');
    divFood.classList.add("divFood")

    for (let p of food) {
    
        divFood.innerHTML = `<div id="article-reccete" class="py-5 px-0 flex flex-col gap-5"><div class="flex justify-between mx-5"><h2 class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.nom}</h2>
        <p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]""><span>${p.prix}</span>DH</p></div>
        <div  class="flex justify-between mx-5"><p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.categorie}</p>
        <p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.badge}</p></div>`
    
    
     const btnSupprime = document.createElement('button');
    btnSupprime.classList.add('btn-supprime');
    btnSupprime.textContent ='Supprimer'
        
    const btnModifier = document.createElement('button');
    btnModifier.classList.add('btn-Modifier');
    btnModifier.textContent ='Modifier';
        
    btnModifier.dataset.id = p.id;
    const divBtn = document.createElement('div');
    divBtn.classList.add('div-btn');
    divBtn.appendChild(btnModifier);
    divBtn.appendChild(btnSupprime);
    divFood.appendChild(divBtn);
    
    divFood.dataset.id = p.id;
    lmkla.appendChild(divFood)
    // console.log("yyyyyyyy", p.nom.value)
    }
    
     nomPlat.value = '';
    categorie1.value = '';
    badge1.value ='';
    prix1.value = '';
}

const divFood = document.querySelector('.divFood')
const btnModifier = document.querySelector('.btn-Modifier')

let compteur = 0;

const count = document.getElementById('compteur')
btnAjoute.addEventListener('click', function (e) {
    e.preventDefault()
    folumlaire.classList.remove('hidden');
    bgFolmulaire.classList.remove('hidden')
})

bgFolmulaire.addEventListener('click', function(){
    folumlaire.classList.add('hidden');
    bgFolmulaire.classList.add('hidden');
})
btnAnnuler.addEventListener('click' , function(e){
    e.preventDefault()
    folumlaire.classList.add('hidden')
    bgFolmulaire.classList.add('hidden')
})

folumlaire.addEventListener('submit', function(e){
    e.preventDefault()
    folumlaire.classList.toggle('hidden');
    bgFolmulaire.classList.add('hidden');
    afficherFood()
    counte++;
    compteur++;
    count.textContent = compteur;
})


const nomPlatMod = document.getElementById('nom-plat-mod')
const categorieMod = document.getElementById('categorie-mod')
const badgeMod = document.getElementById('badge-mod');
const prixMod = document.getElementById('prix-mod');
const bgFolmulaireMod = document.getElementById('bg-folmulaire-modifier');
const FolmulaireMod = document.getElementById('folmulaire-modifier');
const btnSubmitMod = document.getElementById('btn-submit-mod');


lmkla.addEventListener('click' , (e) => {
    e.preventDefault()
    if(e.target.classList.contains('btn-supprime')){
        if(confirm('hi')){
    
        const divFood = e.target.closest('.divFood');
        divFood.remove()
        
        let checkId = Number(divFood.dataset.id);
        console.log("check",checkId)
        for(let i = 0 ; i < food.length ;i++){
            if(checkId === food[i].id){
                x = i
                food.splice(i,1)
                compteur--
                count.textContent = compteur;
            }   
        } 
    }}
        if(e.target.classList.contains('btn-Modifier')){
            
        const divFood = e.target.closest('.divFood');
        const foodId = Number(e.target.dataset.id)
        console.log(foodId)
        for(let p of food){
            if(foodId === p.id){
                FolmulaireMod.classList.remove("hidden")
                console.log(p.nom)
                nomPlatMod.value = p.nom;
                categorieMod.value = p.categorie;
                badgeMod.value = p.badge;
                prixMod.value = p.prix;
            
            btnSubmitMod.addEventListener('click', (e) => {
            e.preventDefault();
            FolmulaireMod.classList.add("hidden")
                p.nom = nomPlatMod.value;
                p.prix = prixMod.value;
                p.categorie = categorieMod.value;
                p.badge = badgeMod.value
            
            
           divFood.innerHTML = `<div id="article-reccete" class="py-5 px-0 flex flex-col gap-5"><div class="flex justify-between mx-5"><h2 class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.nom}</h2>
            <p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]""><span>${p.prix}</span>DH</p></div>
            <div  class="flex justify-between mx-5"><p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.categorie}</p>
            <p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.badge}</p></div>`
             const btnSupprime = document.createElement('button');
                btnSupprime.classList.add('btn-supprime');
    btnSupprime.textContent ='Supprimer'
        
    const btnModifier = document.createElement('button');
    btnModifier.classList.add('btn-Modifier');
    btnModifier.textContent ='Modifier';
        
    btnModifier.dataset.id = p.id;
    const divBtn = document.createElement('div');
    divBtn.classList.add('div-btn');
    divBtn.appendChild(btnModifier);
    divBtn.appendChild(btnSupprime);
    divFood.appendChild(divBtn);
    
    divFood.dataset.id = p.id;
        })
        }

           
    }
}


})




// const nomPlatMod = document.getElementById('nom-plat-mod')
// const categorieMod = document.getElementById('categorie-mod')
// const badgeMod = document.getElementById('badge-mod');
// const prixMod = document.getElementById('prix-mod');
// const bgFolmulaireMod = document.getElementById('bg-folmulaire-modifier');
// const FolmulaireMod = document.getElementById('folmulaire-modifier');
// lmkla.addEventListener('click', (e) => {
//     if(e.target.classList.contains('btn-Modifier')){
//     modifierFormulaire(e.target.dataset.id)
    
//     e.preventDefault()
//     FolmulaireMod.classList.remove('hidden');
//     bgFolmulaire.classList.remove('hidden')
//     }

// })
// bgFolmulaire.addEventListener('click', function(){
//     FolmulaireMod.classList.add('hidden');
//     bgFolmulaire.classList.add('hidden');
// })
// function modifierFormulaire(id){
//     let change = [food.find(p => p.id === Number(id))];
//     console.log(change)
//     for(let i of change){
//         let x = document.getElementById('nom-plat')
//         console.log(i.nom)
//         console.log(x.value)
//     }
       
    
    
// }






















