const food = [
    {
        id:1,
        nom:"tajin",
        categorie: "main",
        badge: "plat"
    }
]





const btnAjoute = document.getElementById('btn-ajoute');
const folumlaire = document.getElementById('folmulaire');
btnAjoute.addEventListener('click', function(){
    
    folumlaire.classList.remove('hidden');
})
const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', function(){
    
    folumlaire.classList.toggle('hidden')
})

const divFood = document.createElement('div');
divFood.classList.add("divFood")



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
// const lmkla = document.getElementById('lmakla')
// btnSubmit.addEventListener('click', function(){
// divFood.innerHTML = `<h2>${nomPlat.value}</h2><p>${prix1.value}DH</p><p>${categorie1.value}</p><p>${badge1.value}</p>`
// lmkla.append(divFood)
// })











