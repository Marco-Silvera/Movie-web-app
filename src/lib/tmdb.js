const API_KEY = process.env.TMDB_API_KEY; // la API Key v3
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!res.ok) throw new Error("Error al obtener películas populares");
    return await res.json();
}
