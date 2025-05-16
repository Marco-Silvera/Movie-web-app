"use client";
import { useState, useEffect } from "react";
import PopularCard from "../PopularCard";
import SkeletonCard from "../PopularCard/SkeletonCard";
import styles from "./PopularSection.module.scss";
import { getPopularMovies } from "@/lib/tmdb";

function PopularSection() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const skeletonArray = Array.from({ length: 8 });

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getPopularMovies();
                setMovies(data.results);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <section className={styles.Section}>
            <div className={styles.Container}>
                <header className={styles.Header}>
                    <h2>Películas Populares</h2>
                    <a href="/peliculas/dune-2">
                        Ver todas
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <polyline points="14 6 20 12 14 18" />
                        </svg>
                    </a>
                </header>
                <section className={styles.CardContainer}>
                    {loading
                        ? skeletonArray.map((_, index) => (
                              <SkeletonCard key={index} />
                          ))
                        : movies.map((movie) => (
                              <PopularCard
                                  key={movie.id}
                                  link={`/peliculas/${movie.id}`}
                                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                  rating={
                                      Math.floor(movie.vote_average * 10) / 10
                                  }
                                  title={movie.title}
                                  year={movie.release_date?.split("-")[0]}
                              />
                          ))}
                </section>
            </div>
        </section>
    );
}

export default PopularSection;
