import Contact from "@/components/Contact";
import GenreSection from "@/components/GenreSection";
import HeroHomePage from "@/components/HeroHomePage";
import PopularSection from "@/components/PopularSection";
import TopRatedSection from "@/components/TopRatedSection";
import UpcomingRealeasesSection from "@/components/UpcomingReleasesSection";

export default function Home() {
    return (
        <>
            <HeroHomePage />
            <PopularSection />
            <TopRatedSection />
            <UpcomingRealeasesSection />
            <GenreSection />
            <Contact />
        </>
    );
}
