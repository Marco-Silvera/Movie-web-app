const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY; // la API Key v3
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
    const [moviesRes, genresRes] = await Promise.all([
        fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`),
        fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`),
    ]);

    if (!moviesRes.ok || !genresRes.ok)
        throw new Error("Error al obtener películas o géneros");

    const moviesData = await moviesRes.json();
    const genresData = await genresRes.json();

    const genreMap = {};
    genresData.genres.forEach((genre) => {
        genreMap[genre.id] = genre.name;
    });

    const processedMovies = moviesData.results.map((movie) => ({
        ...movie,
        genre_names: movie.genre_ids.map((id) => genreMap[id]),
    }));

    return processedMovies;
}

export async function getTopRated() {
    const [moviesRes, genresRes] = await Promise.all([
        fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`),
        fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`),
    ]);
    if (!moviesRes.ok || !genresRes.ok)
        throw new Error("Error al obtener películas o géneros");

    const moviesData = await moviesRes.json();
    const genresData = await genresRes.json();

    const genreMap = {};
    genresData.genres.forEach((genre) => {
        genreMap[genre.id] = genre.name;
    });

    const processedMovies = moviesData.results.map((movie) => ({
        ...movie,
        genre_names: movie.genre_ids.map((id) => genreMap[id]),
    }));

    return processedMovies;
}

export async function getUpComing() {
    const [moviesRes, genresRes] = await Promise.all([
        fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`),
        fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`),
    ]);

    if (!moviesRes.ok || !genresRes.ok)
        throw new Error("Error al obtener películas o géneros");

    const moviesData = await moviesRes.json();
    const genresData = await genresRes.json();

    const genreMap = {};
    genresData.genres.forEach((genre) => {
        genreMap[genre.id] = genre.name;
    });

    const processedMovies = moviesData.results.map((movie) => ({
        ...movie,
        genre_names: movie.genre_ids.map((id) => genreMap[id]),
    }));

    return processedMovies;
}
