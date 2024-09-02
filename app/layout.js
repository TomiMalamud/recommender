import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Altas Pelis",
  description: "Encontrá pelis parecidas a tus favoritas. Top 10000 películas de IDMB con IA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} p-10`}>{children}
        {/* <footer className="mt-8 text-center">
          <p className="text-xs text-gray-500 mb-2">This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB</p>
          <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/tmdb_logo.svg" 
              alt="The Movie Database (TMDB) Logo" 
              className="h-2 mx-auto"
            />
          </a>
        </footer> */}
      </body>
    </html>
  );
}
