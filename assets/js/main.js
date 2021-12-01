let searchInput = document.querySelector('.searchInput')

let searchBtn = document.getElementById('searchBtn')

let cities = {
    tehran: { city: 'Tehran', temp: '15', condition: 'Rainy', humidity: '28', windSpeed: '25' },
    qom: { city: 'Qom', temp: '18', condition: 'Sunny', humidity: '35', windSpeed: '30' },
    esfahan: { city: 'Esfahan', temp: '13', condition: 'Cloudy', humidity: '30', windSpeed: '39' },
    tabriz: { city: 'Tabriz', temp: '17', condition: 'Rainy', humidity: '24', windSpeed: '37' },
    shiraz: { city: 'Shiraz', temp: '20', condition: 'Cloudy', humidity: '22', windSpeed: '31' }
}

let backGround = ['../img/images.jpg', '../img/image.jpg', '../img/img.jpg', '../img/pic.jpg', '../img/pic1.jpg']
searchBtn.addEventListener('click', function () {

    let searchValue = searchInput.value;

    let mainCity = cities[searchValue]

    if (mainCity) {
        // let random = Math.floor(Math.random() * backGround.length)
        // document.body.style.backgroundImage = 'url(../img/images.jpg)'
        // console.log(backGround[random])
        document.querySelector('.city').innerHTML = `Weather in ${mainCity.city}`
        document.querySelector('.temp').innerHTML = `${mainCity.temp} °C`
        document.querySelector('.condition').innerHTML = mainCity.condition
        document.querySelector('.humidity').innerHTML = `Humidity: ${mainCity.humidity}%`
        document.querySelector('.wind').innerHTML = `Wind speed: ${mainCity.windSpeed}km/h`
        document.querySelector('.weather').classList.remove('loading')

    } else {
        alert('شهر را به درستی وارد نمایید')
    }
})

searchInput.addEventListener('keydown', function () {
    if (!searchInput.value) {
        document.querySelector('.weather').classList.add('loading')

    }
})

