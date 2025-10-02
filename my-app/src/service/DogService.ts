    import axios from "axios";

    export interface DogBreeds {
    [breed: string]: string[];
    }

    const API_URL = "https://dog.ceo/api/breeds/list/all";

    export const fetchDogBreeds = async (): Promise<DogBreeds> => {
    try {
        const response = await axios.get(API_URL);
        return response.data.message as DogBreeds;
    } catch (error) {
        return {};
    }
    };

    