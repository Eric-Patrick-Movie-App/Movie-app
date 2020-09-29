$(document).ready(function () {
	const url = 'https://nettle-miniature-secure.glitch.me/movies';

	//Load Screen
	$(window).on("load", function () {
		$("#spinner-box").fadeOut("slow")
	})

	// $('.mdb-select').materialSelect();

	//---------------------------------------------- Start Movie List --------------------------------------------------//
	//Start Add Movie
	fetch(url)
			.then(response => response.json())
			.then(data => {
				let movieCard = ''
				const movieList = $('#movie-list');
				for (let i = 0; i < data.length; i++) {
					//Add movie card
					movieCard +=
							`<div class="movie-card-container">
                 <div class="movie-card-content">
                   <div class="movie-img">
                     <img src="https://via.placeholder.com/300x400" alt="movie poster">
                   </div>
                   <div class="vl"></div>
                     <div class="movie-card-info">
                       <div class="card-main">
                         <button type="button" class="btn btn-outline-warning right" data-toggle="modal" data-target="#editModal"><i class="fas fa-edit"></i></button>
                         <button type="button" class="btn btn-outline-warning right">X</button>
                         <h1>${data[i].title}</h1>    
                         <h5>(${data[i].date})</h5>
                         <ul class="movie-gen">
                           <li>${data[i].mpa}</li>
                           <li>${data[i].runtime}</li>
                           <li>${data[i].genre}</li>
                         </ul>
                       </div>
                       <div class="card-secondary">
                         <h5>SUMMARY</h5>
                         <p class="">${data[i].overview}</p>
              			     <hr>
                         <h5>Your Review</h5>
                         <p class="">${data[i].review}</p>
                         <p class="">${data[i].rating}</p>
                       </div>
                     </div>
			             </div>
								 </div>`;
				}
				movieList.append(movieCard);
				//End movie card
			})
			.catch(error => console.error(error));
	//End Add Movie


	//Start Delete Button
	$(".deleteMovieBtn").click(function () {
		console.log("test");
		let deleteID = $(".deleteMovieBtn").val;
		deleteMovie(deleteID);
	})

	//Function Delete Movie
	function deleteMovie(id) {
		$(".deleteMovie").click(() => {
			fetch(url + `/${id}`, {method: 'DELETE'})
					.then(response => response.json())
					.catch(error => console.log(error))
		})
	}
	//End Delete Button
	//---------------------------------------------- End Movie List --------------------------------------------------//


	//---------------------------------------------- Start Menu --------------------------------------------------//
	//Start Searchbar

	//End Searchbar







	//Button submitting form addMovie
	$("#addMovieBtn").click(function () {
		getAddMovie();
		alert("Success: Added your movie to the list.");
	});

	//Retrieves values of user input
	let getAddMovie = function () {
		$('form').submit(function (event) {
			event.preventDefault();

			let title = $("#addMovieTitle").val();
			let date = $("#addMovieDate").val();
			let mpa = $("#addMovieMPA :selected").val();
			let runtime = $("#addMovieTime").val();
			let genre = $("#addMovieGenre :selected").val();
			let review = $("#addMovieReview").val();
			let rating = $("#addMovieRating :selected").val();
			console.log(title, date, mpa, runtime, genre, review, rating);
			// The value of the selected option

			postMovie(title, date, mpa, runtime, genre, review, rating);
		})
	}

	//Post the movie to the server
	let postMovie = function (title, date, mpa, runtime, genre, review, rating, i = 0) {
		const reviewObj = {
			id: i,
			title: `${title}`,
			date: `${date}`,
			mpa: `${mpa}`,
			runtime: `${runtime}`,
			genre: `${genre}`,
			overview: "Summary will be added once review is approved",
			review: `${review}`,
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
	//---------------------------------------------- End Menu --------------------------------------------------//
});