import "./MovieCard.css";

export const MovieCard = () =>{
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img className="card-img" src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" alt="movie-card" />
            </div>
            <div className="card-details">
                <div>
                    <span className="title">The Black Blade</span>
                </div>
                <div>
                    <span className="genre">Genre: Drame, Crime</span>
                </div>
                <div className="ratings">
                    <span>Rating: 4.8</span>
                    <span>142 mins</span>
                </div>
            </div>
            

        </div>
    )
}