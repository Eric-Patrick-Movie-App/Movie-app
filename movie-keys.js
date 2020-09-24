//Fetch Documentation & Such: https://developers.themoviedb.org/3/getting-started/images


// Latter Created Authentication token https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id
//Setting Up accounts/keys
//Provided via https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id
const TMBD_Key = "6a380f3841184a8906528cb154445392";

//Start Guest Session
// Continue to Step 3: Create a Guest session ID
// //https://developers.themoviedb.org/3/authentication/create-guest-session
// 			// https://api.themoviedb.org/3/authentication/guest_session/new?api_key=6a380f3841184a8906528cb154445392


// You can also pass this URL a redirect_to parameter, ie:
			//https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to=http://www.yourapp.com/approved
			//Todo:figure out how to redirect to our webpage


//Create guest session List
// INFO: https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies
//Send Request : https://api.themoviedb.org/3/guest_session/602d3fd78f2122b9968bcd12ca7260c7/rated/movies?api_key=6a380f3841184a8906528cb154445392&language=en-US&sort_by=created_at.asc
		// {
		// 	"page": 1,
		// 		"results": [],
		// 		"total_pages": 0,
		// 		"total_results": 0
		// }

		//Official Guest Session Link?
				// https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies
				//Todo:Potential put this somehwere?

		//Create List for user:
				// https://developers.themoviedb.org/3/lists/create-list
					// https://api.themoviedb.org/3/list?api_key=<<api_key>>
					//TODO:Set up to recieve addMovies() @ js & html output

		//Add Movie:https://developers.themoviedb.org/3/lists/add-movie
			//https://api.themoviedb.org/3/list/{list_id}/add_item?api_key=<<api_key>>
			//Todo:Link to Form in all .file types
			//Remove Movie:https://developers.themoviedb.org/3/lists/remove-movie

			//Add Rating: https://developers.themoviedb.org/3/movies/rate-movie
					//https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=<<api_key>>

			//Delete Items on guest user list: https://developers.themoviedb.org/4/list/remove-items
					https://api.themoviedb.org/4/list/{list_id}/items
					//Todo:Read through documentation and ....


			//Put list:https://developers.themoviedb.org/4/list/update-items
					//https://api.themoviedb.org/4/list/{list_id}/items
					//Todo:Read through documentation and .....
//End Guest Session


// Start Cards
	//Cheated a little bit stole a fancy css card off codepen but trying to minimize copy paste

	//Discover Movies !Important use this not get movies
	//https://developers.themoviedb.org/3/discover/movie-discover
	// https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1


	// Holy cow youtube trailers lets blow their socks off
	// //Documentation: https://developers.themoviedb.org/3/movies/get-movie-credits
	// //https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=6a380f3841184a8906528cb154445392&language=en-US


	// Documentation: https://developers.themoviedb.org/3/movies/get-movie-credits
	// //Movie credits Actor https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=6a380f3841184a8906528cb154445392
// End Cards