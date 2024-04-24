import express from "express"; 
import movies from "./moviesdata.json" assert {type: "json"};

const app = express();
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello")
})

app.get("/movies", (req,res) => {
    res.send({movies});
})

app.get("/movies/:id", (req,res) => {
    const movieId = Number(req.params.id);
    const movie = movies.find((movie) => movie.id === movieId);
    res.send(movie);
})

app.post("/movies", (req,res) => {
    const newMovie = req.body;
    movies.push(newMovie);
    res.send(newMovie)
})

app.listen(3000, () => {
    console.log("Your app is listening on port 3000!");
})