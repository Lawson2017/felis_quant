var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2",
	"method": "get",
	"headers": {
		// "x-rapidapi-host": "yodish.p.rapidapi.com",
		// "x-rapidapi-key": "4f70570368mshfd7f14ac780239fp149d02jsn36b96a04da37",
		// "content-type": "application/x-www-form-urlencoded"
	},
	"data": {}
}
// console.log('test')
const app = document.getElementById('root')
const facts = document.createElement('div')
// h2.textContent = "test"
// app.appendChild(h2)


$.ajax(settings).done(function (response) {
	console.log(response);
	var fact1 = document.createElement('h2');
	var fact2 = document.createElement('h2');
	fact1.textContent = (response[0].text);
	fact2.textContent = (response[1].text);
	facts.appendChild(fact1)
	facts.appendChild(fact2)
    app.appendChild(facts);
});