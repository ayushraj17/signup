import React from "react";
import axios from "axios";
import "./movies.css";
function Movies() {
	const [moviesList, setMoviesList] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			const res = await axios.post("https://hoblist.com/movieList", {
				category: "movies",
				language: "hindi",
				genre: "all",
				sort: "voting",
			});
			console.log(res.data.result);
			setMoviesList(res.data.result);
		};
		try {
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	const renderMoviesList = (movie) => {
		const {
			_id,
			director,
			// writers,
			poster,
			stars,
			title,
			genre,
			pageViews,
			voted,
			language,
			releasedDate,
			runTime,
			// upVoted,
			// downVoted,
		} = movie;

		let date = new Date(releasedDate);
		const month = date.toLocaleString("default", { month: "long" });
		return (
			<div className="movies-list" key={_id}>
				<div className="grid">
					<div className="vote">
						<div className="triangle-up"></div>
						<div className="number">{voted.length}</div>
						<div className="triangle-down"></div>
						<div>Votes</div>
					</div>
					<div className="poster">
						<img src={poster} alt={title} />
					</div>
					<div className="rest-details">
						<h2 className="title">{title}</h2>
						<div className="genre">
							<span>Genre:</span> <span>{genre}</span>
						</div>
						<div className="director">
							<span>Director:</span> <span>{director.toString()}</span>
						</div>
						<div className="Starring">
							<span>Starring:</span> <span>{stars.toString()}</span>
						</div>
						<div className="mDetails">
							{runTime || "90+"} mins | {language} | {date.getDate()}
							{` ${month}`}
						</div>
						<div className="viewm">
							{pageViews} | Voted By {voted.length} people
						</div>
					</div>
				</div>
				<button className="btn">Watch Trailer</button>
			</div>
		);
	};

	return (
		<div className="movies">
			<h1>Movies</h1>
			{moviesList.map((movie) => renderMoviesList(movie))}
		</div>
	);
}

export default Movies;
