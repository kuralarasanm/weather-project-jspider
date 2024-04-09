let temperature=document.getElementById('temperature')
let city=document.getElementById('city')
let cityname=document.getElementById('cityname')


let min=document.getElementById('min')
let max=document.getElementById('max')
let presure=document.getElementById('presure')
let humidity=document.getElementById('humidity')
let feelslike=document.getElementById('feelslike')
let search=async()=>{
    // alert()

    if(cityname.value==""){
        alert('please enter a city name before search')
    }
    else{
        // https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=1cb6532aea3c298a830a71380eace21e
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let response =await fetch(url)
        let data=await response.json()
        // console.log(data);
        temperature.textContent=data.main.temp
        city.textContent=`${data.name} ,${data.sys.country}`

        min.textContent=`${data.main.temp_min}`
        max.textContent=`${data.main.temp_max}`
        presure.textContent=`${data.main.pressure}`
        humidity.textContent=`${data.main.humidity}`
        feelslike.textContent=`${data.main.feels_like}`
    }
}