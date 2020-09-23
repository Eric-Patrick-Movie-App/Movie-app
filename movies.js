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


// };
// fetch(url, options)
// 		.then( response => console.log(response) ) /* review was created successfully */
// 		.catch( error => console.error(error) ); /* handle errors */


// Single iteration card
	let movieCard = function (data) {
		let movieCard = '';
		movieCard += `<div class="card bg-secondary text-white p-3">
    							    <div class="col">
									      <h4>Title: ${data.title}</h4>
									 	  	<p>Rating: ${data.rating}</p>
									 		</div>`;
		document.getElementById("output").innerHTML = movieCard;
	}

	$('#addMovieBtn').click(function () {
		let title = $("#addMovieTitle").val();
		let date = $("#addMovieDate").val();
		let rating = $("#addRating").val();
		let idIteration = 0;
		postMovie(title, date, rating, idIteration);
	})


	let postMovie = function (data) {
		const reviewObj = {
			id: idIteration,
			name: `${title}`,
			date: `${date}`,
			rating: `${rating}`
		}
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(reviewObj),
		}
		fetch(url, options)
				.then(response => console.log(response)) /* review was created successfully */
				.catch(error => console.error(error)); /* handle errors */
	}
})