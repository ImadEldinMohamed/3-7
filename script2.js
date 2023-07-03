let x=document.getElementById('petname')
let y=document.getElementById('ownername')
let o=document.getElementById('species')
let p=document.getElementById('breed')
const array=[]
class pet{
    constructor(petname, ownername, species,breed){
        this.petname=petname
        this.ownername=ownername
        this.species=species
        this.breed=breed
    }

  
}


const ciao = function(){
    let pippo=document.querySelector('ul')
    pippo.innerHTML = ''
    array.forEach((animal)=>{
        const lista=document.createElement('li')
        lista.innerText = `${animal.petname} ${animal.ownername} - ${animal.species} ${animal.breed}`
        pippo.appendChild(lista)
    })
}



const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
  e.preventDefault() 
const animal=new pet(x.value ,y.value,o.value,p.value)
console.log(animal)
array.push(animal)
x.value=''
y.value=''
o.value=''
p.value=''

ciao()

})

