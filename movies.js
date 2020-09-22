$(document).ready(function () {
	const url = 'https://chrome-locrian-pickle.glitch.me/movies';
	fetch(url)
			.then(response => response.json())
			.then(data => console.log(data));


// let addData = new FormData();
// addData.append("name", $("#movieTitle").val())
// addData.append("name", $("#movieDate").val())
// addData.append("name", $("#rating").val())

$('form').submit(function (event) {
	event.preventDefault();

	let title = $("#movieTitle").val();
	let date = $("#movieDate").val();
	let rating = $("#rating").val();
	console.log(`${title} ${date} ${rating}`);
})

//		// const reviewObj = {
// 		// 	restaurant_id: i,
// 		// 	name: 'Codey',
// 		// 	rating: 5,
// 		// 	comments: "This is a really good place for coding and eating"
// 		// }
//
// const url = 'https://codeup-restful-example.glitch.me/reviews';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// 	body: JSON.stringify(reviewObj),
// };
// fetch(url, options)
// 		.then( response => console.log(response) ) /* review was created successfully */
// 		.catch( error => console.error(error) ); /* handle errors */