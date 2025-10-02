import axios from "axios";

const API_URL = "https://dog.ceo/api/breeds/image/random";

export const fetchRandomDog = async (): Promise<string> => {
  try {
    const response = await axios.get(API_URL);
    return response.data.message as string; // la URL de la imagen
  } catch (error) {
    console.error("Error al obtener la imagen de perro", error);
    return "";
  }
};
