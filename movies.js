$(document).ready(function () {

	const movieList = $('#movie-list');

	const url = 'https://chrome-locrian-pickle.glitch.me/movies';
	const options = {
		method: "GET",
		headers: {
			'Content-Type': 'application/json'
		}
	}
	const getMovie = (url, options) => {
		fetch(url)
			.then(response => response.json())
			.catch(error => console.log(error))
			// .then(info => console.log(info))
			.then(data => {
				let output = ''
				for (let i = 0; i < data.length; i++) {
					output += `
						<div class="card col-3">
							<div class="container">
							<h3>${data[i].title}</h3>
							<p>${data[i].year}</p>
							<p>${data[i].rating}</p>
							<button type="button">Remove</button>
							</div>
						</div>
					`
					movieList.html(output);
				}


			})

	}
	getMovie(url, options)



	$(window).on("load", function () {
		$("#loader-wrapper").fadeOut(5000)
	})
})
