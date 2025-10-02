import axios from "axios";

export interface Model {
    id: string;
    name: string;
    thumbnail: string;
    viewerUrl: string;
}

const API_URL = "https://api.sketchfab.com/v3/models";

export const fecthModels = async (query: string): Promise<Model[]> => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                q: query,
                type: "models",
                count: 12
            }
        });
        

        return response.data.results.map((item: any) => ({
            id: item.uid,
            name: item.name,
            thumbnail: item.thumbnails.images[0].url,
            viewerUrl: item.viewerUrl
        }));

    } catch (error) {
        console.error("error", error);
        return [];
    }
};
