// http://api.weatherapi.com/v1/current.json?key=6254ecbc7f06440a83c134008252510&q=Colombo&aqi=no

const tempField = document.querySelector(".temperature");
const locationField = document.querySelector(".time_location h3");
const dateTimeField =document.querySelector(".time_location p");
const weatherField = document.querySelector(".weather-condition p");
const searchField = document.querySelector(".search-area");
const form = document.querySelector("form");


form.addEventListener("submit", searchForLocation)

let target = 'jaffna'

const fetchResults = async (targetLocation) => {

  url = `http://api.weatherapi.com/v1/current.json?key=6254ecbc7f06440a83c134008252510&q=${targetLocation}&aqi=no`

  const res = await fetch(url)
  const data= await res.json()
  console.log(data)

  let locationName = data.location.name
  let time = data.location.localtime
  let temp = data.current.temp_c
  let condition = data.current.condition.text
  let conditionIcon = data.current.condition.icon

  updateDetails(temp,locationName,time,condition,)

}

function updateDetails(temp,locationName,time,condition){
  
  let splitDate = time.split(" ")[0];
  let splitTime = time.split(" ")[1];

  let currentDay = getDayName(new Date(splitDate).getDay())
  
  tempField.innerText = temp;
  locationField.innerText = locationName;
  dateTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
  weatherField.innerHTML = condition;
}

function searchForLocation(e) {
  e.preventDefault()
  target = searchField.value
  fetchResults(target)
} 

function getDayName(number){
  switch (number) {
    case 0:
      return "Sunday";
      break;
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    default:
      break;
  }
}