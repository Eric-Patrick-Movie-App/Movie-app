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
						<div class="card col-xs-12 col-sm-12 col-md-4 col-lg-3 m-2">
							<div class="container text-center p-0">
								<div>
									<img src="https://placeimg.com/200/250/any" alt="placeholder" class="my-3">
								</div>
								<h3 class="my-2">${data[i].title}</h3>
								<p>${data[i].year}</p>
								<p class="m-0">${data[i].rating}</p>
								<button type="button" id="remove-btn" class="my-3 py-2 px-3">Remove</button>
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
