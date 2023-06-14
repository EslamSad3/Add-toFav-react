import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const imgApi = 'https://image.tmdb.org/t/p/w500';
function MovieCard({ movie, onAddToFavorites, onRemoveFromFavorites, InFav }) {
    const imgLink = `${imgApi}${movie.backdrop_path}`
    const navigate = useNavigate()
    const showDetails = () => {
        navigate(`/movies/${movie.id}`);
    }
    return (
        <>
            <Card
                className="h-100 my-3  justify-content-end text-center"
                style={{ width: "18rem" }}
                key={movie.id}
            >
                <Card.Img
                    variant="top"
                    src={imgLink}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Button
                        className="btn btn-success m-auto"
                        onClick={() => showDetails(movie)}
                    >
                        Details
                    </Button>
                    {InFav ? (
                        <Button
                            variant="outline-danger"
                            onClick={() => onRemoveFromFavorites(movie)}
                            className="my-2"
                        >
                            Remove from Favorites
                        </Button>
                    ) : (
                        <Button
                            variant="outline-success"
                            onClick={() => onAddToFavorites(movie)}
                            className="my-2"
                        >
                            Add to Favorites
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </>
    );
}

export default MovieCard;
