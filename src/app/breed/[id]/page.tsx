import { fetchCatBreedImages, fetchCatBreeds, fetchDogBreedImages, fetchDogBreeds } from "@/app/repository/breed";
import { combineBreeds } from "@/utils/helper-function";

type BreedProps = {
    params: {
        id: string;
    };
};

export default async function BreedPage({ params }: BreedProps) {
    const breedId = params.id;
       const [dogBreeds, catBreeds] = await Promise.all([fetchDogBreedImages(breedId), fetchCatBreedImages(breedId)]);
    
    const breeds = combineBreeds([
        dogBreeds,  // Fetch only 5 for brevity
        catBreeds
    ])   

    return (
        <div className="container mx-auto p-6">
            {breeds && <div className="border rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <img
                    key={breeds?.id}
                    src={breeds?.url}
                    alt={breeds?.url}
                    className="w-full h-96 object-contain rounded-t-lg"
                />
                {breeds?.breeds[0] && <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">{breeds?.breeds[0]?.name}</h2>
                    <p className="text-lg text-gray-600 mb-2"><strong>Bred For:</strong> {breeds?.breeds[0]?.bred_for}</p>
                    <p className="text-lg text-gray-600 mb-2"><strong>Breed Group:</strong> {breeds?.breeds[0]?.breed_group}</p>
                    <p className="text-lg text-gray-600 mb-2"><strong>Life Span:</strong> {breeds?.breeds[0]?.life_span}</p>
                    <p className="text-lg text-gray-600 mb-2"><strong>Temperament:</strong> {breeds?.breeds[0]?.temperament}</p>
                    <p className="text-lg text-gray-600 mb-2">
                        <strong>Weight:</strong> {breeds?.breeds[0]?.weight?.imperial} lbs / {breeds?.breeds[0]?.weight?.metric} kg
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        <strong>Height:</strong> {breeds?.breeds[0]?.height?.imperial} inches / {breeds?.breeds[0]?.height?.metric} cm
                    </p>
                </div>}
            </div>}
        </div>
    );
}
