export const fetchDogBreeds = async () => {
    const response = await fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0',
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "DEMO-API-KEY"
            }
        }
    );
    return response.json();
};

export const fetchCatBreeds = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0',
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "DEMO-API-KEY"
            }
        }
    );
    return response.json();
};

export const fetchDogBreedImages = async (breedId: string) => {
    try {
      const response = await fetch(`https://api.thedogapi.com/v1/images/${breedId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "DEMO-API-KEY" // Replace with your actual API key
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle the error accordingly (e.g., return an empty array or a specific error object)
      return [];
    }
  };
  

export const fetchCatBreedImages = async (breedId: string) => {
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/images/${breedId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "DEMO-API-KEY" // Replace with your actual API key
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle the error accordingly (e.g., return an empty array or a specific error object)
      return [];
    }
  };
  
