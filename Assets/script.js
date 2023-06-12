var myApiKey = "a3754bd104cc6a59f48fbeea12e2c71f"

var citySearch=document.querySelector("#searchCity")

var button=document.querySelector("#searchCityButton")

button.addEventListener("click", function(){
    var citySearchHistory=document.createElement("button")
    document.querySelector("#Button").appendChild(citySearchHistory)
    citySearchHistory.textContent= citySearch.value

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ citySearch.value +"&appid=a3754bd104cc6a59f48fbeea12e2c71f&units=imperial")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    document.querySelector("#temp1").textContent=data.main.temp
    document.querySelector("#wind1").textContent=data.wind.speed
    document.querySelector("#humidity1").textContent=data.main.humidity
    document.querySelector("#img1").src="http://openweathermap.org/img/w/"+data.weather[0].icon+ ".png"
 fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+data.coord.lat+"&lon="+data.coord.lon+"&appid=a3754bd104cc6a59f48fbeea12e2c71f&units=imperial")   
 .then((res)=>res.json())
 .then((data)=>{
    console.log(data)
    document.querySelector("#temp2").textContent=data.list[5].main.temp
    document.querySelector("#wind2").textContent=data.list[5].wind.speed
    document.querySelector("#humidity2").textContent=data.list[5].main.humidity
    document.querySelector("#img2").src="http://openweathermap.org/img/w/"+data.list[5].weather[0].icon+ ".png"
   
    document.querySelector("#temp3").textContent="Temp: " +data.list[13].main.temp
    document.querySelector("#wind3").textContent=data.list[13].wind.speed
    document.querySelector("#humidity3").textContent=data.list[13].main.humidity
    document.querySelector("#img3").src="http://openweathermap.org/img/w/"+data.list[13].weather[0].icon+ ".png"

    document.querySelector("#temp4").textContent=data.list[21].main.temp
    document.querySelector("#wind4").textContent=data.list[21].wind.speed
    document.querySelector("#humidity4").textContent=data.list[21].main.humidity
    document.querySelector("#img4").src="http://openweathermap.org/img/w/"+data.list[21].weather[0].icon+ ".png"

    document.querySelector("#temp5").textContent=data.list[29].main.temp
    document.querySelector("#wind5").textContent=data.list[29].wind.speed
    document.querySelector("#humidity5").textContent=data.list[29].main.humidity
    document.querySelector("#img5").src="http://openweathermap.org/img/w/"+data.list[29].weather[0].icon+ ".png"

    document.querySelector("#temp6").textContent=data.list[37].main.temp
    document.querySelector("#wind6").textContent=data.list[37].wind.speed
    document.querySelector("#humidity6").textContent=data.list[37].main.humidity
    document.querySelector("#img6").src="http://openweathermap.org/img/w/"+data.list[37].weather[0].icon+ ".png"

    
 })
})
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=a3754bd104cc6a59f48fbeea12e2c71f&units=imperial")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    document.querySelector("#temp1").textContent=data.main.temp
    document.querySelector("#wind1").textContent=data.wind.speed
    document.querySelector("#humidity1").textContent=data.main.humidity
    document.querySelector("#img1").src="http://openweathermap.org/img/w/"+data.weather[0].icon+ ".png"
 fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+data.coord.lat+"&lon="+data.coord.lon+"&appid=a3754bd104cc6a59f48fbeea12e2c71f&units=imperial")   
 .then((res)=>res.json())
 .then((data)=>{
    console.log(data)
    document.querySelector("#temp2").textContent=data.list[5].main.temp
    document.querySelector("#wind2").textContent=data.list[5].wind.speed
    document.querySelector("#humidity2").textContent=data.list[5].main.humidity
    document.querySelector("#img2").src="http://openweathermap.org/img/w/"+data.list[5].weather[0].icon+ ".png"
   
    document.querySelector("#temp3").textContent="Temp: " +data.list[13].main.temp
    document.querySelector("#wind3").textContent=data.list[13].wind.speed
    document.querySelector("#humidity3").textContent=data.list[13].main.humidity
    document.querySelector("#img3").src="http://openweathermap.org/img/w/"+data.list[13].weather[0].icon+ ".png"

    document.querySelector("#temp4").textContent=data.list[21].main.temp
    document.querySelector("#wind4").textContent=data.list[21].wind.speed
    document.querySelector("#humidity4").textContent=data.list[21].main.humidity
    document.querySelector("#img4").src="http://openweathermap.org/img/w/"+data.list[21].weather[0].icon+ ".png"

    document.querySelector("#temp5").textContent=data.list[29].main.temp
    document.querySelector("#wind5").textContent=data.list[29].wind.speed
    document.querySelector("#humidity5").textContent=data.list[29].main.humidity
    document.querySelector("#img5").src="http://openweathermap.org/img/w/"+data.list[29].weather[0].icon+ ".png"

    document.querySelector("#temp6").textContent=data.list[37].main.temp
    document.querySelector("#wind6").textContent=data.list[37].wind.speed
    document.querySelector("#humidity6").textContent=data.list[37].main.humidity
    document.querySelector("#img6").src="http://openweathermap.org/img/w/"+data.list[37].weather[0].icon+ ".png"

    
 })
})
