const food = []

const btnAjoute = document.getElementById('btn-ajoute');
const folumlaire = document.getElementById('folmulaire');
const btnSubmit = document.getElementById('btn-submit');
const btnAnnuler = document.getElementById('btn-annuler');
const bgFolmulaire = document.getElementById('bg-folmulaire')

//   fuction d'affichage
const nomPlat = document.getElementById('nom-plat');
    const categorie1 = document.getElementById('categorie');
    const badge1 = document.getElementById('badge');
    const prix1 = document.getElementById('prix');
    const lmkla = document.querySelector('#lmakla');

    // const btnSupprime = document.createElement('button');
    // btnSupprime.classList.add('btn-supprime');
    // btnSupprime.textContent ='Supprimer'
function afficherFood (){
        

    
    food.push({
        id: food.length + 1,
        nom: nomPlat,
        categorie: categorie1,
        badge: badge1,
        prix: prix1
    })
    
    const divFood = document.createElement('div');
    divFood.classList.add("divFood")

    for (let p of food) {
        divFood.innerHTML = `<div id="article-reccete" class="py-5 px-0 flex flex-col gap-5"><div class="flex justify-between mx-5"><h2 class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.nom.value}</h2>
        <p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]""><span>${p.prix.value}</span>DH</p></div>
        <div  class="flex justify-between mx-5"><p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.categorie.value}</p>
        <p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.badge.value}</p></div>`
    
    
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
    }
    
    nomPlat.value = '';
    categorie1.value = '';
    badge1.value ='';
    prix1.value = '';
}
const divFood = document.querySelector('.divFood')

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
    compteur++;
    count.textContent = compteur;
})



lmkla.addEventListener('click' , (e) => {
    
    if(e.target.classList.contains('btn-supprime')){
       alert('hello')
        const divFood = e.target.closest('.divFood');
        divFood.remove()
        let x = -1;
        let y = Number(divFood.dataset.id)
        console.log('y',y)
        for(let i = 0 ; i < food.length ;i++){
            if(y === food[i].id){
                x = i
                food.splice(i,1)
                compteur--
                count.textContent = compteur;
            }
            
        }

        console.log('x',x)
        
    }
       
})
console.log(food)



















