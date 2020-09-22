$(document).ready(function () {
	const url = 'https://chrome-locrian-pickle.glitch.me/movies';
	fetch(url)
			.then(response => response.json())
			.then(data => console.log(data));
	})