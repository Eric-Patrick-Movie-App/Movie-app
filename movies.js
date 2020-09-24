$(document).ready(function () {

	const url = 'https://developers.themoviedb.org/3';
	fetch(url)
			.then(response => response.json())
			.then(data => console.log(data))
	    .then(movieCard(data));

	// $("#addMovieBtn").click(function () {
	// 	getAddMovie();
	// 	alert("Success: Added your movie to the list.");
	// });

	// let key = TMBD_Key
	//Result of https://developers.themoviedb.org/3/configuration/get-api-configuration.
	//Unknown to where it leads
	//https://api.themoviedb.org/3/configuration?api_key=6a380f3841184a8906528cb154445392


	//Even more powerful, you can issue multiple requests, just comma separate the values:
	// https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos,images
// 	fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${key}`)
// 			.then(response => response.json())
// 			.then(data => console.log(data));
// })


// //Retrieves values of user input
// 	let getAddMovie = function () {
// 		$('form').submit(function (event) {
// 			event.preventDefault();
//
// 			let title = $("#addMovieTitle").val();
// 			let date = $("#addMovieDate").val();
// 			let rating = $("#addMovieRating :selected").val(); // The value of the selected option
// 			console.log(`${title} ${date} ${rating}`);
//
// 			postMovie(title, date, rating);
// 		})
// 	}
//
// //Post the movie to the server
// 	let postMovie = function (title, date, rating, i = 0) {
// 		const reviewObj = {
// 			id: i,
// 			name: `${title}`,
// 			date: `${date}`,
// 			rating: `${rating}`
// 		}
// 		const options = {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(reviewObj),
// 		}
// 		fetch(url, options)
// 				.then(response => console.log(response)) /* review was created successfully */
// 				.catch(error => console.error(error)); /* handle errors */
// 	}
// 	const movieList = $('#movie-list');
// 	fetch(url)
// 			.then(response => response.json())
// 			.catch(error => console.log(error))
// 			// .then(data => console.log(data))
// 			.then(data => {
// 				let movieCard = ''
// 				for (let i = 0; i < data.length; i++) {
// 					movieCard += `<div class="card bg-secondary text-white p-3 my-3"">
//     							    	 <div class="col">
// 									        <h4>Title: ${data[i].title}</h4>
// 									 	  		<p>Rating: ${data[i].rating}</p>
// 													<p>${data[i].id}</p>
// 									 			 </div>
// 												</div>`;
// 					movieList.html(movieCard);
// 				}
// 			})
// 			.catch(error => console.error(error));
// })
//
// Single iteration movie card
let movieCard = function (data) {
	for (let movie in data) {
		let movieCard = '';
		//Add movie card
		movieCard += `<div class="container">
      <div class="cellphone-container">
        <div class="movie">
          <div class="menu"><i class="material-icons">x</i></div>
            <div class="movie-img"></div>
              <div class="text-movie-cont">
                <div class="mr-grid">
                  <div class="col1">
                    <h1>`${!path.title}`</h1>
                    <h4>`${!path.release_date}`</h4>
                    <!--Todo:Font Size and float-->
                    <ul class="movie-gen">
                      <!--<li>PG-13  /</li>No option for Runtime or rating in the discover fetch, potential hidden value or just blind-->
                      <!--<li>2h 49min  /</li> ditto-->
                      <li>`${!path.genre_ids[i]}`</li>
                    </ul>
                  </div>
                </div>
                <div class="mr-grid summary-row">
                  <div class="col2">
                    <h5>SUMMARY</h5>
                  </div>
                  <div class="col2">
                  <ul class="movie-likes">
                    <li><i class="material-icons">&#xE813;</i>`${!path.vote_average}`</li>
                    <li><i class="material-icons">&#xE813;</i>`${!path.popularity}`</li>
                  </ul>
                </div>
              </div>
              <div class="mr-grid">
                <div class="col1">
                  <p class="movie-description">`${!path.overview}`</p>
                </div>
              </div>
              <div class="mr-grid actors-row">
                <div class="col1">
                  <p class="movie-actors">`${!path.character}`</p>
                  <!--Todo:Optional Popup/icon for actors displaying info-->
                </div>
              </div>
              <div class="mr-grid action-row">
                <div class="col2"><div class="watch-btn"><h3><i class="material-icons">&#xE037;</i>WATCH TRAILER</h3></div>
                <!--Todo: How to link from {movie_id} to youtube trailer-->
              </div>
                <div class="col6 action-btn"><i class="material-icons">&#xE161;Save</i></div>
                  <div class="col6 action-btn"><i class="material-icons">&#xE866; Comment</i></div>
                  <div class="col6 action-btn"><i class="material-icons">&#xE80D;Rate</i></div>
                </div>
              </div>
            </div>
    		  </div>
        </div>`;
		$("#output").innerHTML = movieCard;
	}
}
movieCard()



// 	$("#deleteMovieBtn").click(function () {
// 		let getDeleteID = $("#deleteMovie").val();
// 		// let deleteById = `${url}/${getDeleteID}`;
// 	})
//
// 	fetch( url, {
// 		method: 'delete',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			data
// 			id= getDeleteID
// 		},
//
// 		body: JSON.stringify() // body data type must match "Content-Type" header
// 	})
// 			.then(response => response.json())
// 			.catch(error => console.error(error));
// })
// function deleteMovie(url) {
// 	return fetch(url, {
// 		method: 'delete'
// 	})
// 			.then(response => response.json())
// 			.catch(error => console.error(error));
// }