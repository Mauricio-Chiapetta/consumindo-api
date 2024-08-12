function render(country){
    const card = document.createElement('div');
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h1')
    name.textContent = countryName


    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = country.flags.alt

    const link = document.createElement('a')
    link.href = country.maps.googleMaps
    link.textContent = 'GoogleMaps'
    link.target = 'blank'

    const populacao = document.createElement('h4')
    populacao.textContent = `População:${country.population}`


    card.append(name,flag,populacao,link)
    document.querySelector('#countries').append(card)


}


async function getCountries() {
    const response =  await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()
    console.log(countries)
    

    countries.forEach(render)

}

getCountries()