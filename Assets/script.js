var myApiKey = "a3754bd104cc6a59f48fbeea12e2c71f"
fetch("https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=a3754bd104cc6a59f48fbeea12e2c71f")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
})