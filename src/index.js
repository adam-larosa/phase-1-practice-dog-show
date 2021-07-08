const dogsURL = 'http://localhost:3000/dogs'

const tableContainer = document.getElementById('table-body')

document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
})

function fetchDogs() {
    fetch(dogsURL).then(resp => resp.json()).then(response => {
        response.forEach(dog => {
            newPotato = tableRowMaker(dog)
            tableContainer.append( newPotato )
        })
    })
}

function tableRowMaker(dog) {
    const tr = document.createElement('tr')
    const tdName = document.createElement('td')
    tdName.textContent = dog.name
    const tdBreed = document.createElement('td')
    tdBreed.textContent = dog.breed
    const tdSex =  document.createElement('td')
    tdSex.textContent = dog.sex
    const tdButton = document.createElement('td')
    const button = document.createElement('button')
    button.style.width = "100%"
    button.textContent = "Edit"
    tdButton.append(button)
    button.addEventListener('click', () => buttonClick(dog) )
    tr.append(tdName, tdBreed, tdSex, tdButton)
    return tr
}

function buttonClick(dog) {
    const form = document.getElementById('dog-form')
    form.name.value = dog.name
    form.breed.value = dog.breed
    form.sex.value = dog.sex
}