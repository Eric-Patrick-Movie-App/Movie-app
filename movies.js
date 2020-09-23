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
			// .then(data => console.log(data))
			.then(data => {
				let output = ''
				for (let i = 0; i < data.length; i++) {
					output += `
						<p>${data[i].id}</p>
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
