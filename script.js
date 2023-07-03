class User {
    constructor (firstname,lastname,age,location){
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
        this.location=location
    }
    confronto(utente){
          if(this.age>utente.age){
          return this.firstname+  'è piu vecchio di'+ utente.firstname
          }else{
    return  this.firstname +'è piu giovane di'+ utente.firstname
          }
    }
}


const utente1=new User('paolo','rossi',20,'milano')
const utente2=new User('tito','verdi',25,'roma')
console.log(utente1)
console.log(utente2)
console.log(utente1.confronto(utente2))
