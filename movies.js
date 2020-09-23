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
						<div class="card col-xs-12 col-sm-6 col-md-4 col-lg-3 m-2">
							<div class="container">
								<div>
									<img src="https://placeimg.com/200/250/any" alt="placeholder" class="mt-4">
								</div>
								<h3>${data[i].title}</h3>
								<p>${data[i].year}</p>
								<p>${data[i].rating}</p>
								<button type="button" id="remove-btn" class="my-2">Remove</button>
							</div>
						</div>
					`
					movieList.html(output);
				}


			})

	}
	getMovie(url, options)



	$(window).on("load", function () {
		$("#loader-wrapper").delay(3000).fadeOut(5000)
	})
})
