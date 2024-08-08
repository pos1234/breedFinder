import { fetchCatBreeds, fetchDogBreeds } from "./repository/breed";
import Link from "next/link";
import { Breed, DogBreedResponse } from "./types/breed";

export default async function Home() {
  const [dogBreeds, catBreeds] = await Promise.all([fetchDogBreeds(), fetchCatBreeds()]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">Random Breeds</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...dogBreeds, ...catBreeds].map((breed: DogBreedResponse) => {
            return <>{
              breed?.breeds?.map((animal: Breed) => {
                return <Link key={breed.id} href={`/breed/${breed.id}`} passHref>
                  <p className="block border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <img
                      src={breed?.url || '/placeholder.jpg'}
                      alt={animal.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold">{animal.name}</h2>
                    </div>
                  </p>
                </Link>
              })

            }</>
          })}
        </div>
      </div>
    </main>
  );
}
