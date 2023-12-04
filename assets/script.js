// Esercizio 1 //
class User{
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    confrontaEtà(altroUser){
        if(this.age < altroUser.age){
            return console.log(`${this.firstName} è più giovane di ${altroUser.firstName}`)
        } else if (this.age > altroUser.age){
            return console.log(`${this.firstName} è più vecchio di ${altroUser.firstName}`)
        } else {
            return console.log(`${this.firstName} ha la stessa età di ${altroUser.firstName}`)
        }
    }
}

const utente1 = new User("Francesco", "Margotta", 25, "Rimini")
const utente2 = new User("Mario", "Rossi", 40, "Bologna")

const confrontoEtà = utente1.confrontaEtà(utente2)

// Esercizio 2 //

class Pet{
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }
    stessoProprietario(altroAnimale){
        return this.ownerName === altroAnimale.ownerName
    }
}

const pets = []
  
function inserisciAnimale(){
    const petName = document.getElementById("petName").value
    const ownerName = document.getElementById("ownerName").value
    const species = document.getElementById("species").value
    const breed = document.getElementById("breed").value
  
    const nuovoAnimale = new Pet(petName, ownerName, species, breed)
    pets.push(nuovoAnimale)
    console.log(`${petName} è stato inserito sotto il proprietario ${ownerName}`)
    checkProprietario()
  
    const perList = document.getElementById("petList")
    const listItem = document.createElement("li")
    listItem.innerText = `Nome: ${nuovoAnimale.petName}, Proprietario: ${nuovoAnimale.ownerName}, Specie: ${nuovoAnimale.species}, Razza: ${nuovoAnimale.breed}`
    petList.appendChild(listItem)

    document.getElementById('petForm').reset()
}

function checkProprietario(){
    if (pets.length >= 2){
        for (let i=0; i < pets.length-1; i++){
            for (let j = i+1; j<pets.length; j++){
                if (pets[i].stessoProprietario(pets[j])){
                    console.log (`${pets[i].petName} e ${pets[j].petName} hanno lo stesso padrone`)
                } else {
                    console.log (`${pets[i].petName} e ${pets[j].petName} hanno un padrone diverso`)
                }
            }
        }
    }
}
