let button =document.querySelector('.button')
let inputValue=document.querySelector(".inputValue")
let cityName=document.querySelector(".cityName");
let temp=document.querySelector(".temp");
let desc=document.querySelector(".desc");
// let city=inputValue.value;
// const apiKey="b3063021c4be85fb80fdfb360a7d850b";

button.addEventListener('click',function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ inputValue.value +"&appid=b3063021c4be85fb80fdfb360a7d850b&units=metric")
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        let nameValue=data['name'];
        let temValue=data['main']['temp'];
        let descValue=data.weather[0].description
        console.log(nameValue,temValue,descValue);
        cityName.innerHTML=nameValue;
        temp.innerHTML="Temperature : "+temValue+"°C";
        desc.innerHTML=descValue;
    })
    .catch(err=>alert("wrong city name!"))
})
