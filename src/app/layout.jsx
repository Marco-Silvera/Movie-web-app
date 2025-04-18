import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Movie Web App",
    description: "Web de peliculas, series e información sobre actores.",
    keywords: ["Peliculas", "Series", "Actores"], // Palabras clave
    author: "MovieWebApp",
    robots: "index, follow", // Permitir indexación
    openGraph: {
        title: "Movie Web App",
        description: "Web de peliculas, series e información sobre actores.",
        url: "https://miweb.com/servicios",
        siteName: "MovieWebApp",
        images: [
            {
                url: "https://miweb.com/images/servicios.jpg",
                width: 1200,
                height: 630,
                alt: "Nuestros servicios",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Movie Web App",
        description: "Web de peliculas, series e información sobre actores.",
        images: ["https://miweb.com/images/servicios.jpg"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable}`}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                <Header />
                <main style={{ flex: 1 }}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
