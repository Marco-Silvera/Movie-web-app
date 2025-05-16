import Contact from "@/components/Contact";
import GenreSection from "@/components/GenreSection";
import HeroHomePage from "@/components/HeroHomePage";
import PopularSection from "@/components/PopularSection";
import TopRatedSection from "@/components/TopRatedSection";
import UpcomingRealeasesSection from "@/components/UpcomingReleasesSection";
import { getPopularMovies, getTopRated, getUpComing } from "@/lib/tmdb";

export default async function Home() {
    const popularMovies = await getPopularMovies();

    const topRatedMovies = await getTopRated();

    const upComingMovies = await getUpComing();

    return (
        <>
            <HeroHomePage movie={popularMovies[0]} />
            <PopularSection movies={popularMovies} />
            <TopRatedSection movies={topRatedMovies.slice(0, 3)} />
            <UpcomingRealeasesSection movies={upComingMovies.slice(0, 4)} />
            <GenreSection movies={popularMovies.slice(0, 12)} />
            <Contact />
        </>
    );
}
