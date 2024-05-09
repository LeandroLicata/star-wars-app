import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-90">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-yellow-400 text-center">
        Bienvenido a Star Wars Universe
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col items-center justify-center md:mx-4 my-4 md:my-0 border border-yellow-400 rounded-lg bg-black bg-opacity-75 p-4 w-72 md:w-auto">
          <img
            src="/movies.jpg"
            alt="Películas"
            className="h-36 md:h-48 lg:h-56 w-72 md:w-96 lg:w-108 object-cover rounded-lg mb-4"
          />
          <Link href="/films">
            <span className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg cursor-pointer transition duration-300">
              Ver Películas
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center md:mx-4 my-4 md:my-0 border border-yellow-400 rounded-lg bg-black bg-opacity-75 p-4 w-72 md:w-auto">
          <img
            src="/characters.jpeg"
            alt="Personajes"
            className="h-36 md:h-48 lg:h-56 w-72 md:w-96 lg:w-108 object-cover rounded-lg mb-4"
          />
          <Link href="/characters">
            <span className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg cursor-pointer transition duration-300">
              Ver Personajes
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
