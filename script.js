//const URL = `https://bestweather.p.rapidapi.com/weather/${city}/today?unitGroup=us`;
const inputCityDiv = document.getElementById('citySearch');
const searchBtn = document.getElementById('searchBtn');
const timeDiv = document.getElementById('time');

//Today
const imageCurrent = document.getElementById('imageCurrent');
const cardTitleCurrent = document.getElementsByClassName('card-title')[0];
const cardTextCurrent = document.getElementsByClassName('card-text')[0];

//2nd day

const image1st = document.getElementById('image1');
const cardTitle1 = document.getElementsByClassName('card-title1')[0];
const cardText1 = document.getElementsByClassName('card-text1')[0];

//3rd day
const image2st = document.getElementById('image2');
const cardTitle2 = document.getElementsByClassName('card-title2')[0];
const cardText2 = document.getElementsByClassName('card-text2')[0];

//4th day
const image3st = document.getElementById('image3');
const cardTitle3 = document.getElementsByClassName('card-title3')[0];
const cardText3 = document.getElementsByClassName('card-text3')[0];

const bodyCityDiv = document.getElementById('bodyCity');
const imageDiv = document.getElementById('image');
const temperatureDiv = document.getElementById('temperature');
const dayDiv = document.getElementById('day');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '<Add API Key here>' ,
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const getInfo = (city) => {
	fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
	.then((respone) => respone.json())
	.then((data) => visualizeData(data))
	.catch(err => console.log(err));
}



const getDay = () => {
   const city = inputCityDiv.value;
    getInfo(city);
}

searchBtn.onclick = function() {
    getDay()
}

const visualizeData = (data) => {
	const city = data.location.name;

	bodyCityDiv.childNodes[1].innerText = city;

	imageCurrent.src = data.current.condition.icon;
    cardTitleCurrent.innerText = data.current.temp_c + "\u2103";
	cardTextCurrent.innerText = data.current.condition.text;

	image1st.src = data.forecast.forecastday[0].day.condition.icon;
	cardTitle1.innerText = data.forecast.forecastday[0].day.avgtemp_c + "\u2103";
	cardText1.innerText =  data.forecast.forecastday[0].day.condition.text;

	image2st.src = data.forecast.forecastday[1].day.condition.icon;
	cardTitle2.innerText = data.forecast.forecastday[1].day.avgtemp_c + "\u2103";
	cardText2.innerText =  data.forecast.forecastday[1].day.condition.text;

	image3st.src = data.forecast.forecastday[2].day.condition.icon;
	cardTitle3.innerText = data.forecast.forecastday[2].day.avgtemp_c + "\u2103";
	cardText3.innerText =  data.forecast.forecastday[2].day.condition.text;

}

const test = (data) => {
	console.log(data);
}

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

getInfo('Sofia');