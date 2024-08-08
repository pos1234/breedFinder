export interface Breed {
    id: number;
    name: string;
    bred_for: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    weight: {
        imperial: string;
        metric: string;
    };
    height: {
        imperial: string;
        metric: string;
    };
    reference_image_id: string;
}

export interface DogBreedResponse {
    id: string;
    url: string;
    breeds: Breed[];
    width: number;
    height: number;
}
