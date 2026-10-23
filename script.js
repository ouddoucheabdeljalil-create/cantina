const food = [
    {
        id: 1,
        nom: "Tajin",
        categorie: "Main",
        badge: "healthy",
        prix: 20
    }
]

const btnAjoute = document.getElementById('btn-ajoute');
const folumlaire = document.getElementById('folmulaire');
btnAjoute.addEventListener('click', function () {

    folumlaire.classList.remove('hidden');
})
const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', function () {
        folumlaire.classList.toggle('hidden')

    const nomPlat = document.getElementById('nom-plat');
    const categorie1 = document.getElementById('categorie');
    const badge1 = document.getElementById('badge');
    const prix1 = document.getElementById('prix');
    const btnModifier = document.createElement('button');
    const btnSupprimer = document.createElement('button');
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
        divFood.innerHTML = `<div class="py-5 px-0 flex flex-col gap-5"><div class="flex justify-between mx-5"><h2 class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.nom.value}</h2>
        <p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]""><span>${p.prix.value}</span>DH</p></div>
        <div class="flex justify-between mx-5"><p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.categorie.value}</p>
        <p class="bg-[#F4EFE6] px-3 py-1 rounded-lg text-[#5B7036] border border-[#5B7036]"">${p.badge.value}</p></div>
         <div class="flex justify-between mx-5"><button class="bg-green-100 border-2 border[#5B7036]-500 px-3 py-1 rounded-lg text-[#5B7036]">Modifier</button> 
         <button  class="bg-red-100 border border-red-500 px-3 py-1 rounded-lg text-[#B91C1C]">Supprime</button></div></div>`
    }
    console.log(food)
    const lmkla = document.getElementById('lmakla')
    lmkla.appendChild(divFood)

})







// function afficher(p){
//     btnSubmit.addEventListener('click', function(){
//     divFood.innerHTML = `<h2>${p.value}</h2><p>${p.value}DH</p><p>${p.value}</p><p>${p.value}</p>`
// })
// }

// // for(let p of food){
// //     console.log(afficher(p))
// // }



// const nomPlat= document.getElementById('nom-plat');
// nomPlat.className = 'nomPlat'
// const categorie1 = document.getElementById('categorie');
// categorie1.className= 'categorie1'
// const badge1 = document.getElementById('badge');
// badge1.className = 'badge1'
// const prix1 = document.getElementById('prix');
// prix1.className = 'prix1'
// const aside = document.getElementById('aside');
// // const modifier = document.createElement('button');
// // const supprime = document.createElement('button');
//
// btnSubmit.addEventListener('click', function(){
// divFood.innerHTML = `<h2>${nomPlat.value}</h2><p>${prix1.value}DH</p><p>${categorie1.value}</p><p>${badge1.value}</p>`
// lmkla.append(divFood)
// })











