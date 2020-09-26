$(document).ready(function () {
	const url = 'https://chrome-locrian-pickle.glitch.me/movies';
	const movieList = $('#movie-list');

	//Load Screen
	$(window).on("load", function () {
		$("#loader-wrapper").fadeOut("slow")
	})

	// $('.mdb-select').materialSelect();


	fetch(url)
			.then(response => response.json())
			.catch(error => console.log(error))
			// .then(data => console.log(data))
			.then(data => {
				let movieCard = ''
				for (let i = 0; i < data.length; i++) {
					movieCard += `<div class="card bg-secondary text-white p-3 my-3">
    							    	 <div class="col">
      										 <input type="submit" onclick="test()" value="Delete">
									         <h1>Title: ${data[i].title}</h1>
									 	  		 <h4>Rating: ${data[i].rating}</h4>
									 	  		 <h4>Rating: ${data[i].date}</h4>
													 <p class="id">${data[i].id}</p>
									 			 </div>
												</div>`;
				}
				movieList.append(movieCard);
			})
			.catch(error => console.error(error));

//Button
// 	$("#addMovieBtn").click(function () {
// 		getAddMovie();
		// alert("Success: Added your movie to the list.");
	// });
//
// //Retrieves values of user input
// 	let getAddMovie = function () {
// 		$('form').submit(function (event) {
// 			event.preventDefault();
//
// 			let title = $("#addMovieTitle").val();
// 			let date = $("#addMovieDate").val();
// 			let rating = $("#addMovieRating :selected").val();// The value of the selected option
// 			// let comments = $("#addMovieComments").val();
// 			console.log(`${title} ${date} ${rating}`);
//
// 			postMovie(title, date, rating,);
// 		})
// 	}
//
// 	function postMovie(title, date, rating) {
// 		const reviewObj = {
// 			title: `${title}`,
// 			date: `${date}`,
// 			rating: `${rating}`,
// 			// Comments: "This is a really good place for coding and eating"
// 		};
// 		const options = {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(reviewObj),
// 		};
// 		fetch(url, options)
// 				.then(response => console.log(response)) /* review was created successfully */
// 				.catch(error => console.error(error)); /* handle errors */
// 	}
// 	fetch(url + `/26`, {method: 'DELETE'})
// 			.then(response => response.json())
// 			.catch(error => console.log(error))
// })

//
// $(".deleteMovieBtn").click(function () {
// 	console.log("test");
// 	let deleteID2 = $(".deleteMovieBtn").val;
// 	console.log(deleteID2);
// 	deleteMovie(deleteID2);
// })
//
// //
// function deleteMovie(id) {
// 	$(".deleteMovie").click(() => {
// 		fetch(url + `/${id}`, {method: 'DELETE'})
// 				.then(response => response.json())
// 				.catch(error => console.log(error))
// 	})
// }
// $('form button').on("click",function(e){
// 	e.preventDefault();





	// var alertRedInput = "#8C1010";
	// var defaultInput = "rgba(10, 180, 180, 1)";
	//
	// function titleValidation() {
	// 	var title = document.getElementById("add-title");
	// 	var issueArr = [];
	// 	if (!/^.{7,15}$/.test(title)) {
	// 		issueArr.push("Password must be between 7-15 characters.");
	// 	}
	// 	if (!/\d/.test(title)) {
	// 		issueArr.push("Must contain at least one number.");
	// 	}
	// 	if (!/[a-z]/.test(title)) {
	// 		issueArr.push("Must contain a lowercase letter.");
	// 	}
	// 	if (!/[A-Z]/.test(title)) {
	// 		issueArr.push("Must contain an uppercase letter.");
	// 	}
	// 	if (issueArr.length > 0) {
	// 		title.setCustomValidity(issueArr.join("\n"));
	// 		title.style.borderColor = alertRedInput;
	// 	} else {
	// 		title.setCustomValidity("");
	// 		title.style.borderColor = defaultInput;
	// 	}
	// }
});