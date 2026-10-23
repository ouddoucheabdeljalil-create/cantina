const food = []

const btnAjoute = document.getElementById('btn-ajoute');
const folumlaire = document.getElementById('folmulaire');
const btnSubmit = document.getElementById('btn-submit');
const btnAnnuler = document.getElementById('btn-annuler')

//   fuction d'affichage
const nomPlat = document.getElementById('nom-plat');
    const categorie1 = document.getElementById('categorie');
    const badge1 = document.getElementById('badge');
    const prix1 = document.getElementById('prix');
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
        <div class="flex justify-between mx-5"><p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.categorie.value}</p>
        <p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.badge.value}</p></div>
         <div class="flex justify-between mx-5"><button class="bg-green-100 border-2 border[#5B7036]-500 px-3 py-1 rounded-lg text-[#5B7036]">Modifier</button> 
         <button  class="bg-red-100 border border-red-500 px-3 py-1 rounded-lg text-[#B91C1C]">Supprime</button></div></div>`
    }
    console.log(food)
    const lmkla = document.getElementById('lmakla')

    lmkla.appendChild(divFood)
}


let compteur = 0;
const count = document.getElementById('compteur')
btnAjoute.addEventListener('click', function (e) {
    e.preventDefault
    folumlaire.classList.remove('hidden');
})
btnSubmit.addEventListener('click', function (e) {
        e.preventDefault()
        folumlaire.classList.toggle('hidden');
        afficherFood()
        compteur++;
        count.textContent = compteur;
       
})
btnAnnuler.addEventListener('click' , function(e){
    e.preventDefault()
    folumlaire.classList.add('hidden')
})



















